const getValue = () => {
  return document.getElementById('value').value;
};

const getRegisterValue = () => {
  return JSON.parse(localStorage.getItem('value'));
};

if (getRegisterValue() == null) {
  localStorage.setItem('value', JSON.stringify(0));
}

const getAddValue = () => {
  getValue() == ''
    ? alert('Valor não especificado')
    : registerAddValue(getValue());
};

const getSubValue = () => {
  getValue() == ''
    ? alert('Valor não especificado')
    : registerSubValue(getValue());
};

const registerAddValue = (value) => {
  let addValue = JSON.parse(getRegisterValue()) + JSON.parse(value);
  localStorage.setItem('value', JSON.stringify(addValue));
  showValue();
};

const registerSubValue = (value) => {
  let subValue = JSON.parse(getRegisterValue()) - JSON.parse(value);
  localStorage.setItem('value', JSON.stringify(subValue));
  showValue();
};

const removeValue = () => {
  localStorage.clear();
  if (getRegisterValue() == null) {
    localStorage.setItem('value', JSON.stringify(0));
  }
  showValue();
};

const manipulatedValue = () => {
  let data = getRegisterValue();
  let show = data.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });
  return show;
};

const showValue = () => {
  let show = document.getElementById('money');
  show.innerText = manipulatedValue();
};

showValue();
