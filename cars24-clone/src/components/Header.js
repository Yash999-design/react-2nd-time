import React from "react";
import styled from "styled-components";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import CallIcon from '@mui/icons-material/Call';

function Header() {
  return (
    <Container>
      <LeftMenu>
        <p>
          <img src="/images/cars-24.svg" alt="" />
        </p>
        <p>
          New Delhi <ExpandMoreIcon className="expandIcon"></ExpandMoreIcon>
        </p>
        <p>
          Other Cities <ExpandMoreIcon></ExpandMoreIcon>
        </p>
      </LeftMenu>
      <CenterButtons>
        <LeftButton>Buy used car</LeftButton>
        <RightButton>Sell used car</RightButton>
      </CenterButtons>
      <RightMenu>
        <CallIcon></CallIcon>
        <p>Call us between 8am - 10pm 1800 258 5656</p>
        <hr />
        <RightButtonGroup>
          <MenuIcon />
          <AccountCircleIcon />
        </RightButtonGroup>
      </RightMenu>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  min-height: 60px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 25px 70px;
`;

const LeftMenu = styled.div`
  display: flex;
  align-items: center;
  ${"" /* flex:1; */}

  p {
    margin: 0 15px;
    cursor: pointer;
    display: flex;
    align-items: center;
  }
`;
const CenterButtons = styled.div`
  display: flex;
`;
const LeftButton = styled.div`
  margin: 0 10px;
  font-weight: bold;
  background: white;
  color: hsl(219, 100%, 56%);
  height: 40px;
  width: 150px;
  border-radius: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
const RightButton = styled(LeftButton)`
  background: none;
  color: white;
`;

const RightMenu = styled.div`
  width: 30%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  hr {
    height: 40px;
  }
  p {
    margin: 0 10px 0 20px;
    width: 50%;
    text-align: left;
    line-height: 1.4;
  }
`;

const RightButtonGroup = styled.div`
  margin-left: 15px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  height: 40px;
  width: 100px;
  background: hsl(181, 100%, 91%);
  border-radius: 100px;
  cursor: pointer;
`;
