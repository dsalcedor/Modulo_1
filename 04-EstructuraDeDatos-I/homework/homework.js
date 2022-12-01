'use strict';

// EJERCICIO 1
function nFactorial(n) {
   if(n === 0) return 1;

   return n * nFactorial(n-1);
}

// EJERCICIO 2
function nFibonacci(n) {
   if(n <= 1) return n;

   return nFibonacci(n-1) + nFibonacci(n-2);
}

// EJERCICIO 3
function Queue() {
   // constructor
   this.array = [];
}

Queue.prototype.size = function(){
   return this.array.length;
}
Queue.prototype.enqueue = function(x){
   this.array.push(x);
}
Queue.prototype.dequeue = function(){
   return this.array.shift();
}

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
   Queue,
   nFactorial,
   nFibonacci,
};
