class Stack {
    constructor() {
        this.stack = []
    }

    // push
    push(element) {
        this.stack.push(element)
        return this.stack
    }

    // pop
    pop() {
        return this.stack.pop()
    }

    // peak
    peak() {
        return this.stack[this.stack.length - 1]
    }

    // size
    size() {
        return this.stack.length
    }
}

const stack = new Stack()
console.log(stack.size())
console.log(stack.push( 2))
console.log(stack.push( 9))
console.log(stack.push( 10))
console.log(stack.size())
console.log(stack.peak())
console.log(stack.pop())
console.log(stack.peak())
