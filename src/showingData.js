const dataDiv = document.getElementById('money');

dataDiv.addEventListener(() => {
  
});

const getRegisterData = () => {
  JSON.parse(localStorage.getItem('value'));
};

const refactorData = () => {
  const data = getRegisterData();
};
