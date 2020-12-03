import React from 'react'
import Person from './person'
import './index.css'

const Organizer = () => {
  const persons = [
    {
      name: 'võ tấn sơn',
      title: 'PGS. TS',
      position: 'Chủ tịch Hội PTTK Việt Nam'
    },
    {
      name: 'lê văn tiến',
      title: 'BS. CKII',
      position: 'Giám Đốc BVĐK Lâm Đồng'
    },
    {
      name: 'nguyễn phong',
      title: 'TS. BS',
      position: 'Phó Chủ tịch Hội PTTK Việt Nam'
    },
    {
      name: 'đồng văn hệ',
      title: 'PGS. TS',
      position: 'Phó Chủ tịch Hội PTTK Việt Nam'
    },
    {
      name: 'nguyễn trọng thiện',
      title: 'TS. BS',
      position: 'Chủ tịch Hội PTTK Việt Nam'
    },
    {
      name: 'nguyễn minh anh',
      title: 'TS. BS',
      position: 'Tổng thư ký Hội PTTK Việt Nam'
    },
    {
      name: 'nguyễn minh thu',
      title: 'BS. CKII',
      position: 'Trưởng khoa Ngoại Thần Kinh BVĐK Lâm Đồng'
    },
    {
      name: 'phạm vũ thanh',
      title: 'BS. CKII',
      position: 'Trưởng phòng Kế Hoạch Tổng Hợp BVĐK Lâm Đồng'
    }
  ]
  return (
    <div className="organizer">
      <h1 className="organizer__title">Ban tổ chức</h1>
      <div className="dash"></div>
      <div className="organizer__content">
        {persons.map(person => <Person {...person} />)}
      </div>
    </div>
  )
}

export default Organizer