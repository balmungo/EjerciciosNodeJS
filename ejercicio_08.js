/*
Dada una matriz ordenada de números, devuelva el resumen de sus rangos. 

[1, 2, 3, 4] ==> ["1->4"]
[1, 1, 1, 1, 1] ==> ["1"]
[0, 1, 2, 5, 6, 9] ==> ["0->2", "5->6", "9"]
[0, 1, 2, 3, 3, 3, 4, 5, 6, 7] ==> ["0->7"]
[0, 1, 2, 3, 3, 3, 4, 4, 5, 6, 7, 7, 9, 9, 10] ==> ["0->7", "9->10"]
[-2,0, 1, 2, 3, 3, 3, 4, 4, 5, 6, 7, 7, 9, 9, 10, 12] ==> ["-2", "0->7", "9->10", "12"]
*/
function resumirRangos(arr = []) {
  let res = [];
  let start = arr[0];
  let end = arr[0];
  for (let i = 1; i < arr.length; i++) {
    const dif = arr[i] - arr[i - 1];
    if (dif === 1) {
      end = arr[i];
    }
    if (dif > 1) {
      start === end ? res.push(`${start}`) : res.push(`${start}->${end}`);
      start = arr[i];
      end = arr[i];
    }
  }
  start === end ? res.push(`${start}`) : res.push(`${start}->${end}`);
  return res;
}

// Ejemplos de uso
console.log(resumirRangos([1, 2, 3, 4])); // ["1->4"]
console.log(resumirRangos([1, 1, 1, 1, 1])); // ["1"]
console.log(resumirRangos([0, 1, 2, 3, 3, 3, 4, 5, 6, 7])); // ["0->7"]
console.log(
  resumirRangos([-2, 0, 1, 2, 3, 3, 3, 4, 4, 5, 6, 7, 7, 9, 9, 10, 12])
); // ["-2", "0->7", "9->10", "12"]
console.log(resumirRangos([0, 1, 2, 5, 6, 9])); // ["0->2", "5->6", "9"]
console.log(resumirRangos([0, 1, 2, 3, 3, 3, 4, 4, 5, 6, 7, 7, 9, 9, 10])); // ["0->7", "9->10"]
