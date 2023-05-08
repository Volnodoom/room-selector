import styled, { css } from "styled-components";

const openedSection = css`
  padding: 0.55em 0.5em;
  background-color: ${({theme}) => theme.color.white};
`;

const smallWindow = css`
  height: 5.5em;
`;

const bigWindow = css`
  height: 10em;
`;

const interactionWithFocus = css`
  border: 2px solid transparent;

  :focus,
  :focus-visible {
    border: 2px solid ${({theme}) => theme.color.midGrey};
    outline: none;
  }
`;

const SelectionWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin-bottom: 3em;
`;

const SelectionLabel = styled.label`
  position: absolute;
  margin: 0 0 0.25em;
  inset: ${({isShown}) => isShown ? '-1.27em auto auto 0.25em' : '0.75em auto auto 0.25em'};

  color: ${({theme, isShown}) => isShown ? theme.color.grey : theme.color.midGrey};
  font-weight: ${({isShown}) => isShown ? 600 : 400};
  transition: inset 0.3s, color 0.3s;
`;

const SelectionSubWrapper = styled.div`
  ${({isSmall}) => isSmall ? smallWindow : bigWindow};
  display: ${({isOpen}) => isOpen ? 'block' : 'none' };
  position: absolute;
  inset: 0 0 auto auto;
  width: 100%;
  overflow: hidden;
  z-index: 1000;

  border: 1px solid ${({theme}) => theme.color.lightWhite};
  border-radius: 0.5em;
  box-shadow: 0px 16px 20px -8px rgba(17, 12, 34, 0.1);
`;

const Selection = styled.ul`
  padding: 0;
  margin: 0;
  ${({isSmall}) => isSmall ? smallWindow : bigWindow}

  overflow-y: scroll;
  list-style: none;

  scroll-padding-block: 4px;

  ${({isOpen}) => isOpen && openedSection };
`;

const SelectionOption = styled.li`
  padding: 0.75em 0.8em;
  border-radius: 0.55em;

  font-size: 0.75rem;
  ${interactionWithFocus};

  :hover{
    background-color: ${({theme}) => theme.color.midWhite};
  }
`;

const SelectInput = styled.input`
  width: 100%;
  padding: 0.75em 0.5em;

  border-radius: 0.6em;

  ${interactionWithFocus};
  border: 2px solid ${({theme, isError, isShown}) => isError ? theme.color.error : isShown ? theme.color.grey : theme.color.midGrey};
`;

const SectionWarring = styled.p`
  margin: 0.25em;
  color: ${({theme}) => theme.color.error};
  align-self: flex-end;

  font-size: 0.7rem;
`

export {
  SelectionLabel,
  Selection,
  SelectionOption,
  SelectionSubWrapper,
  SelectionWrapper,
  SelectInput,
  SectionWarring
}
