import React from 'react'
import styled from 'styled-components';
import ButtonOutline from '../Buttons/ButtonOutline';
import Button from '../Buttons/Button';

const StyleMainLeft = styled.div`
    width:50%;
    height:100%;
    /* border:1px solid red; */
    display:flex;
    align-items:center;
    justify-content: center;
    flex-direction: column;
    padding:7rem;
  
`

const StyleMainContent = styled.div`

`


function MainLeft() {
  return (
    <StyleMainLeft>
      <StyleMainContent className="container-fluid text-white">
      <h1 style={{color:"#2f55d4"}}>Success</h1>
        <p style={{width:"100%", opacity:"0.8",marginTop:"1.5rem"}}>Launch your campaign and benefit from our expertise on designing and managing conversion centered bootstrap v5 html page.</p>

        <Button text={"Get Started"} />
       
        <ButtonOutline text={"Documentation"}/>
      </StyleMainContent>
    </StyleMainLeft>
  )
}

export default MainLeft