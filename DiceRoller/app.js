import mainRoll from "./mainRoll.js";
import saving from "./saving.js";

//ROLAGEM PADRÃO
const btnRoll = document.getElementById("roller");
btnRoll.addEventListener("click", mainRoll);

//MOSTRANDO DIV QUE SALVA A ROLAGEM
let res = document.getElementById("resultado");
const btnSave = document.getElementById("save");
const alerta = document.getElementById("savingPrompt");
btnSave.addEventListener("click", function () {
  res.style.display = "none";
  alerta.style.display = "";
});

//EFETUANDO O SAVE
const btnSave2 = document.getElementById("submitSave");
btnSave2.addEventListener("click", saving);
