const { NotImplementedError } = require("../extensions/index.js");

const { Node } = require("../extensions/list-tree.js");

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {
  constructor() {
    this.rootOfTree = null;
  }

  root() {
    return this.rootOfTree;
    // remove line with error and write your code here
  }

  add(data) {
    const newNode = new Node(data);

    if (!this.rootOfTree) {
      this.rootOfTree = newNode;
      return;
    }
    let currentNode = this.rootOfTree;
    while (currentNode) {
      if (currentNode.data > newNode.data) {
        if (!currentNode.left) {
          currentNode.left = newNode;
          return;
        }
        currentNode = currentNode.left;
      } else {
        if (!currentNode.right) {
          currentNode.right = newNode;
          return;
        }
        currentNode = currentNode.right;
      }
    }
    // remove line with error and write your code here
  }

  has(data) {
    if (!this.rootOfTree) {
      return false;
    }
    let currentNode = this.rootOfTree;
    while (currentNode) {
      if (currentNode.data === data) {
        return true;
      }
      if (currentNode.data > data) {
        if (!currentNode.left) {
          return false;
        }
        currentNode = currentNode.left;
      } else {
        if (!currentNode.right) {
          return false;
        }
        currentNode = currentNode.right;
      }
    }
    // remove line with error and write your code here
  }

  find(data) {
    if (!this.rootOfTree) {
      return null;
    }
    let currentNode = this.rootOfTree;
    while (currentNode) {
      if (currentNode.data === data) {
        return currentNode;
      }
      if (currentNode.data > data) {
        if (!currentNode.left) {
          return null;
        }
        currentNode = currentNode.left;
      } else {
        if (!currentNode.right) {
          return null;
        }
        currentNode = currentNode.right;
      }
    }
    // remove line with error and write your code here
  }

  remove(data) {
    if (!this.rootOfTree) {
      return;
    } 
    let currentNode = this.rootOfTree;
    let parentNode = null;
    let parentNodeSide = null;
    while (currentNode) {
      if (currentNode.data === data) {
        if(currentNode.left === null) {
          if(currentNode.right === null) {
            parentNode[parentNodeSide] = null;
            return;
          } else {
            parentNode[parentNodeSide] = currentNode.right;
            return;
          }
        } else {
          if(currentNode.right === null) {
            parentNode[parentNodeSide] = currentNode.left;
            return;
          } else {
            let currentSubNode = currentNode.right;
            let parentSubNode = currentNode;
            while (currentSubNode) {
              if (currentSubNode.left === null) {
                this.remove(currentSubNode.data);
                currentNode.data = currentSubNode.data;
                return;
              }
                parentSubNode = currentSubNode;
                currentSubNode = currentSubNode.left;
              }
          }
        }
      } else if (currentNode.data > data) {
        if (!currentNode.left) {
          return;
        }
        parentNode = currentNode;
        parentNodeSide = 'left';
        currentNode = currentNode.left;
      } else {
        if (!currentNode.right) {
          return;
        }
        parentNode = currentNode;
        parentNodeSide = 'right';
        currentNode = currentNode.right;
      }
    }
    // remove line with error and write your code here
  }

  min() {
    if (!this.rootOfTree) {
      return null;
    }
    let currentNode = this.rootOfTree;
    while (currentNode) {
      if (currentNode.left === null) {
        return currentNode.data;
      }
        currentNode = currentNode.left;
      }
    // remove line with error and write your code here
  }

  max() {
    if (!this.rootOfTree) {
      return null;
    }
    let currentNode = this.rootOfTree;
    while (currentNode) {
      if (currentNode.right === null) {
        return currentNode.data;
      }
        currentNode = currentNode.right;
      }
    // remove line with error and write your code here
  }
}

module.exports = {
  BinarySearchTree,
};
