import styled from "styled-components";
import Input from "../styled-elements/input";

const CommentsInput = styled(Input)`
  @media (min-width: 1100px) {
    width: 50%;

    :focus {
      width: 70%;
    }
  }
`;

export {
  CommentsInput,
}
