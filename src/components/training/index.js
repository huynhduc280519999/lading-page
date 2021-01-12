import React from 'react'
import Table from './table'
import './index.css'

const Training = () => {
  const nameTheory = 'phần cơ bản'
  const subNameTheory = 'không giới hạn số người tham dự'
  const theorys = [
    {
      time: 'Buổi 1',
      activity: [
        'Ghi danh',
        'Giới thiệu về ReactJS (reactjs.org)',
        'Cài đặt môi trường cần thiết cho khóa học',
        'Tạo React App đầu tiên (Hello world!)',
        'Tạo React App giới thiệu bản thân (sử dụng html/css)'
      ]
    },
    {
      time: 'Buổi 2',
      activity: [
        'JSX là gì ?',
        'Biểu thức trong JSX',
        'Render Element',
        'Cập nhật React App của bạn (sử dụng Object, Array, Biểu thức)'
      ]
    },
    {
      time: 'Buổi 3',
      activity: [
        'Component và Props (Cách phân chia cấu trúc)',
        'Composing Component',
        'Extracting Components',
        'Cập nhật React App của bạn (Phân chia theo Component và Props)'
      ]
    },
    {
      time: 'Buổi 5 - Buổi 6',
      activity: [
        'State and Lifecycle',
        'Định nghĩa state trong Class và Function',
        'setState',
        'Lifecycle',
        'Điều kiện render - Rerender',
        'Cập nhật React App của bạn (Hiển thị yêu thích và ghét với 1 button switch mode hiển thị)'
      ]
    },
    {
      time: 'Buổi 7 - Buổi 8',
      activity: [
        'Xử lý sự kiện và Form',
        'Lấy dữ liệu của Form',
        'Refs',
        'Tạo React App todo list (hiển thị danh sách công việc, thêm, sửa, xóa)'
      ]
    },
    {
      time: 'Buổi 9',
      activity: [
        'API và fetch ở React',
        'Sử dụng với API mặc định và với các API đã được chuẩn bị'
      ]
    },
    {
      time: 'Buổi 10 - Buổi 11',
      activity: [
        'react-router-dom',
        'Cài đặt và thiết lập react-router-dom và React App',
        'Bài tập cuối khóa (Quản lý các biểu mẫu khảo sát khách hàng)',
      ]
    }
  ]
  return (
    <div className="training">
      <div className="training__dash"></div>
      <h1 className="training__title">Chương trình đào tạo</h1>
      <div>
        <Table
          name={nameTheory}
          subName={subNameTheory}
          datas={theorys}
        />
      </div>
    </div>
  )
}

export default Training