import React from 'react';
import MainLeft from './MainLeft';
import MainRight from './MainRight';
import styled from 'styled-components';


const StyleMain = styled.div`
  width:100%;
  height:90vh;
  /* background-color: #f3f3f3; */
`


function Main() {
  return (
    <StyleMain className='d-flex'>
      <MainLeft />
      <MainRight />
    </StyleMain>
  );
}



export default Main;
