import React from 'react';
import styled from "@emotion/styled";
import Link from "next/link";
import {colors} from "@/utils/constant";

const NavbarComponent = styled.div`
  padding: 16px 24px;
  display: flex;
  align-items: center;
  justify-content: end;
  gap: 14px;
  
  & a {
    font-weight: 600;
    font-size: 16px;
    color: ${colors.primary};
    &:hover{
      color: ${colors.secondary};
    }
  }
`

const Navbar = () => (
  <NavbarComponent>
    <Link href="/">List</Link>
    <Link href="/collection">Collection</Link>
  </NavbarComponent>
);

export default Navbar;