/*
HABLAS INGLES?

Descripción:

Dada una cadena de longitud arbitraria con cualquier caracteres ASCII. 
Escriba una función para determinar si la cadena contiene toda la palabra "inglés".
El orden de los caracteres es importante: 
una cadena "abcenglishdef" es correcta pero "abcneglishsef" no es correcta.
La letra superior o minúscula no importa:
"inglés" también es correcto.
Valor de retorno como valores booleanos, verdadero para que la cadena contenga "inglés",
falso porque no lo hace.

*/

function doYouSpeak(chain){
  const list=["ingles","english"]
  let i = 0;
  let j = 0;
  let k = 0;
  while(k<list.length){
    while(i<chain.length){
      list[k][j] === chain[i] ? j++ : j=0;
      if(j === list[k].length) return true;
      i++;
    }
    k++;
    i = 0;
  }
  return false;
}

console.log(doYouSpeak("ashoenglishlaas"));