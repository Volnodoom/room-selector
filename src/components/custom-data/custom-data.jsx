import "flatpickr/dist/themes/material_green.css";
import "./custom-data.css";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import Flatpickr from "react-flatpickr";
import { FormErrorSubmitting } from "../../utils/constants";

const CustomData = ({inputError, manageReset}) => {
  const hasError = inputError.some(value => value === FormErrorSubmitting.Date);
  const {isReset, setIsReset} = manageReset;

  const labelElement = useRef(null);
  const flInstance = useRef(null);

  const [isError, setIsError] = useState(hasError);
  const [currentDate, setCurrentDate] = useState(null);

  const timeRightNow = new Date();

  const handleChange = ([date]) => {
    setCurrentDate(date )
    setIsError(false);
    setIsReset(false);
  };
  const handleLabelClick = () => flInstance.current.flatpickr.open();

  useEffect(() => {
    setIsError(hasError)
  }, [hasError])

  useEffect(() => {
    if(isReset) {
      flInstance.current.flatpickr.clear();
    }
  }, [isReset])

  useLayoutEffect(() => {
    if(currentDate) {
      labelElement.current.classList.add('final-position');
    }
  }, [currentDate]);

  useLayoutEffect(() => {
    if(isError) {
      document.querySelector('.flaticker-custom-core').classList.add('error');
    } else {
      document.querySelector('.flaticker-custom-core').classList.remove('error');
    }
  }, [isError]);

  return(
    <div className="flaticker-custom-wrapper">
      <label
        className="flaticker-custom-label"
        ref={labelElement}
        onClick={handleLabelClick}
      >
        Дата и время
      </label>
      <Flatpickr
        className="flaticker-custom-core"
        ref={flInstance}
        options={{
          minDate: timeRightNow,
        }}
        data-enable-time
        value={currentDate ?? ''}
        onChange={handleChange}
      />
      {isError ? <p className="flaticker-custom-warring">*Пожалуйста заполните поле</p> : <></>}
    </div>
  );
};

export default CustomData;
