import Rolagem from "./rolagem.js";

//INSTANCIANDO O OBJETO QUE RECEBERÁ OS VALORES DA ROLAGEM:
let xD = document.getElementById("xD");
let dX = document.getElementById("dX");
let modif = document.getElementById("mod");

const rolagemAtual = new Rolagem(xD, dX, modif, "default");

//FUNÇÃO DA JANELA DE RESULTADOS
const btnRoll = document.getElementById("roller");
var res = document.getElementById("resultado");
var resTexto = document.getElementById("resTexto");
const popup = () => {
  let resultado = rolagemAtual.rolar();
  res.style.display = "";
  resTexto.innerHTML = `Resultado dos dados: ${resultado[0]}<br>Soma dos dados: ${resultado[1]}<br>Resultado final: ${resultado[2]}`;
};
btnRoll.addEventListener("click", popup);

//MOSTRANDO DIV QUE SALVA A ROLAGEM
const btnSave = document.getElementById("save");
const alerta = document.getElementById("savingPrompt");
btnSave.addEventListener("click", function () {
  alerta.style.display = "";
});

//EFETUANDO O SAVE
const  saving = () => {
  let nome = document.getElementById("save-name").value;
  const rolagemSalva = new Rolagem(xD, dX, modif, nome)
  let savedRolls = document.getElementById("saved-rolls")
  let dadosSalvos = document.createElement("div") 
  let label = document.createElement("label")
  let textoSalvo = document.createElement("p")
  let btnRollSaved = document.createElement("input")
  let btnDelete = document.createElement("input")

  btnRollSaved.setAttribute("id", nome + "-roller")
  btnRollSaved.setAttribute("type", "button")
  btnRollSaved.setAttribute("value", "Rolar")
  btnDelete.setAttribute("id", nome + "-deleter")
  btnDelete.setAttribute("type", "button")
  btnDelete.setAttribute("value", "Deletar")
  dadosSalvos.setAttribute("id", nome + "-container")
  dadosSalvos.classList.add("container")
  label.setAttribute("id", nome + "-label")
  label.setAttribute("for", nome)
  textoSalvo.setAttribute("id", nome)

  label.innerHTML = nome
  textoSalvo.innerHTML = `${rolagemSalva.nRolagens.value} d ${rolagemSalva.lados.value} + ${rolagemSalva.mod.value}`

  dadosSalvos.appendChild(label)
  dadosSalvos.appendChild(textoSalvo)
  dadosSalvos.appendChild(btnRollSaved)
  dadosSalvos.appendChild(btnDelete)
  savedRolls.appendChild(dadosSalvos)


  alerta.style.display = "none"
  
};
const btnSave2 = document.getElementById("submitSave");
btnSave2.addEventListener("click", saving)



