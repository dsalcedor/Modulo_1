'use strict'
// No cambies los nombres de las funciones.

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:

  if(array.length <= 1){
    return array;
  }

  var pivot = array[Math.floor(Math.random() * array.length)]; 
  var izq = [];
  var igual = [];
  var der = [];

  for(let i = 0; i < array.length; i++){
    if(array[i] < pivot){
      izq.push(array[i]);
    }else if(array[i] === pivot){
      igual.push(array[i]);
    }else{
      der.push(array[i]);
    }
  }

  return quickSort(izq).concat(igual).concat(quickSort(der));

}

function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:

  //okey probemos ahora
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
