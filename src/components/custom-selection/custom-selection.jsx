import { useEffect, useRef, useState } from "react";
import * as S from "./custom-selection.style";
import { isArrowDown, isArrowUp, isEnter, isEscape, isTab } from "../../utils/utils";
import { CUSTOM_MARK } from "../../utils/constants";



const CustomSelection = ({selectionName, optionsList, isSmall, selectionTool, selectionOpenTool, inputError}) => {
  const isError = inputError === selectionName;
  const {activeSelection, setActiveSelection} = selectionTool;
  const {isOpenCustomSelector, setIsOpenCustomSelector} = selectionOpenTool;

  const optionElementList = useRef([]);
  const [currentFocus, setCurrentFocus] = useState(null);

  const [currentSelection, setCurrentSelection] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if(activeSelection !== selectionName || !isOpenCustomSelector) {
      setIsOpen(false);
    }
  }, [activeSelection, isOpenCustomSelector, selectionName])

  useEffect(() => {
    if(currentFocus && isOpen) {
      currentFocus.focus();
    }
  }, [currentFocus, isOpen])

  const handleInputClick = () => {
    setIsOpenCustomSelector(true);
    setIsOpen(true);
    setActiveSelection(selectionName);

    if(!currentSelection) {
      setCurrentFocus(optionElementList.current[0]);
    }
  }

  const handleOptionClick = (selection, index) => () => {
    setCurrentSelection(selection);
    setCurrentFocus(optionElementList.current[index])
    setIsOpen(false);
    setIsOpenCustomSelector(false);
  }

  const handleOptionKeyDown = (selection, index) => (evt) => {
    const key = evt.key;

    if(isEnter(key)) {
      setCurrentFocus(optionElementList.current[index])
      setCurrentSelection(selection);
      setIsOpen(false);
      setIsOpenCustomSelector(false);
    }

    if(isEscape(key)) {
      setIsOpen(false);
      setIsOpenCustomSelector(false);
    }

    if(isArrowUp(key)) {
      evt.preventDefault();
      if(index === 0) {
        optionElementList.current.at(-1).focus();
      } else {
        optionElementList.current[index - 1].focus();
      }
    }

    if(isArrowDown(key)) {
      evt.preventDefault();
      if(index === optionElementList.current.length - 1) {
        optionElementList.current[0].focus();
      } else {
        optionElementList.current[index + 1].focus();
      }
    }

    if(isTab(key)) {
      evt.preventDefault();
      if(index === optionElementList.current.length - 1) {
        optionElementList.current[0].focus();
      } else {
        optionElementList.current[index + 1].focus();
      }
    }
  }

  const handleRef = (node) => {
    if(optionElementList.current.length < optionsList.length) {
      optionElementList.current.push(node)
    }
  };

  return(
    <S.SelectionWrapper>
      <S.SelectionLabel
        isShown={currentSelection}
        onClick={handleInputClick}
        data-customselector={CUSTOM_MARK}
      >
        {selectionName}
      </S.SelectionLabel>
      <S.SelectionSubWrapper isSmall={isSmall} isOpen={isOpen}>
        <S.Selection isOpen={isOpen}>
          {
            optionsList.map((line, index) => (
              <S.SelectionOption
                onClick={handleOptionClick(line, index)}
                onKeyDown={handleOptionKeyDown(line, index)}
                tabIndex={0}
                ref={handleRef}
                key={line}
              >
                {line}
              </S.SelectionOption>
            ))
          }
        </S.Selection>
      </S.SelectionSubWrapper>
      <S.SelectInput
        onClick={handleInputClick}
        isError={isError}
        value={currentSelection ? currentSelection : ''}
        type="text"
        data-customselector={CUSTOM_MARK}
        readOnly
      />
      {isError ? <S.SectionWarring>*Пожалуйста заполните поле</S.SectionWarring> : <></>}
    </S.SelectionWrapper>
  );
};

export default CustomSelection;
