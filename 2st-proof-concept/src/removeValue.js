const removeValue = () => {
  localStorage.clear();
  if (getRegisterValue() == null) {
    localStorage.setItem('value', JSON.stringify(0));
  }
  showValue();
};
