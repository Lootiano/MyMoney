var additionValueDisplay = document.getElementById("addition");
var onclicked = additionValueDisplay.addEventListener(
  "click",
  (btnAddition = () => {
    var inputValue = document.getElementById("value");
    if (inputValue.value != 0) {
      document.getElementById("list").innerHTML += `
    <div id="bar-green">
      <h4>Valor adicionado</h4>
      <p>${inputValue.value}</p>
    </div>
  `;
    }
  })
);
