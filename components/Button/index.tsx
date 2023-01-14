import React from "react";
import * as S from './style'

interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  path: string;
}

const Button = ({ children, path }: IButton) => {
  return (
    <S.Container>
      <S.Button href={path}>{children}</S.Button>
    </S.Container>
  )
}

export default Button