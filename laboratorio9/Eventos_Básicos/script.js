const button = document.getElementById("btn-multi");

function actionOne() {
  console.log("Acción 1 ejecutada");
}

function actionTwo() {
  console.log("Acción 2 ejecutada");
}

function actionThree() {
  console.log("Acción 3 ejecutada");
}

button.addEventListener("click", actionOne);
button.addEventListener("click", actionTwo);
button.addEventListener("click", actionThree);
