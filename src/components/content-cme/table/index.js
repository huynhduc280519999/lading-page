import React from "react"
import "./index.css"

const TitleTrue = prop => {
  const {
    data: { nonSub, sub },
  } = prop
  return (
    <div className="title__true">
      {nonSub}: &nbsp;{sub}
    </div>
  )
}

const Col = prop => {
  const {
    data: { time, content, auth },
  } = prop
  return (
    <div className={`content__cme__col ${!auth ? "not__auth" : ""}`}>
      <div className="content__cme__col__time"> {time}</div>
      <div className="content__cme__col__content"> {content}</div>
      <div className="content__cme__col__auth">
        <span className="content__cme__col__auth_pos">{auth?.position}</span>
        &nbsp;
        <span className="content__cme__col__auth_name">{auth?.name}</span>
      </div>
    </div>
  )
}

const TableContent = prop => {
  const { bigTitle, content } = prop

  return (
    <div className="content__cme__table__wrapper">
      <div className="content__cme__table_title">
        <span className="sub__title">{bigTitle.sub}</span>&nbsp;
        <span className="none__sub__title">({bigTitle.nonSub})</span>
      </div>
      <div className="content__cme__table">
        {content.map((e, idx) => {
          if (e.title) {
            return <TitleTrue keys={idx} data={e} />
          }
          return <Col keys={idx} data={e} />
        })}
      </div>
    </div>
  )
}

export default TableContent
