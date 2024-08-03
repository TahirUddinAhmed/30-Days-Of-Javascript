// Day 17 - Data structures 

// Task 1
class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

// Task 2
class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    // Add node to the end
    addEnd(data) {
        let node = new Node(data);
        let current;
        // check if empty 
        if(this.head == null) {
            this.head = node;
        } else {
            current = this.head;

            // while current.next if not null
            while(current.next) {
                current = current.next;
            }

            current.next = node;
        }

        this.size++;
        
    }

    // remove node from the end 
    removeEnd() {
        // check if list is empty 
        if(this.size === 0) {
            console.log('List is empty, nothing to remove');
            return;
        }

        if (this.size === 1) {
            this.head = null;
          } else {
            let current = this.head;
            let previous = null;
      
            while (current.next !== null) {
              previous = current;
              current = current.next;
            }
            previous.next = null;
          }
      
          this.size--;
    }


    // Display all Nodes 
    printAll() {
        let current = this.head;

        while(current) {
            console.log(current.data);
            current = current.next;
        }
    }
}

const ll = new LinkedList();

// insert data at last 
ll.addEnd(5);
ll.addEnd(8);

ll.removeEnd();

ll.printAll();

// Activity 2: Stack 
// Task 3
class Stack {
    constructor() {
        this.items = [];
    }



    // push 
    push(data) {
        this.items.push(data);
        console.log(`${data} is added at ${this.items.length - 1}`);
    }

    // pop 
    pop() {
        if(this.items.length === 0) {
            console.log('Stack is empty');
            return;
        }

        return this.items.pop();
        
    }

    // peek 
    peek() {
        if(this.items.length === 0) {
            console.log('stack is empty');
            return;
        }

        return this.items[this.items.length - 1];
    }

    // find length
    getLength() {
        return this.items.length - 1;
    }

}

const stack = new Stack();

// stack.push(25);
// stack.push(7);
// stack.pop();
// console.log(`Top of the stack is ${stack.peek()}`);

// Task 4
// stack.push('T');
// stack.push('a');
// stack.push('h');
// stack.push('i');
// stack.push('r');
// const length = stack.getLength();
// console.log(length);

// for(let i = 0; i <= length; i++) {
//     console.log(stack.pop());
// }


class Queue {
    constructor() {
        this.items = [];
    }

    // added element 
    enqueue(element) {
        this.items.push(element);
        console.log(`${element} is added at ${this.items.length - 1}`)
    }

    // remove element 
    dequeue() {
        if(this.items.length === 0) {
            console.log('Queue is empty');
            return;
        }

        // remove and return the element 
        return this.items.shift();
    }

    // view the first element
    front() {
        if(this.items.length === 0) {
            console.log('Queue is empty');
            return;
        }

        return this.items[0];
    }

    // Task 6
    print() {
        console.log(this.items.join(' '));  
    }
}

const queue = new Queue();

// add element to the queue
// queue.enqueue(15);  
// queue.enqueue(7);  
// queue.enqueue(14);  
// queue.enqueue(9);  
// queue.enqueue(5);  

// remove element from the queue
// console.log(`${queue.dequeue()} is removed`);

// front - view the first element
// console.log(`${queue.front()} is the frist element`);

// print queue
// queue.print();


// activity 4: Binary tree
class TreeNode {
    constructor(value) {
      this.value = value; 
      this.left = null; 
      this.right = null; 
    }
}

class BinaryTree {
    constructor() {
      this.root = null; // Initialize the root of the tree as null
    }
  
    // Insert a value into the tree
    insert(value) {
      const newNode = new TreeNode(value);
  
      if (this.root === null) {
        this.root = newNode;
      } else {
        this.insertNode(this.root, newNode);
      }
    }
  
    // Helper method to insert a node
    insertNode(node, newNode) {
      if (newNode.value < node.value) {
        if (node.left === null) {
          node.left = newNode;
        } else {
          this.insertNode(node.left, newNode);
        }
      } else {
        if (node.right === null) {
          node.right = newNode;
        } else {
          this.insertNode(node.right, newNode);
        }
      }
    }
  
    // In-order traversal (Left, Root, Right)
    inOrder(node = this.root) {
      if (node !== null) {
        this.inOrder(node.left);
        console.log(node.value);
        this.inOrder(node.right);
      }
    }
  }
  
  // Example usage:
  const tree = new BinaryTree();
  tree.insert(50);
  tree.insert(30);
  tree.insert(70);
  tree.insert(20);
  tree.insert(40);
  tree.insert(60);
  tree.insert(80);
  
  console.log("In-order traversal:");
  tree.inOrder(); // Output: 20 30 40 50 60 70 80
  
