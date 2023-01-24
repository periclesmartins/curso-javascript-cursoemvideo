/* O laço "for-of" é uma forma de percorrer objetos iteráveis, como arrays e strings. Ele funciona pegando cada item deste objeto iterável e guardando em uma variável, que é definida no começo da estrutura. Depois, é executado um conjunto de instruções para cada item guardado na variável.

Exemplo: */

let frutas = ["maçã", "banana", "laranja"];
for (let fruta of frutas) {
  console.log(fruta);
}

/*
Neste exemplo, o laço "for-of" está percorrendo o array de frutas e para cada fruta, ele está imprimindo o valor no console. Com isso, seria impresso "maçã", "banana" e "laranja" na tela.

É importante notar que o laço "for-of" é mais fácil de usar do que outras estruturas de repetição, como o "for" e "forEach" pois ele não precisa de contadores e condições adicionais. Ele é apenas para percorrer objetos iteráveis e é uma forma mais simples de se fazer isso.
*/