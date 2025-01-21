import React, { useContext } from 'react'
import { BasketContext } from '../../context/BasketProvider'
import Container from '../../components/container';
import './style.css'
import { useNavigate } from 'react-router-dom';
function Home() {

  const { data, setdata, addToBasket ,basket,wish,setwish,addToWishList} = useContext(BasketContext);
  let total = basket.reduce((acc,prototype)=>{return acc+prototype.price*prototype.count},0)
  const navigate =useNavigate()
  return (
    <section className="items">
      <Container className="container___0">
        <div className="items_headers">
          <h1 className="popular">Popular Items</h1>
          <p className="consec">Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>
        </div>
        <div className="cards_container">
          {data.map(x =>
            <div key={x._id} className='cards_card'>
              <div className="card_img">
                <img src={x.img} alt={x.name} />
              </div>
              <div className='card_name' onClick={()=>navigate("/"+x._id)}>{x.name}</div>
              <div className='card_price'>{x.price}</div>
              <div className='card_buttons'><button className='addtobasket' onClick={() => addToBasket(x)}>{basket.find(item => item._id === x._id)? "artir":"add"}</button><button className='addtobasket' onClick={() => addToWishList(x)}>{wish.find(item => item._id === x._id)? "remove":"add"}</button></div>
            </div>
          )}
        </div>
        <h1> {total}dsfgj</h1>
      </Container>
    </section>
  )
}

export default Home