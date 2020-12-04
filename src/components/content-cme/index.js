import React from "react"
import TableContent from "./table"
import "./index.css"

const data = [
  {
    bigTitle: {
      sub: "HỘI TRƯỜNG 1",
      nonSub: "Cập nhật các vấn đề cơ bản trong Phẩu thuật Thần Kinh",
    },
    content: [
      {
        title: true,
        nonSub: "Chủ tọa",
        sub: "PGS TS VÕ TẤN SƠN, BS CKII TRÀ TẤN HOÀNH",
      },
      {
        time: "08:30 - 09:00",
        content: "Xử lý các vấn đề cấp cứu Thần kinh",
        auth: { position: "PGS. TS", name: "VÕ TẤN SƠN" },
      },
      {
        time: "09:00 - 09:30",
        content: "Điều trị chấn thương sọ não nặng",
        auth: { position: "PGS. TS", name: "TRẦN QUANG VINH" },
      },
      {
        time: "09:30 - 10:00",
        content: "Điều trị phẫu thuật tính phình động mạch não ",
        auth: { position: "BS. CKII", name: "TRÀ TẤN HOÀNH" },
      },
      {
        time: "10:00 - 10:30",
        content: "Thảo luận",
      },
      {
        time: "10:30 - 10:45",
        content: "Giải lao",
      },
      {
        time: "10:45 - 11:15",
        content: "Điều trị can thiệp trong thiếu máu não cấp ",
        auth: { position: "BS. CKII", name: "NGUYỄN HUỲNH NHẬT TUẤN" },
      },
      {
        time: "11:15 - 11:45",
        content: "Điều trị can thiệp túi phình động mạch não",
        auth: { position: "ThS. BS", name: "NGUYỄN THÁI BÌNH" },
      },
      {
        time: "11:45 - 12:00",
        content: "Thảo luận",
      },
      {
        time: "12:00 - 13:30",
        content: "Ăn trưa",
      },
      {
        title: true,
        nonSub: "Chủ tọa",
        sub: "TS BS NGUYỄN NGỌC KHANG, PGS TS DƯƠNG ĐẠI HÀ",
      },
      {
        time: "11:30 - 14:00",
        content: "Sử dụng sóng cao tần trong điều trị đau mạn tính",
        auth: { position: "ThS. BS", name: "LÊ VIẾT THẮNG" },
      },
      {
        time: "14:30 - 15:00",
        content: "Điều trị chấn thương cột sống",
        auth: { position: "TS. BS", name: "NGUYỄN NGỌC KHANG" },
      },
      {
        time: "15:00 - 15:15",
        content: "Thảo luận",
      },
      {
        time: "15:15 - 15:30",
        content: "Giải lao",
      },
      {
        time: "15:30 - 16:00",
        content: "Điều trị thái hóa cột sống",
        auth: { position: "BS. CKII", name: "PHAN MINH DỨC" },
      },
      {
        time: "16:00 - 16:30",
        content: "Điều trị kẹp ống sống cổ",
        auth: { position: "TS. BS", name: "PHAN QUANG SƠN" },
      },
      {
        time: "16:30 - 16:50",
        content: "Thảo luận",
      },
      {
        time: "16:50 - 17:00",
        content: "Bế mạc",
      },
    ],
  },
  {
    bigTitle: {
      sub: "HỘI TRƯỜNG 2",
      nonSub: "Cập nhật các vấn đề cơ bản trong Phẩu thuật Thần Kinh",
    },
    content: [
      {
        title: true,
        nonSub: "Chủ tọa",
        sub: "PGS TS ĐỒNG VĂN HỆ, TS BS NGUYỄN KIM CHUNG",
      },
      {
        time: "08:30 - 09:00",
        content: "Phẫu thuật u tuyến yên nội soi",
        auth: { position: "PGS. TS", name: "ĐỒNG VĂN HỆ" },
      },
      {
        time: "09:00 - 09:30",
        content: "Phẫu thuật bắc cầu mạch máu não",
        auth: { position: "TS. BS", name: "TRẦN MINH TRÍ" },
      },
      {
        time: "09:30 - 10:00",
        content: "Phẫu thuật ít xâm lấn trong u não",
        auth: { position: "PGS. TS", name: "DƯƠNG ĐẠI HÀ" },
      },
      {
        time: "10:00 - 10:30",
        content: "Thảo luận",
      },
      {
        time: "10:30 - 10:45",
        content: "Giải lao",
      },
      {
        time: "10:45 - 11:15",
        content: "Điều trị trượt đốt sống lưng bằng kỹ thuật ít xâm lấn",
        auth: { position: "ThS. BS", name: "TRẦN TRUNG KIÊN" },
      },
      {
        time: "11:15 - 11:45",
        content:
          "Reconsider the standard of care - Zeiss Tumor Workflow(See - Check Treat)",
        auth: { position: "", name: "CARL ZEISS" },
      },
      {
        time: "11:45 - 12:00",
        content: "Thảo luận",
      },
      {
        time: "12:00 - 13:30",
        content: "Ăn trưa",
        
      },
      {
        title: true,
        nonSub: "Chủ tọa",
        sub: "TS BS VÕ XUÂN SƠN, PGS TS KIỀU ĐÌNH HÙNG",
      },
      {
        time: "13:30 - 14:00",
        content: "Phẫu thuật thoát vị đĩa đệm cột sống thắt lưng bằng nội soi",
        auth: { position: "TS. TS", name: "VÕ XUÂN SƠN" },
      },
      {
        time: "14:30 - 15:00",
        content: "Điều trị nhiễm trùng cột sống",
        auth: { position: "TS. BS", name: "TRẦN HOÀNG NGỌC ANH" },
      },
      {
        time: "15:00 - 15:15",
        content: "Thảo luận",
      },
      {
        time: "15:15 - 15:30",
        content: "Giải lao",
      },
      {
        time: "15:30 - 16:00",
        content: "Hội chứng thất bại sau phẫu thuật làm cứng cột sống lưng",
        auth: { position: "TS. BS", name: "PHẠM ANH TUẤN" },
      },
      {
        time: "16:30 - 16:30",
        content: "Giải laoThảo luận",
      },
      {
        time: "16:30 - 16:50",
        content: "Bế mạc",
      },
    ],
  },
]
const ContentCme = () => {
  return (
    <div className="content__cme__wrapper">
      <div className="content__cme__wrapper__dash" />
      <div className="content__cme__info">
        <h1>BÀI GIẢNG CME</h1>
        <div>
          <span className="title">Đối tượng:</span>
          <span className="content">
            &nbsp;&nbsp;Bác sĩ Ngoại Thần Kinh, Chấn thương chỉnh hình, Điều
            dưỡng
          </span>
        </div>
        <div>
          <span className="title">Thời gian:</span>
          <span className="content">&nbsp;&nbsp;Thứ Bảy, ngày 05/12/2020</span>
        </div>
        <div>
          <span className="title">Địa điểm:</span>
          <span className="content">
            &nbsp;&nbsp;Khách sạn Sài Gòn - Đà Lạt
          </span>
        </div>
      </div>
      <div className="content__cme">
        {data.map((e, idx) => (
          <TableContent keys={idx} bigTitle={e.bigTitle} content={e.content} />
        ))}
      </div>
    </div>
  )
}

export default ContentCme
