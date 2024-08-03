// Stack Data structure 

class Stack {
    constructor() {
        this.items = [];
        this.count = 0;
    }

    // add element to top of stack 
    push(element) {
        this.items[this.count] = element;
        console.log(`${element} is added to ${this.count}`);
        this.count++;
        return this.count - 1; // return the element position 
    }

    // Return and remove top element in stack 
    // Return undefined if stack is empty
    pop() {
        if(this.isEmpty) {
            return undefined;
        }

        let removeEl = this.items[this.count - 1];
        this.count -= 1;
        console.log(`${removeEl} is removed`);
        return removeEl;
    }

    // Return the Peek (or Top) element from the stack 
    peek() {
        if(this.isEmpty) {
            console.log('stack is empty.');
            return;
        }

        return this.items[this.count - 1];
    }

    // isEmpty 
    isEmpty() {
        if(this.count === 0) {
            return true;
        }
    }
}

const stack = new Stack();
stack.push(100);
stack.push(200);
stack.push(300);
stack.push(400);

stack.pop(); 
stack.pop(); 

console.log(stack.peek());
