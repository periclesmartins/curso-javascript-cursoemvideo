function soma(n1=0, n2=0) { //(n1=0, n2=0) sem o zero, se fosse colocado apenas um número, o resultado seria NaN, colocando o zero, o número será somado com zero, e seu valor será retornado, no caso 7+0=7.
    return n1 + n2
}
console.log(soma(7))