import { Bs2Circle } from "react-icons/bs";

import { Button } from "../Button";
import { TomatoButton } from "../Button/styles";

import { Title, Wrapper } from "./styles";

import flores from "./../../assets/flores.jpeg";

export function Header() {
  return (
    <Wrapper>
      <Title>Hello, Styled Components</Title>
      <Bs2Circle />

      <Button className="btn" id="button" primary>
        <span>Muito barato</span>
      </Button>
      <TomatoButton as="a">Ofertas BF</TomatoButton>

      <img src={flores} />
    </Wrapper>
  );
}
