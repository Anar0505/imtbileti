import React from 'react'
import './style.css'
import { NavLink } from 'react-router-dom'

function Navbar() {
    return (
        <header>
            <nav className="navbar">
                <div className="navbar__img"><img src="https://preview.colorlib.com/theme/timezone/assets/img/logo/logo.png.webp" alt="" /></div>
                <div className="navbar__items"><div className="navbar__items__item"></div>
                    <div className="navbar__items__item">Home</div>
                    <div className="navbar__items__item">Shop</div>
                    <div className="navbar__items__item">About</div>
                    <div className="navbar__items__item">Latest</div>
                    <div className="navbar__items__item">Blog</div>
                    <div className="navbar__items__item">Pages</div>
                    <div className="navbar__items__item">Contact</div></div>
                <div className="navbar__options">
                    <div className="navbar__options__option"><i classNames="fa-solid fa-magnifying-glass"></i></div>
                    <div className="navbar__options__option">
                        <NavLink to="/adminpage"><i className="fa-solid fa-user"></i></NavLink>
                    </div>
                    <div className="navbar__options__option"><i className="fa-solid fa-cart-shopping"></i></div>
                </div>
                <div className="responsivemenu"><i className="fa-solid fa-bars"></i></div>
            </nav>
        </header>
    )
}

export default Navbar