import React from "react"
import "./index.css"

const Person = ({ name, title, position, avatar }) => {
  return (
    <div className="person__container">
      <div className="person">
        <div className="avatar">
          <img src={avatar} alt="avatar" />
        </div>
        <div className="person__content">
          <p className="person__name">
            {title}
            <strong>{` ${name}`}</strong>
          </p>
          <p className="person__position">{position}</p>
        </div>
      </div>
    </div>
  )
}

export default Person
