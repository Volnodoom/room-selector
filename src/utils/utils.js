export const isEnter = (key) => key === 'Enter';
export const isEscape = (key) => key === 'Escape';
export const isArrowUp = (key) => key === 'ArrowUp';
export const isArrowDown = (key) => key === 'ArrowDown';
export const isTab = (key) => key === 'Tab';

export const formateDateTime = (dateString) => {
  const timeZone = new Date().getTimezoneOffset();
  const numberPattern = /([\d]{4})-([\d]{2})-([\d]{2}) ([\d]{2}):([\d]{2})/;

  const result = dateString.replace(numberPattern, `$1 $2 $3 $4:$5:00 ${timeZone}`);
  return result;
}
