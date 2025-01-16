import { useLocalStorage } from '@uidotdev/usehooks';
import React, { createContext, useEffect, useState } from 'react';

const BasketContext = createContext();

const BasketProvider = ({ children }) => {
    const [basket, setbasket] = useLocalStorage('basket', []);
    const [data, setdata] = useState([])

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
    useEffect(()=>{
        getdata()
    }, [])
function addToBasket(obj) {
    setbasket(prevBasket => {
        const existingItem = prevBasket.find(item => item._id === obj._id);
        if (existingItem) {
            return prevBasket.map(item =>
                item._id === obj._id
                    ? { ...item, count: item.count + 1 }
                    : item
            );
        } else {
            return [...prevBasket, { ...obj, count: 1 }];
        }
    });
}
    return (
        <BasketContext.Provider value={{ data, setdata, basket, setbasket,addToBasket }}>
            {children}
        </BasketContext.Provider>
    );
};

export { BasketProvider, BasketContext };