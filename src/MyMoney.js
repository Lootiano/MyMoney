var inputValueTrash = document.getElementById("value");
var btnAddition = document.getElementById("addition");
var btnSubtraction = document.getElementById("subtraction");

btnAddition.addEventListener(
  "click",
  (btnAddition = () => {
    if (inputValueTrash.value == 0) {
      valueIsNaN();
    } else {
      var partitionDiv = document.getElementById("input-list");
      partitionDiv.innerHTML += `
      <div id="partition">
        <div id="partition-green">
          <h3>Valor adicionado</h3>
          <p>Valor: ${inputValueTrash.value}</p>
        </div>
      </div>
    `;
    }
  })
);

btnSubtraction.addEventListener(
  "click",
  (btnSubtraction = () => {
    if (inputValueTrash.value == 0) {
      valueIsNaN();
    } else {
      var partitionDiv = document.getElementById("input-list");
      partitionDiv.innerHTML += `
        <div id="partition">
          <div id="partition-red">
            <h4>Valor retirado</h4>
            <p>Valor: ${inputValueTrash.value}</p>
          </div>
        </div>
      `;
    }
  })
);

function valueIsNaN() {
  var divNoValue = document.getElementById("input-list");
  divNoValue.innerHTML = `
    <div id="partition-clear" class="partition-clear">
      <div id="partition-value">
        <h4>Valor não digitado</h4>
      </div>
    </div>
  `;
  setTimeout(() => {
    const deletDiv = document.getElementById("partition-clear");
    deletDiv.style.display = "none";
  }, 1700);
}
