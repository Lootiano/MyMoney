var moneyValue = JSON.parse(localStorage.getItem('value'));
if (moneyValue == null) {
  localStorage.setItem('value', JSON.stringify(0));
}
getAddValue = () => {
  let divGetValue = document.getElementById('value').value;
  return divGetValue == ''
    ? alert('Valor não especificado')
    : registerAddValue(divGetValue);
};

registerAddValue = (value) => {
  let getValue = JSON.parse(localStorage.getItem('value'));
  if (value == getValue) {
    let con = confirm('Você tem certeza que quer registrar este número?');
    con
      ? localStorage.setItem('value', JSON.stringify(value))
      : console.log(value);
  }
  localStorage.setItem('value', JSON.stringify(value));
  moneyValue + value;
};
