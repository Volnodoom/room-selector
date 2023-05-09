import styled from "styled-components";

const Label = styled.label`
  position: absolute;
  margin: 0 0 0.25em;
  inset: ${({isShown}) => isShown ? '-1.27em auto auto 0.25em' : '0.75em auto auto 0.25em'};

  color: ${({theme, isShown}) => isShown ? theme.color.grey : theme.color.midGrey};
  font-weight: ${({isShown}) => isShown ? 600 : 400};
  transition: inset 0.3s, color 0.3s;

  @media (min-width: 1100px) {
    position: static;
    color: ${({theme}) => theme.color.grey};
    font-weight: 600;
    align-self: center;
  }

`;

export default Label;
