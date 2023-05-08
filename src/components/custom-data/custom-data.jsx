import "flatpickr/dist/themes/material_green.css";
import "./custom-data.css";
import { useLayoutEffect, useRef, useState } from "react";
import Flatpickr from "react-flatpickr";
import { FormErrorSubmitting } from "../../utils/constants";

const CustomData = ({inputError}) => {
  const isError = inputError === FormErrorSubmitting.Date
  const labelElement = useRef(null);
  const [currentDate, setCurrentDate] = useState(null);
  const timeRightNow = new Date();

  const handChange = ([date]) => setCurrentDate(date );

  useLayoutEffect(() => {
    if(currentDate) {
      labelElement.current.classList.add('final-position');
    }
  }, [currentDate]);

  useLayoutEffect(() => {
    if(isError) {
      document.querySelector('.flaticker-custom-core').classList.add('error');
    }
  }, [isError]);

  return(
    <div className="flaticker-custom-wrapper">
      <label className="flaticker-custom-label" ref={labelElement}>Дата и время</label>
      <Flatpickr
        className="flaticker-custom-core"
        options={{
          minDate: timeRightNow,
          minTime: timeRightNow,
        }}
        data-enable-time
        value={currentDate ?? ''}
        minDate
        onChange={handChange}
      />
      {isError ? <p className="flaticker-custom-warring">*Пожалуйста заполните поле</p> : <></>}
    </div>
  );
};

export default CustomData;
