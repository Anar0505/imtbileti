import React, { useContext } from 'react'
import { BasketContext } from '../../context/BasketProvider';
import './style.css'
import Container from '../../components/container';
function AdminTable() {
    const { data, setdata, addToBasket, basket, deleteUser } = useContext(BasketContext);
    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Img</th>
                        <th>Options</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(x =>
                        <tr key={x._id}>
                            <td>{x._id}</td>
                            <td>{x.name}</td>
                            <td>{x.price}</td>
                            <td><img src={x.img} alt="" /></td>
                            <td><button onClick={() => deleteUser(x._id)}>X</button></td>
                        </tr>
                    )}
                </tbody>
            </table></Container>
    )
}

export default AdminTable