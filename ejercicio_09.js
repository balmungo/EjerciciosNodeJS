/*
Descripción simplificada:

Tienes que crear una función que ordene una lista de caracteres y números 
de un solo dígito de la siguiente manera:

    Letras: Deben ordenarse de la manera habitual, es decir:

        Las letras mayúsculas van antes que las minúsculas.

        Dentro de las mayúsculas o minúsculas, 
        se ordenan alfabéticamente (por ejemplo, 'A' antes de 'B', 'Z' antes de 'a').

    Números: Deben ir después de todas las letras, 
    y deben ordenarse de menor a mayor. 
    Además, si hay números como cadenas (por ejemplo, "1") y 
    números como valores numéricos (por ejemplo, 1), 
    los números como valores numéricos deben ir antes que los números como cadenas.

Ejemplos:

    ["a", "z", "b"] → ["a", "b", "z"] (orden alfabético normal)

    ["a", "Z", "B"] → ["B", "Z", "a"] (las mayúsculas van antes que las minúsculas)

    ["1", "z", "a"] → ["a", "z", "1"] (los números van después de las letras)

    [3, "2", 1, "a", "c", "b"] → ["a", "b", "c", 1, "2", 3] (los números van después de las letras, y los números como valores van antes que los números como cadenas)

    [3, "2", 1, "1", "3", 2] → [1, "1", 2, "2", 3, "3"] (los números como valores van antes que los números como cadenas)

Nota:

    Puedes asumir que la entrada siempre será una lista de caracteres o números de un solo dígito.

Resumen:

Tu función debe ordenar las letras primero (mayúsculas antes que minúsculas, 
y en orden alfabético) y luego los números (valores numéricos antes que cadenas numéricas, 
y en orden ascendente).

*/
function ordenateList(arr = []) {
  //separa caracteres de numeros
  let res = [];
  let cadena = [];
  let numero = [];
  let auxNum = [];
  let auxCad = [];
  let union = [];
  for (let i = 0; i < arr.length; i++) {
    const letter = arr[i];
    typeof letter === "string"
      ? cadena.push(letter.charCodeAt(0)) //convierte a ASCII
      : numero.push(letter);
  }
  //ordenamiento ascendente de numeros

  function reordena(vector = []) {
    let arr = vector;
    let end = arr.length;
    for (let i = 1; i <= end; i++) {
      if (i === end) {
        i = 1;
        end--;
      }
      if (arr[i - 1] > arr[i]) {
        const mayor = arr[i - 1];
        const menor = arr[i];
        arr[i] = mayor;
        arr[i - 1] = menor;
      }
    }
    return arr;
  }
  numero = reordena(numero);
  cadena = reordena(cadena);
  //conversion de ASCII a string
  for (let i = 0; i < cadena.length; i++) {
    if (cadena[i] > 47 && cadena[i] < 57) {
      auxNum.push(String.fromCharCode(cadena[i]));
    } else {
      auxCad.push(String.fromCharCode(cadena[i]));
    }
  }
  union = [...numero, ...auxNum];
  union = reordena(union);
  res = [...auxCad, ...union];
  return res;
}

console.log(ordenateList(["a", "z", "b"]));

console.log(ordenateList(["a", "Z", "B"]));

console.log(ordenateList(["1", "z", "a"]));

console.log(ordenateList([3, "2", 1, "a", "c", "b"]));

console.log(ordenateList([3, "2", 1, "1", "3", 2]));
