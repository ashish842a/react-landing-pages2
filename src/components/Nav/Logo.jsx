import React from 'react';
import styled from 'styled-components';

const StyledLogo = styled.div`
  img {
    width: 80%; 
    /* height: auto; */
  }
`;

function Logo() {
  return (
    <StyledLogo>
      <img src={process.env.PUBLIC_URL + '/images/logo.png'} alt="" />
    </StyledLogo>
  );
}

export default Logo;
