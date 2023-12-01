import { ReactNode, ButtonHTMLAttributes } from "react";

import { ButtonContainer } from "./styles";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  primary?: boolean;
  children?: ReactNode;
}

export function Button({ children, primary, ...props }: ButtonProps) {
  return (
    <>
      <ButtonContainer primary={primary} {...props}>
        Comprar agora
      </ButtonContainer>
      {children}
    </>
  );
}
