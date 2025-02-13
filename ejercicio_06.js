/*
Descripción:

Has encontrado una sala de reuniones. 
¡Uf! Llegas listo para presentar y descubres que alguien ha tomado una o más de las sillas. 
Necesitas encontrar sillas rápidamente... 
Revisa todas las otras salas de reuniones para ver si hay sillas disponibles.

Tu sala de reuniones tiene capacidad para 8 sillas. 
Te diré cuántas sillas han sido tomadas. 
Necesitas encontrar esa cantidad de sillas.

Encuentra sillas de repuesto en las otras salas de reuniones. 
Cada sala de reuniones está representada por una tupla que contiene:

    El número de ocupantes, representado por una cadena de texto donde cada ocupante es una 'X'.

    Un número entero que indica cuántas sillas hay en esa sala.

Debes devolver una lista de números enteros que muestre cuántas sillas tomas de cada sala, 
en orden, hasta que tengas la cantidad necesaria.

Ejemplo:

Si tienes la siguiente lista de salas:
[['XXX', 3], ['XXXXX', 6], ['XXXXXX', 9], ['XXX', 2]]
Y necesitas 4 sillas, el resultado sería:
[0, 1, 3]
Esto significa:

    No tomas ninguna silla de la sala 0 (porque no hay sillas libres).

    Tomas 1 silla de la sala 1.

    Tomas 3 sillas de la sala 2.

    No necesitas revisar la sala 3 porque ya tienes las 4 sillas que necesitabas.

Notas adicionales:

    Si no necesitas sillas, devuelve "Game On".

    Si no hay suficientes sillas disponibles en todas las salas, devuelve "Not enough!".
*/

let salas = [['XXX', 3], ['XXXXX', 6], ['XXXXXX', 9], ['XXX', 2]];
function searchChairs(rooms = [],need = 0){
  let res = [];
  let message = "";
  let countChairs = 0;
  if(need === 0 ) return message = "Game On";
  for (const tupla of rooms) {
    const people = tupla[0].length;
    const chairs = tupla[1];
    if(countChairs === need) return res;
    if(people<chairs){
      res.push(chairs-people);
      countChairs+=chairs-people;
    }
    if(people==chairs||people>chairs){
      res.push(0);
    }
  }
  return message = "Not enough!";
}

console.log(searchChairs(salas,4));