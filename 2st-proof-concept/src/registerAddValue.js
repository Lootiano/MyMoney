const registerAddValue = (value) => {
  let addValue = JSON.parse(getRegisterValue()) + JSON.parse(value);
  localStorage.setItem('value', JSON.stringify(addValue));
  showValue();
};