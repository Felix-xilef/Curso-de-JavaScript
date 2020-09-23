let numerosSelect = []
function adicionar() {
    let txtnumero = document.getElementById("txtnum")
    let num = Number(txtnumero.value)
    if (txtnumero.value.length == 0 || num < 1 || num > 100 || numerosSelect.indexOf(num) != -1) {
        alert("Valor iválido ou já encontrado na lista!")
    } else {
        let res = document.getElementById("res")
        let tab = document.getElementById("selvalores")
        let item = document.createElement("option")
        numerosSelect.push(num)
        item.text = `Valor ${num} adicionado`
        item.value = `tab${numerosSelect.indexOf(num)}`
        tab.appendChild(item)
        res.innerHTML = ``
        txtnumero.value = ""
        txtnumero.focus()
    }
}
function finalizar() {
    if (numerosSelect.length == 0) {
        alert("Adicione valores antes de finalizar!")
    } else {
        let res = document.getElementById("res")
        let maiorValor = 0, menorValor = 101, soma = 0, media
        for (let i in numerosSelect) {
            //length
            if (numerosSelect[i] > maiorValor) {
                maiorValor = numerosSelect[i]
            }
            if (numerosSelect[i] < menorValor) {
                menorValor = numerosSelect[i]
            }
            soma += numerosSelect[i]
        }
        media = soma/(numerosSelect.length)
        res.innerHTML = `<p>Quantidade de números cadastrados: ${numerosSelect.length}</P>
            <p>Maior valor informado: ${maiorValor}</P>
            <p>Menor valor informado: ${menorValor}</P>
            <p>Soma de todos os valores: ${soma}</P>
            <p>Média dos valores digitados: ${media}</P>`
    }
}