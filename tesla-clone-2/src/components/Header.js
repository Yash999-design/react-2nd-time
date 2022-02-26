import React, { useState } from "react";
import styled from "styled-components";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

function Header() {
  const [burgerStatus, setBurgerStatus] = useState(false);

  return (
    <Container>
      <a href="google.com">
        <img src="/images/logo.svg" alt="" />
      </a>
      <Menu>
        <a href="google.com">Model S</a>
        <a href="google.com">Model 3</a>
        <a href="google.com">Model X</a>
        <a href="google.com">Model Y</a>
      </Menu>
      <RightMenu>
        <a href="google.com">Shop</a>
        <a href="google.com">Tesla Account</a>
        <CustomMenu onClick={() => setBurgerStatus(true)} />
      </RightMenu>
      <BurgerNav show={burgerStatus}>
        <CloseWrapper>
          <CustomClose onClick={() => setBurgerStatus(false)} />
        </CloseWrapper>
        <li>
          <a href="google.com">Existing Inventory</a>
        </li>
        <li>
          <a href="google.com">Used Inventory</a>
        </li>
        <li>
          <a href="google.com">Trade-in</a>
        </li>
        <li>
          <a href="google.com">Cybertruck</a>
        </li>
        <li>
          <a href="google.com">Roadster</a>
        </li>
        <li>
          <a href="google.com">Existing Inventory</a>
        </li>
        <li>
          <a href="google.com">Existing Inventory</a>
        </li>
        <li>
          <a href="google.com">Existing Inventory</a>
        </li>
      </BurgerNav>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
`;
const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  a {
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 10px;
    flex-wrap: nowrap;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const RightMenu = styled.div`
  display: flex;
  align-items: center;
  a {
    font-weight: 600;
    text-transform: uppercase;
    margin-right: 10px;
  }
`;

const CustomMenu = styled(MenuIcon)`
  cursor: pointer;
`;

const BurgerNav = styled.div`
  background: white;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 10;
  width: 300px;
  list-style: none;
  padding: 20px;
  display: flex;
  flex-direction: column;
  text-align: start;
  transform: ${(props) => (props.show ? "translateX(0)" : "translateX(100%)")};
  transition: transform 0.2s;
  li {
    padding: 15px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  }
  a {
    font-weight: 600;
  }
`;

const CustomClose = styled(CloseIcon)`
  cursor: pointer;
`;

const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;