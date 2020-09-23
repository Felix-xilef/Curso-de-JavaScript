var agora = new Date()
var diaSemana = agora.getDay()
var dS
/*
    0 = Domingo
    1 = Segunda
    2 = Terça
    3 = Quarta
    4 = Quinta
    5 = Sexta
    6 = Sábado
*/
//console.log(diaSemana)
switch (diaSemana){
    case 0:
        dS = "Domingo"
        break
    case 1:
        dS = "Segunda"
        break
    case 2:
        dS = "Terça"
        break
    case 3:
        dS = "Quarta"
        break
    case 4:
        dS = "Quinta"
        break
    case 5:
        dS = "Sexta"
        break
    case 6:
        dS = "Sábado"
        break
    default:
        dS = "[ERRO] Dia Inválido"
        //break - opcional
}
console.log(dS)