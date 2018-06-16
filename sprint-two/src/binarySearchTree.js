var BinarySearchTree = function(value) {

  var binaryTree = Object.create(binaryTreePrototype);
  binaryTree.value = value;
  binaryTree.left = null;
  binaryTree.right = null;
  return binaryTree;
  };

var binaryTreePrototype = {};

binaryTreePrototype.insert = function(val) {
  if (val < this.value) {
    if (this.left === null) {
      this.left = BinarySearchTree(val);
    } else {
      this.left.insert(val);
    }
  } else if (val > this.value) {
    if (this.right === null) {
      this.right = BinarySearchTree(val);
    } else {
      this.right.insert(val);
    }
  } else {
    // do nothing: The tree already contains this value
  }
};

binaryTreePrototype.contains = function(val) {
  if (val === this.value) {
    return true;
  } else if (val < this.value) {
    return !!(this.left && this.left.contains(val));
  } else if (val > this.value) {
    return !!(this.right && this.right.contains(val));
  }
};

binaryTreePrototype.depthFirstLog = function(callBack) {
  callBack(this.value);
  if (this.left) {
    this.left.depthFirstLog(callBack);
  }
  if (this.right) {
    this.right.depthFirstLog(callBack);
  }
};

// class Node {
//   constructor(value){
//     this.left = null;
//     this.right = null;
//     this.value = value;
//   }
// }

// class BinarySearchTree {
//   constructor(value){
//     this.root = null; //starting point of tree
//   } 

// insertNode(node, newNode){
//   if(newNode.value > node.value){
//     if(node.right === null){
//       node.right = newNode;
//     }
//     node.insertNode(node.right, newNode);  
//   }
//   if(newNode.value < node.value){
//     if(node.left === null){
//       node.left = newNode;
//     }
//     node.insertNode(node.left, newNode);
//   }
// }

// insert(value){
//   var newNode = new Node(value);
//   if(this.root === null){
//     this.root = newNode;
//   }  
//   this.insertNode(this.root, newNode);
// }

// contains(value, node = this.node){
//   if(!node){
//     return false; 
//   }
//   if(value === node.value){
//     return true;
//   }
//   if(value > node.value){
//     return this.contains(value, node.right);    
//   }
//   if(value < node.value){
//     return this.contains(value, node.left);
//   }
//   return false;
// }

// // depthFirstLog(cb, node = this.node){
  
// // }

// }




/*
 * Complexity: What is the time complexity of the above functions?
 */
