import React from "react";
import { AiFillGithub, AiFillTwitterCircle, AiFillLinkedin } from "react-icons/ai";

import { SocialIcons } from "../Header/HeaderStyles";
import {
  CompanyContainer,
  FooterWrapper,
  LinkColumn,
  LinkItem,
  LinkList,
  LinkTitle,
  Slogan,
  SocialContainer,
  SocialIconsContainer,
} from "./FooterStyles";

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        {/* Telephone number */}
        <LinkColumn>
          <LinkTitle>Call </LinkTitle>
          <LinkItem href="tel: 0500023772">0500023772</LinkItem>
        </LinkColumn>
        {/* EMail */}
        <LinkColumn>
          <LinkTitle>Email </LinkTitle>
          <LinkItem href="mailto: agbesiamenyo@gmail.com">
            agbesiamenyo@gmail.com
          </LinkItem>
        </LinkColumn>
      </LinkList>

      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Learning one project at a time</Slogan>
        </CompanyContainer>
        <SocialContainer>
          {/* SOCIALS  */}
            {/* Github */}
            <SocialIcons href="https://github.com/agbesi-amenyo">
              <AiFillGithub size="3rem " />
            </SocialIcons>
            {/* LinkedIn */}
            <SocialIcons href="https://linkedin.com/in/agbesi-amenyo">
              <AiFillLinkedin size="3rem " />
            </SocialIcons>
            {/* Twitter */}
            <SocialIcons href="https://twitter.com/codewithgrids">
              <AiFillTwitterCircle size="3rem " />
            </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
