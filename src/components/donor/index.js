import React from 'react'
import './index.css'
import Img1 from '../../assets/imgs/donor1.png'
import Img2 from '../../assets/imgs/donor2.png'
const Donor = () => {
  return (
    <div className="donor">
      <h1 className="donor__title">đơn vị tài trợ</h1>
      <div className="dash__donor"></div>
      <div className="donor__img">
        <img src={Img1} alt="img" />
        <img src={Img2} alt="img" />
      </div>
    </div>
  )
}

export default Donor