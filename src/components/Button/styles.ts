import styled, { css } from 'styled-components'

import {ButtonProps} from '.'

// import flores from './../../assets/flores.jpeg'

export const ButtonContainer = styled.button<ButtonProps>`
  background: white;
  color: #ca26e4;
  font-size: 1rem;
  padding: 0.25em 1em;
  border: 2px solid #ca26e4;
  border-radius: 3px;
  cursor: pointer;

  // color: ${({primary}) => primary ? '#ca26e4' : 'white'} */

  ${({primary}) => (primary) && 
      css`
        color: white;
        background: #ca26e4;  
      `
  }
  
  &:hover {
    background: ${(props) => (props.primary) ? '#b522cd' : 'white'};
    color: ${(props) => (props.primary) ? 'white' : '#b522cd'};border: 2px solid #b522cd;
  }
`

//#b522cd
export const TomatoButton = styled(ButtonContainer)`
  color: white;
  background: tomato;
  border-color: tomato;
`