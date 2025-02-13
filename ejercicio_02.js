/*
¿Hablas RetSec?

Tú y tus amigos quieren jugar agentes encubiertos. 
Para intercambiar sus mensajes secretos , ha creado el siguiente sistema: 
toma la palabra, la corta por la mitad y coloca la primera mitad detrás de este último.
Si la palabra tiene un número desigual de caracteres, deja el medio en su lugar anterior:

SECRET ===> [RET][SEC]        AGENT ===> [NT](E)[AG]

De esa manera, podrá intercambiar sus mensajes en privado.
Tarea

Te dan una sola palabra. 
Tu tarea es intercambiar las mitades. 
Si la palabra tiene una longitud desigual, 
deje el personaje en el medio en esa posición e intercambie los trozos a su alrededor. 

Ejemplos

reverse_by_center("secret")  == "retsec" # no center character
reverse_by_center("agent")   == "nteag"  # center character is "e"

*/ 

function reverse_by_center(sentense){
  const _SIZE = sentense.length;
  let midle = 0;
  if(_SIZE % 2 === 0){
    midle = _SIZE / 2;
    sentense = sentense.substring(midle,_SIZE)+sentense.substring(0,midle);
  }else{
    midle = ((_SIZE-1) / 2)+1;
    sentense = sentense.substring(midle,_SIZE)+sentense[midle-1]+sentense.substring(0,midle-1);
  }
  return sentense;
}

console.log(reverse_by_center("agented"));