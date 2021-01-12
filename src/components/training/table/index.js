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
      {datas.map((data, index) => {
        const { time, activity} = data
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
          </div>
        )
      })}
    </div>
  )
}

export default Table