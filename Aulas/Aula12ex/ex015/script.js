function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById("txtano")
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert("[ERRO] Verifique os dados e tente novamente!")
    } else {
        var fsex = document.getElementsByName("radsex")
        if (fsex[0].checked) {
            addFoto("Homem", ano, fano)
        } else if (fsex[1].checked) {
            addFoto("Mulher", ano, fano)
        }
        
    }
}
function addFoto(sexo, ano, fano) {
    var res = document.querySelector("div#res")
    var idade = ano - Number(fano.value)
    var img = document.createElement("img")
    var faixaEtária
    img.setAttribute("id", "foto")
    if (idade >= 0 && idade < 10) {
        //Criança
        faixaEtária = "bebe"
    } else if (idade < 21) {
        //Jovem
        faixaEtária = "jovem"
    } else if (idade < 60) {
        //Adulto
        faixaEtária = "adulto"
    } else {
        //Idoso
        faixaEtária = "idoso"
    }
    img.setAttribute("src", `foto${faixaEtária}${sexo}.png`)
    res.style.textAlign = "center"
    res.innerHTML = `Detectamos ${sexo} com ${idade} anos.`
    res.appendChild(img)
}