import styled from "styled-components";

const InputWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin-bottom: 3em;

  @media (min-width: 1100px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export default InputWrapper;
