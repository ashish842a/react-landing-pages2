import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  text-align: center;
  padding: 10px;
  background-color: #2c3e50; 
  position: fixed;
  bottom: 0;
  width: 100%;
  color:#fff;
`;

const year = new Date().getFullYear();


function Footer() {
  return (
    <StyledFooter>
      Made with ❤️ by Ashish Kumar {year}
    </StyledFooter>
  );
}

export default Footer;
