import React from 'react'
import Table from './table'
import './index.css'

const Training = () => {
  const nameTheory = 'phần lý thuyết'
  const subNameTheory = 'tại Hội trường Bệnh viện, không giới hạn số người tham dự'
  const theorys = [
    {
      time: '08:00 - 08:25',
      activity: ['Ghi danh '],
      manage: [{ name: 'BAN TỔ CHỨC', position: '', subTitle: '' }]
    },
    {
      time: '08:25 - 08:30',
      activity: ['Khai mạc '],
      manage: [{ name: 'VÕ TẤN SƠN', position: 'PGS. TS', subTitle: '' }]
    },
    {
      time: '08:30 - 09:00',
      activity: ['Phẫu thuật lấy nhân đệm và cố định cột sống cổ lối trước'],
      manage: [{ name: 'PHAN QUANG SƠN', position: 'TS. BS', subTitle: 'Bệnh viện Chợ Rẫy' }]
    },
    {
      time: '09:00 - 09:30',
      activity: ['Phẫu thuật bắt vít qua da làm cứng cột sống thắt lưng'],
      manage: [{ name: 'VÕ XUÂN SƠN', position: 'TS. BS', subTitle: 'Phòng khám Exson' }]
    },
    {
      time: '09:30 - 10:00',
      activity: ['Theo dõi điện sinh lý trong phẫu thuật cột sống'],
      manage: [{ name: 'NGUYỄN MINH ANH', position: 'TS. BS', subTitle: 'Bệnh viện Đại học Y dược TP.HCM' }]
    },
    {
      time: '10:00 - 10:15',
      activity: ['Hướng dẫn sử dụng dụng cụ'],
      manage: [{ name: 'Medtronic', position: '', subTitle: '' }]
    },
    {
      time: '10:15 - 10:30',
      activity: ['Giải lao'],
      manage: []
    }
  ]
  const namePractive = 'Phần thực hành'
  const subNamePractive = 'tại Hội trường Bệnh viện, 50 HV, chia thành 10 nhóm'
  const practives1 = [
    {
      time: '10:30 - 12:00',
      activity: ['Thực hành trên xương giả: Kỹ thuật sử dụng miếng ghép đĩa đệm liền vít (sử dụng 1 bộ Divergence SA)',
        'Thực hành trên xương giả: Kỹ thuật MIS (sử dụng 3 bộ MIS)'
      ],
      manage: [
        { name: 'VÕ XUÂN SƠN', position: 'TS. BS', subTitle: '1 station 5 HV x 2 lượt = 10 HV (nhóm 1,2)' },
        { name: 'VÕ XUÂN SƠN', position: 'TS. BS', subTitle: '3 station, mỗi station 5 HV x 2 lượt = 30 HV (nhóm 3,4,5,6,7)'}
      ]
    },
    {
      time: '12:00 - 13:00',
      activity: [
        'Ăn trưa'
      ],
      manage: []
    }
  ]
  const practives2 = [
    {
      time: '13:00 - 14:30',
      activity: [
        'Thực hành trên xương giả: Kỹ thuật sử dụng miếng ghép đĩa đệm liền vít (sử dụng 2 bộ Divergence SA)',
        'Thực hành trên xương giả: Kỹ thuật MIS (sử dụng 3 bộ MIS)'
      ],
      manage: [
        { name: 'PHAN QUANG SƠN', position: 'TS. BS', subTitle: '2 station mỗi station 5 HV x 2 lượt = 20 HV (nhóm 3,4,5,6)' },
        { name: 'HUỲNH QUỐC BẢO', position: 'ThS. BS', subTitle: '3 station, mỗi station 5 HV x 2 lượt = 30 HV (nhóm 1,2,8,9,10)'}
      ]
    },
    {
      time: '14:30 - 14:45',
      activity: ['Giải lao'],
      manage: []
    },
    {
      time: '14:45 - 16:15 ',
      activity: ['Thực hành trên xương giả: Kỹ thuật sử dụng miếng ghép đĩa đệm liền vít (sử dụng 2 bộ Divergence SA)'],
      manage: [
        { name: 'PHAN QUANG SƠN', position: 'TS. BS', subTitle: '2 station mỗi station 5 HV x 2 lượt = 20 HV (nhóm 7,8,9,10)'}
      ]
    },
    {
      time: '14:15 - 16:00',
      activity: ['Thảo luận'],
      manage: []
    }
  ]
  const nameSurgery = 'mổ thị phạm'
  const subNameSurgery = 'truyền hình trực tiếp từ phòng mổ ra Hội trường Bệnh viện, không giới hạn số người tham dự'
  const surgerys = [
    {
      time: '10:15 - 12:00',
      activity: [
        'Phẫu thuật 1 ca cột sống cổ lồi trước',
        'Theo dõi điện sinh lý'
      ],
      manage: [
        { name: 'VÕ TẤN SƠN', position: 'PGS. TS', subTitle: '' },
        { name: 'NGUYỄN MINH THU', position: 'BS. CKI', subTitle: '' },
        { name: 'ĐẶNG LÊ PHƯƠNG', position: 'ThS. BS', subTitle: '' }
      ]
    },
    {
      time: '13:30 - 16:30',
      activity: [
        'Phẫu thuật MIS',
        'Theo dõi điện sinh lý'
      ],
      manage: [
        { name: 'VÕ XUÂN SƠN', position: 'TS. BS', subTitle: '' },
        { name: 'NGUYỄN MINH THU', position: 'BS. CKI', subTitle: ''},
        { name: 'ĐẶNG LÊ PHƯƠNG', position: 'ThS. BS', subTitle: '' }
      ]
    }
  ]
  return (
    <div className="training">
      <div className="training__dash"></div>
      <h1 className="training__title">Chương trình tập huấn</h1>
      <h2 className="training__subtitle">CHƯƠNG TRÌNH TẬP HUẤN MỔ THỊ PHẠM & THỰC HÀNH TRÊN MÔ HÌNH</h2>
      <div className="training_subcription">
        <span className="training__name">Chủ đề:</span>
        <div className="training__content">
          <h3>
            PHẪU THUẬT LẤY THOÁT VỊ CỘT SỐNG CỔ KẾT HỢP LÀM CỨNG LỐI TRƯỚC VÀ BẮT VÍT QUA DA CỘT SỐNG THẮT LƯNG CÓ THEO DÕI ĐIỆN SINH LÝ THẦN KINH TRONG MỔ
          </h3>
          <p>Trường hợp 1: Phẫu thuật lấy thoát vị cột sống cố kết hợp làm cứng lối trước (sáng)</p>
          <p>Trường hợp 2: Bắt vít qua cột sống thắt lưng (chiều)</p>
        </div>
      </div>
      <div className="training_subcription">
        <span className="training__name">Đối tương:</span>
        <p>Phẫu Thuật Viên Thần Kinh, Chấn thương chỉnh hình</p>
      </div>
      <div className="training_subcription">
        <span className="training__name">Thời gian:</span>
        <p>Thứ Sáu, ngày 04/12/2020</p>
      </div>
      <div className="training_subcription">
        <span className="training__name">Địa điểm:</span>
        <p>Bệnh viện Đa Khoa Lâm Đồng</p>
      </div>
      <div>
        <Table
          name={nameTheory}
          subName={subNameTheory}
          datas={theorys}
        />
        <Table
          name={namePractive}
          subName={subNamePractive}
          datas={practives1}
          batch={1}
        />
        <Table
          datas={practives2}
          batch={2}
        />
        <Table 
          datas={surgerys}
          name={nameSurgery}
          subName={subNameSurgery}
        />
      </div>
    </div>
  )
}

export default Training