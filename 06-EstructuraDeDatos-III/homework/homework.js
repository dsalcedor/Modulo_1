'use strict';

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)
  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/
function BinarySearchTree(value) {
   this.value = value;
   this.right = null;
   this.left = null;
}

//let a = new BinarySearchTree(5);

//         5
//       /  \
//     null  6
//         /  \
//        null 7
      

BinarySearchTree.prototype.insert = function(value/*7*/){
   if(value >= this.value){
      //derecha
      if(this.right == null){
         this.right = new BinarySearchTree(value);
      }else{
         this.right.insert(value);
      }
   }
   
   if(value < this.value){
      //izquierda
      if(this.left == null){
         this.left = new BinarySearchTree(value);
      }else{
         this.left.insert(value)
      }
   }
}

BinarySearchTree.prototype.contains = function(value){

   if(this.value === value) return true;

   if(value > this.value){
      //derecha
      if(this.right == null){
         return false;
      }else{
         return this.right.contains(value);
      }
   }
   
   if(value < this.value){
      //izquierda
      if(this.left == null){
         return false;
      }else{
         return this.left.contains(value)
      }
   }
}

BinarySearchTree.prototype.size = function(){
   if(this.right === null && this.left === null) return 1;

   if(this.left != null && this.right == null) return 1 + this.left.size();

   if(this.right != null && this.left == null) return 1 + this.right.size();

   if(this.right != null && this.left != null) return 1 + this.right.size() + this.left.size();
}

BinarySearchTree.prototype.depthFirstForEach = function(cb, order){
   if(order == 'pre-order'){
      //root - left - right
      cb(this.value);
      if(this.left != null) this.left.depthFirstForEach(cb, order);
      if(this.right != null) this.right.depthFirstForEach(cb, order);
   }else if(order === 'post-order'){
      //izq - der - root
      if(this.left != null) this.left.depthFirstForEach(cb, order);
      if(this.right != null) this.right.depthFirstForEach(cb, order);
      cb(this.value);
   }else{
      //in order
      //izq - root - der
      if(this.left != null) this.left.depthFirstForEach(cb, order);
      cb(this.value);
      if(this.right != null) this.right.depthFirstForEach(cb, order);
   }
}

BinarySearchTree.prototype.breadthFirstForEach = function(cb, array = []){
   //respetar el orden de izq a der.
   if(this.left !== null){
      array.push(this.left);
   }
   if(this.right !== null){
      array.push(this.right);
   }

   cb(this.value);

   if(array.length > 0){
      array.shift().breadthFirstForEach(cb, array);
   }
}

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
   BinarySearchTree,
};
