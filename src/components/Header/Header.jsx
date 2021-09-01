import Link from "next/link";
import React from "react";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterCircle,
} from "react-icons/ai";
import { DiCssdeck } from "react-icons/di";

import {
  Container,
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIcons,
  Span,
} from "./HeaderStyles";

const Header = () => (
  <Container>
    <Div1>
      <Link href="/">
        <a
          style={{
            display: "flex",
            alignItems: "center",
            color: "white ",
            marginBottom: "20px",
          }}
        >
          <DiCssdeck size="3rem" /> <Span>My Portfolio</Span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#projetcs">
          <NavLink>Projects</NavLink>
        </Link>
      </li>

      <li>
        <Link href="#tech">
          <NavLink>Technologies </NavLink>
        </Link>
      </li>

      <li>
        <Link href="#about">
          <NavLink>About </NavLink>
        </Link>
      </li>
    </Div2>
    {/* SOCIALS  */}
    <Div3>
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
    </Div3>
  </Container>
);

export default Header;
