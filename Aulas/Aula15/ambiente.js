let num = [5, 8, 2, 9, 3]

console.log(`Vetor: ${num}`)

console.log(`Posição do valor 9: ${num.indexOf(9)}`)

console.log(`Posição do valor 1: ${num.indexOf(1)}`)

console.log(`Posições: ${num.length}`)

for (let i = 0; i < num.length; i++) {   // Mesma     for (let i in num) {
    console.log(`Num[${i}]: ${num[i]}`)  // coisa :      console.log(`Num[${i}]: ${num[i]}`)
}                                        // que       }

num.push(1)

console.log(`Vetor com mais um elemento: ${num}`)

console.log(`Vetor ordenado: ${num.sort()}`)

for (let i in num) {                     // Mesma     for (let i = 0; i < num.length; i++) {
    console.log(`Num[${i}]: ${num[i]}`)  // coisa :      console.log(`Num[${i}]: ${num[i]}`)
}                                        // que       }
//para arrays e objetos em javaScript ( para i em num (vetor) )

/*
let num = []
let n, valor

    num[n] = valor     //Adiciona o valor "valor" para o elemento "n" do vetor 
                       "num", qualquer que seja "n" (se não existir "n" dentro de
                       "num" o javaScript cria automaticamente)

    num.push(valor)    //Cria um elemento no vetor "num", depois de seu ultimo 
                       elemento, e cdiciona o valor "valor" para este elemento

    num.length         //Tamanho do vetor "num"

    num.sort()         //Coloca os elementos do vetor "num" em ordem crescente

    num.indexOf(value) //Busca o a posição do elemento de valor "valor" no vetor
                       "num", caso não exista, a função retorna "-1"
*/