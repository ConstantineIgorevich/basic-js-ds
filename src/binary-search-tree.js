const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

  
  constructor() {
    this.rootOfTree = null;
  };

  root() {
    return this.rootOfTree;
    // remove line with error and write your code here
  }

  add(data) {

    const NEW_NODE = new Node(data);
    
    if (!this.rootOfTree) {
      this.rootOfTree = NEW_NODE;
      return;
    }
    let currentNode = this.rootOfTree;
    while(currentNode) {
    if(currentNode.data > NEW_NODE.data)
    {
      if(!currentNode.left) {
        currentNode.left = NEW_NODE;
        return;
      }
      currentNode = currentNode.left;
    } else {
      if(!currentNode.right) {
        currentNode.right = NEW_NODE;
        return;
      }
      currentNode = currentNode.right;
    }
  }
    // remove line with error and write your code here
  }

  has(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  find(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  remove(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  min() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  max() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
}

module.exports = {
  BinarySearchTree
};