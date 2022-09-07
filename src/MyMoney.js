var inputValueTrash = document.getElementById("value");
var btnAddition = document.getElementById("addition");
var btnSubtraction = document.getElementById("subtraction");

function inputVerification() {
  var time = 0;
  if (inputValueTrash.value < time) {
    btnAddition.addEventListener("click", additionValue());
  } else if (inputValueTrash.value > time) {
    btnAddition.addEventListener("click", subtractionValue());
  } else {
    btnAddition.addEventListener("click", noValue());
  }
  console.log(inputValueTrash.value);
}

function additionValue() {
  var listValue = document.getElementById("input-list");
  listValue.innerHTML += `
    <div id="partition">
      <div id="partition-green">
        <h4>Valor adicionado</h4>
        <p>${inputValueTrash.value}</p>
      </div> 
    </div>
  `;
}

function subtractionValue() {
  var listValue = document.getElementById("input-list");
  listValue.innerHTML += `
    <div id="partition">
      <div id="partition-red">
        <h4>Valor retirado</h4>
        <p>${inputValueTrash.value}</p>
      </div> 
    </div>
  `;
}

function noValue() {
  var noValueDiv = document.getElementById("input-list");
  noValueDiv.innerHTML += `
    <div id="partition-clear">
      <div id="partition-value">
        <h3>Nenhum valor especificado</h3>
      </div> 
    </div>
  `;
  for (noValue = 0; noValue < 0; ++i) {
    setTimeout(() => {
      var deleteDiv = document.getElementById("partition-clear");
      deleteDiv.style.display = "none";
    }, 1500);
  }
}
