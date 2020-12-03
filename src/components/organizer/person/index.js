import React from 'react'
import './index.css'
import Avatar from '../../../assets/imgs/avatar.png'

const Person = ({ name, title, position }) => {
  return (
    <div className="person__container">
      <div className="person">
        <div className="avatar">
          <img src={Avatar} alt="avatar" />
        </div>
        <div className="person__content">
          <p className="person__name">{title}<strong>{` ${name}`}</strong></p>
          <p className="person__position">{position}</p>
        </div>
      </div>
    </div>
  )
}

export default Person