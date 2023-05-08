import { useState } from "react";
import { CHART_ROOM_NUMBER, CUSTOM_MARK, ELEVATION_END, ELEVATION_START, PLACE_NAMES, SelectionType } from "../../utils/constants";
import CustomSelection from "../custom-selection/custom-selection";
import * as S from "./custom-form.style";
import CustomData from "../custom-data/custom-data";

const levelNumbers = Array.from({length: ELEVATION_END - ELEVATION_START},
  (value, index) => ELEVATION_START + index);

const roomsNumbers = Array.from({length: CHART_ROOM_NUMBER}, (value, index) => ++index)

const CustomForm = () => {
  const[activeSelection, setActiveSelection] = useState(null);
  const[inputError, setInputError] = useState(null);
  const[isOpenCustomSelector, setIsOpenCustomSelector] = useState(false);

  const handleClickOutOfCustom = (evt) => {
    const isNotCustom = evt.target.dataset.customselector !== CUSTOM_MARK;
    if(isNotCustom) {
      setIsOpenCustomSelector(false);
    }
  }

  return(
    <S.Form onClick={handleClickOutOfCustom}>
      <S.FormTitle>Форма бронирования переговорной</S.FormTitle>
      <CustomSelection
        selectionTool={{activeSelection, setActiveSelection}}
        selectionOpenTool={{isOpenCustomSelector, setIsOpenCustomSelector}}
        selectionName={SelectionType.Tower}
        optionsList={PLACE_NAMES}
        inputError={inputError}
        isSmall
      />

      <CustomSelection
        selectionTool={{activeSelection, setActiveSelection}}
        selectionOpenTool={{isOpenCustomSelector, setIsOpenCustomSelector}}
        selectionName={SelectionType.Flor}
        optionsList={levelNumbers}
        inputError={inputError}
      />

      <CustomSelection
        selectionTool={{activeSelection, setActiveSelection}}
        selectionOpenTool={{isOpenCustomSelector, setIsOpenCustomSelector}}
        selectionName={SelectionType.Room}
        optionsList={roomsNumbers}
        inputError={inputError}
      />

      <CustomData />

      {/* <input type="text" name="timePickUp" id="timePickUp" />
      <label htmlFor="timePickUp">Даты и времени</label> */}

      <input type="text" name="comments" id="comments" />
      <label htmlFor="comments">Комментарий</label>

      <button type="submit">Отправить</button>
      <button type="reset">Очистить</button>
    </S.Form>
  );
};

export default CustomForm;
