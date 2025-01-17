import React from 'react'
import './style.css'
import { NavLink } from 'react-router-dom'
function AdminNavbar() {
  return (
    <nav className="admin">
        <div className="adminlogo">Admin Page</div>
        <div className="admin__items">
            <div className="admin__items__item">Table</div>
            <div className="admin__items__item">Add Page</div>
        </div>
        <div className="admin__link"><NavLink to='/'><i className="fa-solid fa-house"></i></NavLink></div>
    </nav>
  )
}

export default AdminNavbar