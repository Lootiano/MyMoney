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