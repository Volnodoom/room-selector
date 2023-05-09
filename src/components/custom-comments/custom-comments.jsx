import { useEffect, useState } from "react";
import InputWrapper from "../styled-elements/input-wrapper";
import Label from "../styled-elements/label";
import * as S from "./custom-comments.style";
import Input from "../styled-elements/input";

const CustomComments = () => {
  const [isFocus, setIsFocus] = useState(false);
  const [isShown, setIsShown] = useState(false);
  const [currentContent, setCurrentContent] = useState('');

  useEffect(() => {
    if(currentContent) {
      setIsShown(true);
      return;
    }

    if(isFocus) {
      setIsShown(true);
      return;
    }

    setIsShown(false);
  }, [currentContent, isFocus])

  const handleFocus = () => setIsFocus(true);
  const handleBlur = () => setIsFocus(false);

  const handleOnChange = (evt) => {
    setCurrentContent(evt.target.value);
  }

  return(
    <InputWrapper>
      <Label
        onFocus={handleFocus}
        htmlFor="comments"
        isShown={isShown}
      >
        Комментарий
      </Label>

      <Input
        as='textarea'
        isShown={isShown}
        onChange={handleOnChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        type="text"
        id="comments"
        name="comments"
        rows={isFocus ? 10 : 1}
      />
    </InputWrapper>
  );
};

export default CustomComments;
