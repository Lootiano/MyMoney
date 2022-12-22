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

showValue();
