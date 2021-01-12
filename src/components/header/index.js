import React from "react"
import "./index.css"

const Header = () => {
  return (
    <div className="header__wrapper">
      <div className="header__background__content">
        <div className="header__content__wrapper">
          <div className="header__content__wrapper_2">
            <div className="header__title__logo" />
            <p className="header__title__content">
              HỘI CHÉM GIÓ VIỆT NAM
            </p>
            <h3 className="header_sub_title">CHƯƠNG TRÌNH</h3>
            <h3 className="header_sub_title1">REACT 2021</h3>
          </div>
        </div>
        <div className="header__title__address">
          <div>
            <h4>Đà Nẵng, 1/2020</h4>
          </div>
        </div>
      </div>
      <div className="header__background__image" />
    </div>
  )
}

export default Header
