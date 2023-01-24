/*
O "forEach" é uma função que permite percorrer um array e executar uma função para cada elemento desse array. Ele é muito similar ao "for-of", mas ele utiliza uma função anônima e não precisa de uma variável para guardar os itens do array.

Exemplo: */
let frutas = ["maçã", "banana", "laranja"];
frutas.forEach(function(fruta) {
  console.log(fruta);
});
/*
Neste exemplo, o "forEach" está percorrendo o array de frutas e para cada fruta, ele está executando a função anônima que imprime o valor no console. Com isso, seria impresso "maçã", "banana" e "laranja" na tela.

A principal diferença do forEach é que ele não tem como interromper a execução, diferentemente do for, for-in, for-of. Ele só é útil para percorrer um array e fazer alguma ação para cada elemento.
*/