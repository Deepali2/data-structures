//var BinarySearchTree = function(value) {
//};

class Node {
  constructor(){
    this.left = left;
    this.right = right;
    this.value = value;
  }
}

class BinarySearchTree {
  constructor(){
    this.root = null; //starting point of tree
  } 

insertNode(node, newNode){
  if(newNode.value > node.value){
    if(!node.right){
      node.right = newNode;
    }
    this.insertNode(node.right, newNode);  
  }
    if(!node.left){
      node.left = newNode;
    }
    this.insertNode(ndoe.left, newNode);
}

insert(value){
  var newNode = new Node(value);
  if(this.root === null){
    this.root = newNode;
  }  
  this.insertNode(this.root, newNode);
}

contains(value, node = this.node){
  if(!node){
    return false; 
  }
  if(value === node.value){
    return true;
  }
  if(value > node.value){
    return this.contains(value, node.right);    
  }
  if(value < node.value){
    return this.contains(value, node.left);
  }
  return false;
}

// depthFirstLog(cb, node = this.node){
  
// }

}




/*
 * Complexity: What is the time complexity of the above functions?
 */
