import React from "react"
import Person from "./person"
import "./index.css"
import VuNhat from "../../assets/imgs/vunhat.jpg"
import VuNguyen from "../../assets/imgs/vunguyen.jpg"
import SonML from "../../assets/imgs/sonml.jpg"
import TuiNe from '../../assets/imgs/tuine.jpg'

const Organizer = () => {
  const persons = [
    {
      name: "Phan Ngô Nhật Vũ",
      position: "1+ EXP Dev NodeJS tại ACworks Co.,Ltd.",
      avatar: VuNhat,
    },
    {
      name: "Nguyễn Trần Vũ",
      position: "1+ EXP Dev ReactJS",
      avatar: VuNguyen,
    },
    {
      name: "Trần Văn Anh Sơn",
      position: "Dev tại ACEXIS Joint Stock",
      avatar: SonML,
    },
    {
      name: "Tui nè",
      position: "1+ EXP Full-Stack Dev tại ACEXIS Joint Stock",
      avatar: TuiNe,
    }
  ]
  return (
    <div className="organizer">
      <h1 className="organizer__title">Tham gia đào tạo</h1>
      <div className="dash"></div>
      <div className="organizer__content">
        {persons.map(person => (
          <Person {...person} />
        ))}
      </div>
    </div>
  )
}

export default Organizer
