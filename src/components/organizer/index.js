import React from "react"
import Person from "./person"
import "./index.css"
import Bs1 from "../../images/bs1.png"
import Bs2 from "../../images/bs2.png"
import Bs3 from "../../images/bs3.png"
import Bs4 from "../../images/bs4.png"
import Bs5 from "../../images/bs5.png"
import Bs6 from "../../images/bs6.png"
import Bs7 from "../../images/bs7.png"
import Bs8 from "../../images/bs8.png"


const Organizer = () => {
  const persons = [
    {
      name: "võ tấn sơn",
      title: "PGS. TS",
      position: "Chủ tịch Hội PTTK Việt Nam",
      avatar: Bs1,
    },
    {
      name: "lê văn tiến",
      title: "BS. CKII",
      position: "Giám Đốc BVĐK Lâm Đồng",
      avatar: Bs2,
    },
    {
      name: "nguyễn phong",
      title: "TS. BS",
      position: "Phó Chủ tịch Hội PTTK Việt Nam",
      avatar: Bs3,
    },
    {
      name: "đồng văn hệ",
      title: "PGS. TS",
      position: "Phó Chủ tịch Hội PTTK Việt Nam",
      avatar: Bs4,
    },
    {
      name: "nguyễn trọng thiện",
      title: "TS. BS",
      position: "Phó Chủ tịch Hội PTTK Việt Nam",
      avatar: Bs5,
    },
    {
      name: "nguyễn minh anh",
      title: "TS. BS",
      position: "Tổng thư ký Hội PTTK Việt Nam",
      avatar: Bs6,
    },
    {
      name: "nguyễn minh thu",
      title: "BS. CKII",
      position: "Trưởng khoa Ngoại Thần Kinh BVĐK Lâm Đồng",
      avatar: Bs7,
    },
    {
      name: "phạm vũ thanh",
      title: "BS. CKII",
      position: "Trưởng phòng Kế Hoạch Tổng Hợp BVĐK Lâm Đồng",
      avatar: Bs8,
    },
  ]
  return (
    <div className="organizer">
      <h1 className="organizer__title">Ban tổ chức</h1>
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
