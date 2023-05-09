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

const SelectionWrapper = styled.div`
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

  @media (min-width: 1100px) {
    width: 50%;
  }
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
  padding: 0.65em 0.8em;
  border-radius: 0.55em;

  font-size: 0.75rem;
  border: 2px solid transparent;

  :not(:last-child) {
    margin-bottom: 0.3em
  }

  :focus {
    background-color: ${({theme}) => theme.color.midWhite};
  }

  :focus-visible {
    border: 2px solid ${({theme}) => theme.color.midGrey};
    outline: none;
  }

  :hover{
    background-color: ${({theme}) => theme.color.midWhite};
  }
`;

const SectionWarring = styled.p`
  margin: 0.25em;
  color: ${({theme}) => theme.color.error};
  align-self: flex-end;

  font-size: 0.7rem;

  @media (min-width: 1100px) {
    position: absolute;
    inset: auto 0 -1.65em auto;

    font-size: 0.8rem;
  }
`;

export {
  Selection,
  SelectionOption,
  SelectionWrapper,
  SectionWarring
}
