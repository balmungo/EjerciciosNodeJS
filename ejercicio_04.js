/*
Estás en un restaurante con tus amigos y es hora de irse, 
pero todavía hay un gran problema... la factura. 
¿Quién pagará qué? Por suerte para ti, 
¡tienes tu computadora a mano! Una función simple y la factura se paga, 
¡y de manera justa!

La función debe tomar un parámetro: 
un objeto/diccionario con dos o más pares clave-valor que representan 
a los miembros del grupo y la cantidad gastada por cada uno.

Tu función debe devolver un objeto/diccionario con los mismos nombres, 
mostrando cuánto dinero deben pagar o recibir los miembros.

Puntos adicionales:

    Los valores deben ser números positivos si la persona 
    debe recibir dinero del grupo, y números negativos si 
    debe pagar dinero al grupo.

    Si el valor es un decimal, redondéalo a dos decimales.
*/

function splitTheBill(obj={}){
  let count = 0;
  let suma = 0;
  for (const key in obj) {
    suma +=obj[key];
    count++;
  }
  const MEDIA = suma/count;
  let result = {};
  for (const key in obj) {
    const val = obj[key]-MEDIA;
    result[key] = Math.round(val*100)/100;
  }
  return result;
}
const group = {
  A:20,
  B:15,
  C:10
}
console.log(splitTheBill(group));