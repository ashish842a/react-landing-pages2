import React from 'react';
import styled from 'styled-components';

const StyleUl = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3vw;
  margin: 0;
  cursor: pointer;

  /* @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  } */


  li {
    &:hover {
      color: #95a5a6;
    }
  }
`;

const StyledList = styled.li`
    text-transform: uppercase;
    font-size: 0.8rem;
`



function NavList() {
  return (
    <StyleUl>
      <StyledList className='active'>Home</StyledList>
      <StyledList>Landing</StyledList>
      <StyledList>Page</StyledList>
      <StyledList>Demos</StyledList>
      <StyledList>Components</StyledList>
      <StyledList>Docs</StyledList>
    </StyleUl>
  );
}

export default NavList;
