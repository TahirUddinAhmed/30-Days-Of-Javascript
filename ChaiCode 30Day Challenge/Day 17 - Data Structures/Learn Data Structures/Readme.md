# Data structures 

## Time Complexity
### Big O 
Big O notation is a mathematical notation that describes the limiting behavior of a functioon when the argument tends towards a particular value or infinity. 

We use Big O to describe the performance of an algorithm.

## Space complexitiy 


## Linked List 
A linked list is a linear data structure that consists of a series of nodes connected by pointers (in C or C++) or references (in Java, python and javascript). Each node contains data and pointer/reference to the next node in the list. Unlike arrays, linked list allow for efficient insertion or removal of elements from any position in the list, as the nodes are not stored contiguously in memory. 

## Properties of a Linked List 
 - Linked lists are dynamic, which means they can grow or shrink during the runtime of a program. 
 - Linked lists can be accessed only sequentially. 
 - The Nodes are not stored in contiguous memory locations. 
 - Node contains the data and pointer. 
 - A particular node is pointed and can be accessed by the pointer stored in the previous node. 
 - The first node of the linked list is pointed by a spaccific pointer called the head. 
 - The last node of the linked list points to null, which specifies the end of the list. 
 - The last node of the linked list points to null, which specifies the end of the list. 

### 1. Singly linked list 
This is the most basic linked list that we were dicussing till now, it can be traversed only in one direction that is from start to end. 
 - Only one-directional access is allowed

### 2. Doubly linked list 
The node of this linked list contains two pointers instead of one, making it possible to access the next as well as the previous node from the current code. 
 - We can access the linked list from both directions. 
 - We can insert a node before the current node easily. 

### 3. Circular linked list 
The last node of the linked list instead of pointing to null points to the first ndoe. 
 - We can traverse this linked list in a sequential as well as circular manner. 
 - It is generally used in the queue-relation concept. 

## Implementation 
After all theoratical discussion of linked list, here we will implement the entire module of linked list in javascript. 

### Linked List 
```js
class LinkedList {
    constructor(head = null) {
        this.head = head;
    }
}
```

### Node 
```js
class Node {
    constructor(data) {
        this.data = data
        this.next = null
    }
}
```

## Operations 

### AppendNode (node)
This method will append the node in the linked list. 

```js
appendNode(newNode) {
    let node = this.head;

    if(node == null) {
        // Means it's just empty list
        this.head = newNode;
        return;
    }

    while(node.next) {
        node = node.next;
    }
    node.next = newNode;
}
```


## Stack 
A stack is a linear data structure that follows the Last-In-First-Out(LIFO) principle. This means that last element added to the stack will be the first one to be removed. Think of it like a stack of plates: You can only take the top plate off the stack, and when you add a new plate, you place it on the top. 

### Basic Operations 
A stack typically supports the following operations: 
 1. Push: add an element to the top of the stack. 
 2. Pop: Remove and return the top element of the stack. 
 3. Peek(or Top): Return the top element without removing it. 
 4. isEmpty: check if the stack is empty. 
 5. Size: Return the number of elements in the stack. 

## Queue Data structure 
A queue is another fundamental data structure in computer science. Unlike a stack, which follows the Last-In-First-Out(LIFO) principle, a queue follows the first-in-first-out(FIFO) principle. This means that the first element added to the queue will be the first one to be removed. 

### Basic Operations
A queue typically supoorts the following opeartions: 
 1. Enqueue: Add an element to the end of the queue. 
 2. Dequeue: Remove and return the front element of the queue. 
 3. Front(or Peek): Return the front element without removing it. 
 4. isEmpty: check if the queue is empty. 
 5. size: return the number of elements in the queue. 
 
## Binary Tree 
A Binary tree is a hierarchical data structure in which each node has at most two children, referred to as the left child and the right child. it is an essential structure used in various applications such as expression parsing, sorting, and searching. 

### Basic Terminology 
 - Node: Each element in a binary tree. 
 - Root: The topmost node in a tree. 
 - Parent: The node that has children. 
 - Child: The node that is a descendant of another node. 
 - Leaf: A node that has no children. 
 - Subtree: A tree formed by a node and its descendants. 