class Rolagem {
  constructor(nRolagens, lados, mod, id, roll) {
    this.nRolagens = nRolagens;
    this.lados = lados;
    this.mod = mod;
    this.id = id;
    this.rollBtn = roll;
    this.rollBtn.addEventListener("click", this.rolar.bind(this))
  }
  rolar() {
    let quantidade = this.nRolagens
    let lados = this.lados
    let mod = Number(this.mod)
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
}
export default Rolagem;