import React from "react";
import logo from "../../images/LOGO/CDPlightlogo.png"
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SideBtnWrap,
  SidebarRoute,
  NavLogo,
} from "./SidebarElements";

const Sidebar = (props) => {
  return (
    <SidebarContainer isOpen={props.isOpen} onClick={props.toggle}>
      <Icon onClick={props.toggle}>
        <CloseIcon />
        <NavLogo to="/"><img src={logo} style={{height: "120px", width: "120px"}} alt="logo"/></NavLogo>
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="about" onClick={props.toggle}>
            Documentation
          </SidebarLink>
          <SidebarLink to="discover" onClick={props.toggle}>
            Discover
          </SidebarLink>
          <SidebarLink to="services" onClick={props.toggle}>
            Services
          </SidebarLink>
          <SidebarLink to="signup" onClick={props.toggle}>
            About
          </SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute to="/draw">Draw</SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
