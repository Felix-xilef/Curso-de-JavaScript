function gerar() {
    let num = window.document.getElementById("txtnumero")
    if (num.value.length == 0) {
        alert("[ERRO] Um ou mais campos não preenchidos!")
    } else {
        let tab = window.document.getElementById("seltab")
        let n = Number(num.value)
        tab.innerHTML = ""
        for (let i = 0; i <= 10; i++) {
            let item = document.createElement("option")
            item.text = `${n} x ${i} = ${n*i}`
            item.value = `tab${i}`
            tab.appendChild(item)
        }
    }
}