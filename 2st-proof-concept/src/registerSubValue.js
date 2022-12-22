const registerSubValue = (value) => {
  let subValue = JSON.parse(getRegisterValue()) - JSON.parse(value);
  localStorage.setItem('value', JSON.stringify(subValue));
  showValue();
};