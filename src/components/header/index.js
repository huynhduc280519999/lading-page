import React from "react"
import "./index.css"
import logo from "../../images/VNS-logo_FA-white-04 .png"

const Header = () => {
  return (
    <div className="header__wrapper">
      <div className="header__background__content">
        <div className="header__title__wrapper">
          <img src={logo} alt="logo" />
        </div>
      </div>
      <div className="header__background__image" />
    </div>
  )
}

export default Header
