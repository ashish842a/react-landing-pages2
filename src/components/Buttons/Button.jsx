import React from 'react'
import styled from 'styled-components'


const StyleButton = styled.button`
    padding: 8px 20px;
    /* background: transparent;
    border: none;
    background-color: #2f55d4;
    color: #fff;
    border-radius: 15px; */
    /* margin-top:10px; */
`

function Button(props) {
  return (
    <StyleButton className='btn btn-primary commonbtn'>{props.text}</StyleButton>
  )
}

export default Button