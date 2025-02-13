/*
Tarea

Codifica la función grabDoll. 
La función acepta un parámetro: dolls. 
Este es un arreglo de cadenas (strings), una lista de algunas muñecas.
Debes recorrer el arreglo dolls utilizando un bucle for. 
Si el elemento es "Hello Kitty" o "Barbie doll", 
debes agregarlo a una bolsa (la bolsa es un arreglo que ya está definido en la función); 
si es cualquier otra cadena, debes usar continue para saltar ese elemento.
Cuando la bolsa tenga tres elementos, la bolsa estará llena. 
Debes usar break para salir del bucle; 
si la bolsa no está llena, debes continuar recorriendo dolls hasta el último elemento.
Retorna la bolsa después de que el bucle for haya terminado.
Debes usar for, break y continue en tu código. 
*/

function grabDoll(dolls = []) {
  let list = ["hello kitty", "barbie doll"];
  let bag = [];
  for (let i = 0; i < dolls.length; i++) {
    if(!list.includes(dolls[i])){
      continue;
    }
    if(bag.length === 3){
      break;
    }  
    bag.push(dolls[i]);
  }
  return bag;
}
let arr=["hello kitty",,"es vacio","hello kitty","es vacio", "barbie doll","es vacio",,"es vacio",];
console.log(grabDoll(arr));
