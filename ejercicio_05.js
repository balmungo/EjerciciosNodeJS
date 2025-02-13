/**
Descripción:
Tarea

Dada una lista de enteros positivos, 
determine el número mínimo que debe insertarse para que la suma de todos 
los elementos se convierta en el número primo más cercano .
Notas

    La lista siempre tendrá al menos 2 elementos .
    Todos los elementos serán enteros positivos ( n > 0).
    La lista puede contener valores duplicados .
    La nueva suma debe ser el número primo más cercano .

Ejemplos

minimumNumber({3, 1, 2})  // ➞ 1

Explicación:

    La suma de [3, 1, 2] es 6.
    El número primo más cercano es 7.
    Necesitamos insertar 1 para alcanzar 7.

minimumNumber({2, 12, 8, 4, 6})  // ➞ 5

Explicación:

    La suma de [2, 12, 8, 4, 6] es 32.
    El número primo más cercano es 37.
    Necesitamos insertar 5 para alcanzar 37.

minimumNumber({50, 39, 49, 6, 17, 28})  // ➞ 2

Explicación:

    La suma de [50, 39, 49, 6, 17, 28] es 189.
    El número primo más cercano es 191.
    Necesitamos insertar 2 para alcanzar 191.

 */
function minimunNumber(arr = [1,1]){
  let res = 0;
  let suma = 0;
  for (const val of arr) {
    suma += val;
  }
  while (true) {
    if(suma%2 === 0 || suma%3 === 0 || suma%5 === 0){
      res++;
      suma++;
    }else{
      break;
    }
  }
  return res;
}
list = [50, 39, 49, 6, 17, 28];
console.log(minimunNumber(list));