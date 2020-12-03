import React from "react"
import "./index.css"

const Header = () => {
  return (
    <div className="header__wrapper">
      <div className="header__background__content">
        <div className="header__title__logo" />
        <p className="header__title__content">
          HỘI PHẪU THUẬT THẦN KINH VIỆT NAM
        </p>
        <h3 className="header_sub_title">CHƯƠNG TRÌNH</h3>
        <h3 className="header_sub_title1">CMC 2020</h3>
        <div className="header__title__address">
          <div>
            <h4>Đà Lạt, 4-5/12/2020</h4>
          </div>
        </div>
        <div className="header__btn_join_wrapper">
          <button className="header__btn_join">THAM GIA</button>
        </div>
      </div>
      <div className="header__background__image" />
    </div>
  )
}

export default Header
