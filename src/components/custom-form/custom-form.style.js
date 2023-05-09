import styled from "styled-components";

const Form = styled.form`
  margin: 4em 0;
  padding: 0 1.25em;
  width: 23.3em;
`;

const FormTitle = styled.h1`
  margin: 0 0 2em;

  font-size: 1.5rem;
  font-weight: 600;
`;

const FormButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`

const FormButton = styled.button`
  padding: 0.5em 1.75em;

  border: 2px solid ${({theme}) => theme.color.grey};
  border-radius: 6.25em;
  color:${({theme}) => theme.color.grey};
  background-color: transparent;
  transition: color 0.4s, background-color 0.4s;

  :hover {
    color: ${({theme}) => theme.color.white};
    background-color: ${({theme}) => theme.color.grey};
    transition: color 0.4s, background-color 0.4s;
  }
`;

export {
  Form,
  FormTitle,
  FormButton,
  FormButtonWrapper,
}
