/* 
Descripción:

┌──────┬──────┬──────┬──────┬──────┐
│░░░░░░│░░░░░░│░░░░░░│▒▒▒▒▒▒│▒▒▒▒▒▒│
│░     │      │     ░│▒     │     ▒│
├──────┼──────┼──────┼─── 4=2^2 ───┤
│░     │9=3^2 │     ░│▒     │     ▒│
│░     │      │     ░│▒▒▒▒▒▒│▒▒▒▒▒▒│
├──────┼──────┼──────┼──────┼──────┤
│░     │      │     ░│  1   │  1   │
│░░░░░░│░░░░░░│░░░░░░│      │      │
└──────┴──────┴──────┴──────┴──────┘

El dibujo proporcionado muestra cómo cortar un rectángulo "verdadero" 
(es decir, un rectángulo donde las dos dimensiones son diferentes) 
en cuadrados. 
Tu tarea es convertir este dibujo en un algoritmo.

Entrada:

    Un número entero positivo que representa la longitud del rectángulo.

    Un número entero positivo que representa el ancho del rectángulo.

Salida:

Debes devolver una colección o una cadena 
(dependiendo del lenguaje de programación) 
con el tamaño de cada uno de los cuadrados resultantes.

Ejemplos:

    sqInRect(5, 3) debería devolver [3, 2, 1, 1]

    sqInRect(3, 5) debería devolver [3, 2, 1, 1]

Notas:

    Si la longitud y el ancho son iguales, es decir, 
    si el rectángulo es en realidad un cuadrado, 
    el problema es diferente. 
    En ese caso, debes devolver None, nil, null, o una estructura vacía, 
    dependiendo del lenguaje. 
    Por ejemplo, en Python devolverías None, 
    en C++ devolverías {}, y en Bash devolverías "nil".

    Si el rectángulo es un cuadrado, 
    la solución obvia sería devolver un solo cuadrado del tamaño del lado,
    pero eso no está en el espíritu de este ejercicio. 
    Por lo tanto, en ese caso, 
    debes devolver un valor que indique que no hay solución 
    válida bajo las reglas de este problema.
*/
function cuadInRect(heigth = 0, widith = 0) {
  let res = [];
  let alto = heigth;
  let largo = widith;
  if (heigth === widith) return res;
  while (true) {
    if (alto === largo) {
      res.push(alto);
      break;
    }
    if (alto < largo) {
      res.push(alto);
      largo = largo - alto;
    } else {
      res.push(largo);
      alto = alto - largo;
    }
  }
  return res;
}

console.log(cuadInRect(3, 5));
console.log(cuadInRect(20, 14));
console.log(cuadInRect(9, 15));
console.log(cuadInRect(3, 3));
console.log(cuadInRect(1, 2));
