import React from "react"
import "./index.css"

const Footer = () => {
  return (
    <div className="footer__wrapper">
      <div className="footer__wrapper__shadow">
        <div className="footer__title1">TIỆC CHÀO MỪNG</div>
        <div className="footer__title2">Gala Dinner</div>
        <div className="footer__title__date__time">
          <div className="footer__title__date">
            <span>THỨ SÁU</span>
          </div>
          <div className="footer__title__sub_date">
            <div className="footer__title__sub_month">Tháng 12</div>
            <div className="footer__title__sub_day">04</div>
            <div className="footer__title__sub_year">2020</div>
          </div>
          <div className="footer__title__time">
            <span>18:00 - 21:00</span>
          </div>
        </div>
        <div className="footer__title__address">
          Khách sạn Sài Gòn - Đà Lạt <br />
          180 Đường Ba tháng 2, Phường 4, TP. Đà Lạt
        </div>
      </div>
    </div>
  )
}

export default Footer
