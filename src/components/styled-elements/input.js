import styled from "styled-components";

const Input = styled.input`
  width: 100%;
  padding: 0.75em 0.5em;

  border-radius: 0.6em;
  border: 2px solid ${({theme, isError, isShown}) => isError ? theme.color.error : isShown ? theme.color.grey : theme.color.midGrey};

  :focus {
    outline: none;
  }

  :focus-visible {
    border: 2px solid ${({theme}) => theme.color.attention};
    outline: none;
  }
`;

export default Input;
