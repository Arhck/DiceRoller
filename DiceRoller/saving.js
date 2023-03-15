import Rolagem from "./rolagem.js";
import deletar from "./delete.js";

//DECLARANDO ELEMENTOS HTML
const alerta = document.getElementById("savingPrompt");
const xD = document.getElementById("xD");
const dX = document.getElementById("dX");
const modif = document.getElementById("mod");
const savedRolls = document.getElementById("saved-rolls");
const saveName = document.getElementById("save-name");

//FUNÇÃO DE SAVE
const saving = () => {
  //CRIANDO ELEMENTOS NOVOS
  let nome = saveName.value.toUpperCase();
  let dadosSalvos = document.createElement("div");
  let label = document.createElement("label");
  let textoSalvo = document.createElement("p");
  let btnRollSaved = document.createElement("button");
  let btnDelete = document.createElement("button");
  let elementos = [dadosSalvos, label, textoSalvo, btnRollSaved, btnDelete]

  //VALIDAÇÃO DE DADOS
  if (nome.length == 0) {
    alert("Você precisa batizar a rolagem para salvar!");
  } else {
    //INSTANCIANDO ROLAGEM
    new Rolagem(xD.value, dX.value, modif.value, nome, btnRollSaved, elementos, btnDelete)

    //CONFIGURANDO BOTÕES
    btnRollSaved.setAttribute("id", `${nome}-roller`);
    btnRollSaved.innerHTML = "Rolar"

    btnDelete.setAttribute("id", `${nome}-deleter`);
    btnDelete.innerHTML = "Deletar"

    //CONFIGURANDO DEMAIS ELEMENTOS
    dadosSalvos.setAttribute("id", `${nome}-container`);
    dadosSalvos.classList.add("container");
    label.setAttribute("id", `${nome}-label`);
    label.setAttribute("for", nome);
    textoSalvo.setAttribute("id", nome);

    //ATRIBUINDO VALORES AOS ELEMENTOS
    label.innerHTML = nome;
    textoSalvo.innerHTML = `${xD.value} d ${dX.value} + ${modif.value}`;

    //ORGANIZANDO ÁRVORE DE ELEMENTOS
    dadosSalvos.appendChild(label);
    dadosSalvos.appendChild(textoSalvo);
    dadosSalvos.appendChild(btnRollSaved);
    dadosSalvos.appendChild(btnDelete);
    savedRolls.appendChild(dadosSalvos);

    //CRIANDO OPÇÃO DE DELETAR
    btnDelete.addEventListener("click", deletar)

    //LIMPANDO ALERTA E RESETANDO ESTILO
    saveName.value = "";
    alerta.style.display = "none";
  }
};
export default saving;
