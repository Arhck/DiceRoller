const xD = document.getElementById("xD");
const dX = document.getElementById("dX");
const modif = document.getElementById("mod");

const mainRoll = () => {
  let quantidade = xD.value;
  let lados = dX.value;
  let mod = Number(modif.value);
  if (quantidade.length == 0 || quantidade == 0) {
    alert("Você quer rolar zero dados? O resultado é zero.");
  } else if (quantidade < 0) {
    alert(
      "Você quer rolar uma quantidade negativa de dados? Imagino se isso é mesmo possível..."
    );
  } else {
    let min = 1;
    let rolagensIndividuais = [];
    let total = 0;

    for (let c = 1; quantidade >= c; c++) {
      let dice = Math.round(Math.random() * (lados - min) + min);
      total += dice;
      rolagensIndividuais.push(dice);
    }
    let resultado = [rolagensIndividuais, total, total + mod];
    let res = document.getElementById("resultado");
    let resTexto = document.getElementById("resTexto");
    res.style.display = "";
    resTexto.innerHTML = `Resultado dos dados: ${resultado[0]}<br>Soma dos dados: ${resultado[1]}<br>Resultado final: ${resultado[2]}`;
  }
};
export default mainRoll;
