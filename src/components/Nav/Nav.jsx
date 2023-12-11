import React from 'react';
import styled from 'styled-components';
import Logo from './Logo';
import NavList from './NavList';
import Menu from './Menu';

const StyledNav = styled.div`
  width: 100%;
  height: 55px;
  /* background-color: #1c1120; */
  border-bottom: 1px solid #ffffff2b;
`;

const StyledContainer = styled.div`
  width: 100%;
  height: 100%;
  display:flex;
  align-items:center;
  justify-content:space-between;
  padding:0 60px;
  padding-right:90px;
`;

function Nav() {
  return (
    <StyledNav className="container-fluid">
      <StyledContainer className="container text-white">
        <Logo />
        <NavList />
        <Menu />
      </StyledContainer>
    </StyledNav>
  );
}

export default Nav;
