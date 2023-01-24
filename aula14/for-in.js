/*
O "for-in" é uma estrutura de repetição usada para percorrer as propriedades de um objeto. Ele funciona pegando o nome de cada propriedade do objeto e guardando em uma variável, que é definida no começo da estrutura. Depois, é executado um conjunto de instruções para cada propriedade guardada na variável.

Exemplo:
*/
let carro = {
    marca: "Honda",
    modelo: "Civic",
    ano: 2020
  };
  for (let propriedade in carro) {
    console.log(propriedade + ": " + carro[propriedade]);
  }
/*
Neste exemplo, o "for-in" está percorrendo as propriedades do objeto carro, e para cada propriedade, ele está imprimindo o nome da propriedade e o valor da propriedade no console. Com isso, seria impresso "marca: Honda", "modelo: Civic" e "ano: 2020" na tela.

A diferença do for-in com outras estruturas de repetição é que ele só é útil para percorrer propriedades de objetos, e não elementos de array. Ele também não garante ordem na iteração.
*/