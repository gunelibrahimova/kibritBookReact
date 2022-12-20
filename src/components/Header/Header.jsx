import React from 'react'
import './header.scss'
import logo from "../../Image/logo.jpeg"

const Header = () => {
  return (
    <div id='header'>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-2">
            <i class="fa-solid fa-magnifying-glass"></i>
          </div>
          <div className="col-lg-8 ">
            <div className="logo d-flex align-items-center">
              <h5>Əsas Səhifə</h5>
              <img width={100} height="100" src={logo} alt="" />
              <h5>Bütün məhsullar</h5>
            </div>
          </div>
          <div className="col-lg-2">
            <div className="icon">
              <i class="fa-regular fa-user"></i>
              <i class="fa-solid fa-cart-shopping car"></i>
              <span className='price'>0/0.00</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header