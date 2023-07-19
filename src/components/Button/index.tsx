import React, {ButtonHTMLAttributes, FC, ReactNode} from 'react';
import styled from "@emotion/styled";
import {colors} from "@/utils/constant";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  themes: keyof typeof colors;
}

const ButtonComponent = styled.button<ButtonProps>` 
  padding: 8px 12px;
  background: ${(props) => colors[props.themes]};
  color: white;
  border-radius: 8px;
  border: none;
  cursor: pointer;
`;

const Button: FC<ButtonProps> = ({ children, themes = "primary", ...rest }) => (
  <ButtonComponent
    themes={themes}
    {...rest}
  >
    {children}
  </ButtonComponent>
);

export default Button;
