import { useRef, useState } from "react";
import { CHART_ROOM_NUMBER, CUSTOM_MARK, ELEVATION_END, ELEVATION_START, PLACE_NAMES, InputName, SelectionType, FormErrorSubmitting } from "../../utils/constants";
import CustomSelection from "../custom-selection/custom-selection";
import * as S from "./custom-form.style";
import CustomData from "../custom-data/custom-data";
import CustomComments from "../custom-comments/custom-comments";
import { formateDateTime } from "../../utils/utils";

const levelNumbers = Array.from({length: ELEVATION_END - ELEVATION_START},
  (value, index) => ELEVATION_START + index);

const roomsNumbers = Array.from({length: CHART_ROOM_NUMBER}, (value, index) => ++index)

const CustomForm = () => {
  const formElement = useRef(null);

  const[activeSelection, setActiveSelection] = useState(null);
  const[inputError, setInputError] = useState([]);
  const[isOpenCustomSelector, setIsOpenCustomSelector] = useState(false);
  const[isReset, setIsReset] = useState(false);

  const handleClickOutOfCustom = (evt) => {
    const isNotCustom = evt.target.dataset.customselector !== CUSTOM_MARK;
    if(isNotCustom) {
      setIsOpenCustomSelector(false);
    }
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const errorList = [];
    let formattedDate='';
    let result = {};

    const formData = new FormData(formElement.current);
    const pickerInputValue = document.querySelector('.flatpickr-input').value;

    const towerValue = formData.get(InputName.Tower);
    const florValue = formData.get(InputName.Flor);
    const roomValue = formData.get(InputName.Room);

    towerValue === '' && errorList.push(FormErrorSubmitting.Tower);
    florValue === '' && errorList.push(FormErrorSubmitting.Flor);
    roomValue === '' && errorList.push(FormErrorSubmitting.Room);
    pickerInputValue === '' && errorList.push(FormErrorSubmitting.Date);

    if(errorList.length > 0) {
      setInputError(errorList);
      return;
    } else {
      setInputError([]);
      formattedDate = formateDateTime(pickerInputValue);
      formData.append('date', formattedDate);
    }

    for(let [key, value] of formData) {
      Object.assign(result, {[key]: value});
    }

    console.log(JSON.stringify(result));
  }

  const handleResetClick = () => {
    setIsReset(true);
  }

  return(
    <S.Form
      onClick={handleClickOutOfCustom}
      onSubmit={handleSubmit}
      ref={formElement}
    >
      <S.FormTitle>Форма бронирования переговорной</S.FormTitle>
      <CustomSelection
        selectionTool={{activeSelection, setActiveSelection}}
        selectionOpenTool={{isOpenCustomSelector, setIsOpenCustomSelector}}
        manageReset={{isReset, setIsReset}}
        selectionName={SelectionType.Tower}
        inputName={InputName.Tower}
        optionsList={PLACE_NAMES}
        inputError={inputError}
        isSmall
      />

      <CustomSelection
        selectionTool={{activeSelection, setActiveSelection}}
        selectionOpenTool={{isOpenCustomSelector, setIsOpenCustomSelector}}
        manageReset={{isReset, setIsReset}}
        selectionName={SelectionType.Flor}
        inputName={InputName.Flor}
        optionsList={levelNumbers}
        inputError={inputError}
      />

      <CustomSelection
        selectionTool={{activeSelection, setActiveSelection}}
        selectionOpenTool={{isOpenCustomSelector, setIsOpenCustomSelector}}
        manageReset={{isReset, setIsReset}}
        selectionName={SelectionType.Room}
        inputName={InputName.Room}
        optionsList={roomsNumbers}
        inputError={inputError}
      />

      <CustomData
        inputError={inputError}
        manageReset={{isReset, setIsReset}}
      />

      <CustomComments manageReset={{isReset, setIsReset}}/>

      <S.FormButtonWrapper>
        <S.FormButton type="reset" onClick={handleResetClick}>Очистить</S.FormButton>
        <S.FormButton type="submit">Отправить</S.FormButton>
      </S.FormButtonWrapper>
    </S.Form>
  );
};

export default CustomForm;
