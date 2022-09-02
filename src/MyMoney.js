var additionValueDisplay = document.getElementById("addition");
var onclicked = additionValueDisplay.addEventListener("click", btnAddition);

function btnAddition() {
  var inputValue = document.getElementById("value");
  var clearValue = inputValue.value;
  document.getElementById("list").innerHTML += `
    <div id="bar">
      <h4>Valor adicionado</h4>
      <p>${clearValue}</p>
    </div>
  `;
}
