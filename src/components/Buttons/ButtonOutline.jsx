import React from 'react'

function ButtonOutline(props) {
  return (
    <button className="btn btn-outline-primary ml-2" htmlFor="btncheck1">{props.text}</button>
  )
}

export default ButtonOutline