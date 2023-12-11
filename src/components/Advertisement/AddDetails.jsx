import React from 'react'
import styled from 'styled-components'

const StyleImg = styled.div`
    padding: 0 3rem;
    img{
        width:70%;
    }
`

function AddDetails(props) {
  return (
    <StyleImg className='container'>
        <img src={props.imgUrl} alt="ajaan" />
    </StyleImg>
  )
}

export default AddDetails