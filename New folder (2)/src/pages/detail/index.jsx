import React, { useEffect, useState } from 'react'
import { data, useNavigate, useParams } from 'react-router-dom'
import './style.css'
import Container from '../../components/container'
function Detail() {
    let { id } = useParams()
    const [data, setdata] = useState({})
 const navigate = useNavigate()
    async function getdata(id) {

        try {
            const response = await fetch("http://localhost:3000/products/" + id);
            if (!response.ok) {
                throw new Error(`Response status: ${response.status}`);
            }
            const json = await response.json();
            setdata(json)
            console.log(json);
            console.log("data", data);

        } catch (error) {
            console.error(error.message);
        }
    }
    useEffect(() => {
        // fetch("http://localhost:3000/products/" + id)
        // .then(res=>res.json())
        // .then(res=>setdata(res))
        getdata(id)
    }, [])

    console.log(data);
    return (
        <div className='detail' >
        <Container>
           {data && <>
            <h1>{data.name}</h1>
            <p>Price: ${data.price}</p>
           </> } 
           <button onClick={()=>navigate('/')}>back to home</button>
           </Container>
        </div>
    )
}

export default Detail