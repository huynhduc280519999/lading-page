import React from "react"
import "./index.css"

const RapporteurItem = props => {
  const { name, positions } = props
  return (
    <div className="rapporteur__item">
      <p className="rapporteur__item__content">
        <span className="rapporteur__item__content_position">
          {positions}&ensp;
        </span>
        <span className="rapporteur__item__content_name">{name}</span>
      </p>
    </div>
  )
}

export default RapporteurItem
