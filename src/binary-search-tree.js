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
    const NEW_NODE = new Node(data);

    if (!this.rootOfTree) {
      this.rootOfTree = NEW_NODE;
      return;
    }
    let currentNode = this.rootOfTree;
    while (currentNode) {
      if (currentNode.data > NEW_NODE.data) {
        if (!currentNode.left) {
          currentNode.left = NEW_NODE;
          return;
        }
        currentNode = currentNode.left;
      } else {
        if (!currentNode.right) {
          currentNode.right = NEW_NODE;
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

  remove(/*data*/) {
    // if (!this.rootOfTree) {
    //   return;
    // }
    // let currentNode = this.rootOfTree;
    // while (currentNode) {
    //   if (currentNode.data === data) {
    //     if(currentNode.left === null) {
    //       if(currentNode.right === null){
    //         currentNode = null;
    //         return;
    //       } else {
    //         currentNode = currentNode.right;
    //         return;
    //       }
    //     } else {
    //       if(currentNode.right === null){
    //         currentNode = currentNode.left;
    //         return;
    //       } else {
    //         // currentNode = currentNode.right;
    //         // return;
    //       }
    //     }
    //   }
    //   if (currentNode.data > data) {
    //     if (!currentNode.left) {
    //       return;
    //     }
    //     currentNode = currentNode.left;
    //   } else {
    //     if (!currentNode.right) {
    //       return;
    //     }
    //     currentNode = currentNode.right;
    //   }
    // }
    throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
  }

  min() {
    if (!this.rootOfTree) {
      return null;
    }
    let currentNode = this.rootOfTree;
    while (currentNode) {
      if (currentNode.data.left === null) {
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
      if (currentNode.data.right === null) {
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
