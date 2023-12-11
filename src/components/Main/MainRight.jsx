import React from 'react'
import styled from 'styled-components';

const StyleMainRight = styled.div`
    width:50%;
    height:100%;
    /* border:1px solid red; */
    display:flex;
    align-items: center;
    justify-content: center;
 

    img{
        width:70vw;
        height:60vh;
    }
`

function MainRight() {
  return (
    <StyleMainRight>
       <img src="http://landrick.react-dark.themesbrand.com/static/media/Startup_SVG.d6335a121e2537da0d9613dbf9852729.svg" alt="img" />
    </StyleMainRight>
  )
}

export default MainRight