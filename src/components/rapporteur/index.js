import React from "react"
import "./index.css"
import RapporteurItem from "./rapporteur-item"

const data = [
  {
    positions: "PGS. TS",
    name: "VÕ TẤN SƠN",
  },
  {
    positions: "BS. CKII",
    name: "TRẦN TẤN HOÀNH",
  },
  {
    positions: "TS. BS",
    name: "NGUYỄN THÁI BÌNH",
  },
  {
    positions: "BS. CKII",
    name: "PHAN MINH ĐỨC",
  },
  {
    positions: "PGS. TS",
    name: "ĐỒNG VĂN HỆ",
  },
  {
    positions: "PGS. TS",
    name: "DƯƠNG ĐẠI HÀ",
  },
  {
    positions: "PGS. TS",
    name: "KIỀU ĐÌNH HÙNG",
  },
  {
    positions: "TS. BS",
    name: "TRẦN HOÀNG NGỌC ANH",
  },
  {
    positions: "TS. BS",
    name: "LÊ VIẾT THẮNG",
  },
  {
    positions: "PGS. TS",
    name: "TRẦN QUUANG VINH",
  },
  {
    positions: "BS CKII",
    name: "NGUYỄN HUỲNH NHẬT TUẤN",
  },
  {
    positions: "TS BS",
    name: "NGUYỄN NGỌC KHANG",
  },
  {
    positions: "TS BS",
    name: "PHAN QUANG SƠN",
  },
  {
    positions: "TS BS",
    name: "TRẦN MINH TRÍ",
  },
  {
    positions: "TS BS",
    name: "TRẦN TRUNG KIÊN",
  },
  {
    positions: "TS BS",
    name: "VÕ XUÂN SƠN",
  },
  {
    positions: "TS BS",
    name: "PHẠM ANH TUẤN",
  },
]

const Rapporteur = () => {
  return (
    <div className="rapporteur__wrapper">
      <div className="rapporteur__wrapper__title">BÁO CÁO VIÊN</div>
      <div className="rapporteur__wrapper__title__dash" />
      <div className="rapporteur__list">
        {data.map(item => (
          <RapporteurItem name={item.name} positions={item.positions} />
        ))}
      </div>
    </div>
  )
}

export default Rapporteur
