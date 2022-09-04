var additionValueDisplay = document.getElementById("addition");
var onclicked = additionValueDisplay.addEventListener(
  "click",
  (btnAddition = () => {
    var inputValue = document.getElementById("value");
    var realInputValue = inputValue.value;
    if (realInputValue != 0) {
      document.getElementById("list").innerHTML += `
    <div id="bar-green">
      <h4>Valor adicionado</h4>
      <p>${realInputValue}</p>
    </div>
  `;
    }
  })
);
