/*
Descripción:

Estás en la cima de una increíble montaña del Himalaya. ¡La vista es absolutamente impresionante! Quieres tomar una foto con tu teléfono, pero... ¡tu memoria está llena otra vez! Bueno, es hora de organizar tus fotos desordenadas y liberar algo de espacio...

Dada una galería de fotos, escribe una función para organizar tus imágenes. Recibes un disco duro lleno de fotos en orden aleatorio, y debes devolver un arreglo con las 5 fotos más recientes MÁS la siguiente foto que siga en secuencia (del mismo año y con el número siguiente al de la última foto).

Siempre recibirás al menos una foto, y todas las fotos estarán en el formato YYYY.imgN, donde:

    YYYY es el año.

    N es el número de la imagen.

Ejemplos:

    Si recibes:
    ["2016.img1", "2016.img2", "2015.img3", "2016.img4", "2013.img5"]
    Debes devolver:
    ["2013.img5", "2015.img3", "2016.img1", "2016.img2", "2016.img4", "2016.img5"]
    Explicación:

        Las 5 fotos más recientes son: 2013.img5, 2015.img3, 2016.img1, 2016.img2, 2016.img4.

        La siguiente foto en secuencia sería 2016.img5 (porque sigue a 2016.img4).

    Si recibes:
    ["2016.img1"]
    Debes devolver:
    ["2016.img1", "2016.img2"]
    Explicación:

        Solo hay una foto, pero debes incluir la siguiente en secuencia, que sería 2016.img2.

Notas:

    Las fotos están desordenadas, así que primero debes ordenarlas por año y número.

    Siempre debes devolver las 5 fotos más recientes más la siguiente en secuencia.

    Si no hay suficientes fotos para completar las 5, devuelve las que haya más la siguiente en secuencia.
*/

let memory = ["2016.img1", "2016.img2", "2015.img3", "2016.img4", "2013.img5"];
function organice(list){
  let aux = [];
  let res = [];
  for (const val of list) {
    aux.push(parseInt(val.substring(0,4)+val.substring(8)));
  }
  aux.sort();
  aux.push((aux[aux.length-1])+1);
  for (const value of aux) {
    res.push(value.toString().substring(0,4)+".img"+value.toString().substring(4));
  }
  return res;
}

console.log(organice(memory));