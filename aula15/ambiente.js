let num = [10,20,30]
// num[3] = 40 //o 10 ta na posição 0, 20 na 1º, 30 na 2º, e 40 será colocado na 3º posição.
//num.push(40)   //já esse, colocará o valor sempre na última posição.
//.length serve para contar quantos valores tem dentro do vetor.

num.push(40)
num.sort() //Esse comando interno mostra em ordem os valores do vetor.
console.log(`${num}`)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)
let pos = num.indexOf(30)
if (pos === -1) {
    console.log('O número pesquisado não existe nesse vetor!')
} else {
    console.log(`O valor 20 está na posição ${pos}`)
}
