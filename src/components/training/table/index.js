import React from 'react'
import './index.css'

const Table = ({ datas, name, subName, batch }) => {
  return (
    <div className="table">
      {name && (<div className="table__title">
        <h3>{name}</h3>
        <p>({subName})</p>
      </div>
      )}
      {batch === 1 && (
        <div className="batch__title">
          <p>Đợt 1: Nhận 10 HV thực hành cổ trước và 25 HV thực hành MIS</p>
        </div>
      )}
      {batch === 2 && (
        <div className="batch__title">
          <p>Đợt 2: 40 HV thực hành cổ chia làm 2 khoảng thời gian khác nhau, 25 thực hành lưng</p>
        </div>
      )}
      {datas.map((data, index) => {
        const { time, activity, manage} = data
        return (
          <div className={`row ${index === 0 ? 'first' : ''} ${batch ? 'batch' : ''}`}>
            <div className="col time">
              <span>{time}</span>
            </div>
            <div className="col activity">
              <ul>
                {activity.map(item => (
                  <li><span>{item}</span></li>
                ))}
              </ul>
            </div>
            <div className="col manage">
              <ul>
                {manage.map(item => (
                  <li>
                    <span>{`${item.position} `}<strong className="manage__name">{item.name}</strong></span>
                    {item.subTitle && <span>{item.subTitle}</span>}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Table