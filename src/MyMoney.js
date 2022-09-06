var additionValueDisplay = document.getElementById("addition");
var onclickAddition = additionValueDisplay.addEventListener(
  "click",
  (btnAddition = () => {
    var inputValue = document.getElementById("value");
    if (inputValue.value != 0) {
      document.getElementById("input-list").innerHTML += `
        <div id="partition">
          <div id="partition-green">
            <h4>Valor adicionado</h4>
            <p>${inputValue.value}</p>
          </div>
        </div>
      `;
    }
  })
);

var subtractionValueDisplay = document.getElementById("subtraction");
var onclickSubtraction = subtractionValueDisplay.addEventListener(
  "click",
  (btnSubtraction = () => {
    var inputValue = document.getElementById("value");
    if (inputValue.value != 0) {
      document.getElementById("input-list").innerHTML += `
        <div id="partition">
          <div id="partition-red">
            <h4>Valor retirado</h4>
            <p>${inputValue.value}</p>
          </div>
        </div>
      `;
    }
  })
);
