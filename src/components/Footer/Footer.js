import React from "react";
import { animateScroll as scroll } from "react-scroll";
import logo from "../../images/LOGO/CDPlightlogo.png";
import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
  SocialIcons,
  SocialIconLink,
} from "./FooterElements";

import {
  FaTwitter,
  FaInstagram,
  FaFacebook,
  FaYoutube,
  FaLinkedin,
} from "react-icons/fa";

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };
  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>About Us</FooterLinkTitle>
              <FooterLink to="/">How it works</FooterLink>
              <FooterLink to="/">Term of Services</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Social Media</FooterLinkTitle>
              <FooterLink to="/">Twitter</FooterLink>
              <FooterLink to="/">Instagram</FooterLink>
              <FooterLink to="/">Facebook</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Contact Us</FooterLinkTitle>
              <FooterLink to="/">Contact No.</FooterLink>
              <FooterLink to="/">Someone@gmail.com</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to="/" onClick={toggleHome}>
              <img src={logo} alt="logo" />
            </SocialLogo>
            <WebsiteRights>
              CDP © {new Date().getFullYear()} All rights reserved.{" "}
            </WebsiteRights>
            <SocialIcons>
              <SocialIconLink
                href="https://www.twitter.com"
                target="_blank"
                aria-label="twitter"
              >
                {" "}
                <FaTwitter />
              </SocialIconLink>
              <SocialIconLink
                href="https://www.instagram.com"
                target="_blank"
                aria-label="instagram"
              >
                {" "}
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink
                href="https://www.facebook.com"
                target="_blank"
                aria-label="facebook"
              >
                {" "}
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink
                href="https://www.youtube.com"
                target="_blank"
                aria-label="youtube"
              >
                {" "}
                <FaYoutube />
              </SocialIconLink>
              <SocialIconLink
                href="https://www.linkedin.com"
                target="_blank"
                aria-label="linkedin"
              >
                {" "}
                <FaLinkedin />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
