var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var newNode = Node(value);
    if(list.head === null) {
      list.head = newNode;
      list.tail = newNode;  
    }
    list.tail.next = newNode;//pointing but not filling
    list.tail = newNode;//filling
  };

  list.removeHead = function() {
    var currentHead = list.head;
    list.head = list.head.next;
    return currentHead.value;
  };

  list.contains = function(target) {
    var currentNode = list.head;
    while(currentNode) {
      if (currentNode.value === target) return true;
        currentNode = currentNode.next;
    }
      return false;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */