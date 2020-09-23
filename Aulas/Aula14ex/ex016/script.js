function contar() {
    let inicio = window.document.getElementById("txtinicio")
    let fim = window.document.getElementById("txtfim")
    let res = window.document.getElementById("res")
    let passo = window.document.getElementById("txtpasso")
    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = "Impossível Contar!"
    } else {
        let inc = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <= 0) {
            alert("Passo Inválido! Considerando Passo 1")
            p = 1
        }
        res.innerHTML = "Contando: <br>"
        if (inc < f) {
            for (let i = inc; i <= f; i += p) {
                res.innerHTML += `${i} \u{27A1} `
            }
        } else {
            for (let i = inc; i >= f; i -= p) {
                res.innerHTML += `${i} \u{27A1} `
            }
        }
        
        res.innerHTML += `\u{1F6A9}</p>`
    }
}