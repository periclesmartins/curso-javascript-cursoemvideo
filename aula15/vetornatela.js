let valores = [1,2,3,4,5,6,7,8,9]
valores.sort()
/*
console.log(valores)
for (let pos  =0; pos < valores.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}
*/
for(let pos in valores) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}
