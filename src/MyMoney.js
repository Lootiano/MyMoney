getRegisterValue = () => {
  return JSON.parse(localStorage.getItem('value'));
};

if (getRegisterValue() == null) {
  localStorage.setItem('value', JSON.stringify(0));
}

getValue = () => {
  return document.getElementById('value').value;
};

getAddValue = () => {
  getValue() == ''
    ? alert('Valor não especificado')
    : registerAddValue(getValue());
};

getSubValue = () => {
  getValue() == ''
    ? alert('Valor não especificado')
    : registerSubValue(getValue());
};

registerAddValue = (value) => {
  let addValue = JSON.parse(getRegisterValue()) + JSON.parse(value);
  localStorage.setItem('value', JSON.stringify(addValue));
};

registerSubValue = (value) => {
  let subValue = JSON.parse(getRegisterValue()) - JSON.parse(value);
  localStorage.setItem('value', JSON.stringify(subValue));
};
