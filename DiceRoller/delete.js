const deletar = (event) => {
    //RECUPERANDO NOME DA ROLAGEM:
    let nome = event.target.id.slice(0, -8)

    //APLICANDO NOME PARA CAPTURAR OS ELEMENTOS HTML
    let container = document.getElementById(`${nome}-container`)
    let texto = document.getElementById(nome)
    let label = document.getElementById(`${nome}-label`)
    let btnRoll = document.getElementById(`${nome}-roller`)
    let btnDelete = document.getElementById(event.target.id)

    texto.remove()
    container.remove()
    label.remove()
    btnDelete.remove()
    btnRoll.remove()

};
export default deletar;
