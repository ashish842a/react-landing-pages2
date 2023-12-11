import React from 'react'
import styled from 'styled-components'

const StyleKeyFeatureIcon = styled.div`
    background-color: #1e2d46;
    width:50px;
    height: 50px;
    margin-left: 15px;
`


function KeyFeatureicon(props) {
  return (
    <StyleKeyFeatureIcon className='d-flex align-items-center justify-content-center'>
        <i className={props.classType}></i>
    </StyleKeyFeatureIcon>
  )
}

export default KeyFeatureicon