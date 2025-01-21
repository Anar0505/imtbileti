import { useLocalStorage } from '@uidotdev/usehooks';
import React, { createContext, useEffect, useState } from 'react';

const BasketContext = createContext();

const BasketProvider = ({ children }) => {
  const [basket, setbasket] = useLocalStorage('basket', []);
  const [data, setdata] = useState([])
  const [wish, setwish] = useLocalStorage('wishlist', [])
  function addToWishList(obj) {
    const inwish = wish.find(i => i._id === obj._id)
    inwish ? setwish(prevwish => prevwish.filter(i => i._id !== obj._id)) : setwish([...wish, obj])

  }

  async function getdata() {
    try {
      const response = await fetch("http://localhost:3000/products");
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
      const json = await response.json();
      setdata(json)

    } catch (error) {
      console.error(error.message);
    }
  }
  useEffect(() => {
    getdata()
  }, [])
  function addToBasket(obj) {
    const inbasket = basket.findIndex(i => i._id === obj._id)
    if (inbasket == -1) {
      setbasket([...basket, { ...obj, count: 1 }])
    }
    else {
      basket[inbasket].count++
      setbasket([...basket])
    }



  }


  function deleteUser(id) {
    fetch(`http://localhost:3000/products/${id}`, {
      method: "DELETE",
    })
      .then(response => response.json())
      .then(() => {
        setdata(data => {
          return data.filter(item => item._id !== id)
        })

      })
  }
  return (
    <BasketContext.Provider value={{ data, setdata, basket, setbasket, addToBasket, deleteUser, addToWishList, wish, setwish }}>
      {children}
    </BasketContext.Provider>
  );
};

export { BasketProvider, BasketContext };