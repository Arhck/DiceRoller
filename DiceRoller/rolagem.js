class Rolagem {
  constructor(nRolagens, lados, mod, id) {
    this.nRolagens = nRolagens;
    this.lados = lados;
    this.mod = mod;
    this.id = id
  }
  rolar() {
    let quantidade = this.nRolagens.value
    let lados = this.lados.value
    let mod = Number(this.mod.value)
    let min = 1;
    let rolagensIndividuais = [];
    let total = 0;

    for (let c = 1; quantidade >= c; c++) {
      var dice = Math.round(Math.random() * (lados - min) + min);
      total += dice;
      rolagensIndividuais.push(dice);
    }
    var resultado = [rolagensIndividuais, total, total + mod];
    return resultado;    
  }
}
export default Rolagem;
