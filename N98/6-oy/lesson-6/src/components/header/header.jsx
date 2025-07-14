import React,{useEffect,useState}from 'react'
import Logo from "../../assets/logo.svg";
import Cart from "../../assets/Cart.svg"
import Profile from "../../assets/Profile.svg"

const Header = () => {
  return (
        <header className='container'>
            <nav>
                <div className="nav_logo">
                    <img src={Logo} alt="" />
                </div>

                <ul>
                    <li className='list'>Discovery</li>
                    <li className='list'>About</li>
                    <li className='list'>Contact us</li>
                </ul>

                <div className="nav_main">
                    <img src={Profile} width={34} height={34} alt="" />
                    <img src={Cart} width={29} height={28} alt="" />
                </div>
            </nav>
        </header>
  )
}

export default Header