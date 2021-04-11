// [x] create stack class
// [x] create push method
// [x] create pop method
// [x] create isEmpty method
// [x] create getSize method
// [x] create peek method (looks at top element without removing)
// [x] create clear method (to empty stack)

class Stack {
	constructor() {
		this.stack = [];
		this.index = 0;
	}

	push(item) {
		this.stack[this.index] = item;
		console.log(`${item} added at position ${this.index}`);
		this.index++;

		return this.index - 1;
	}

	pop() {
		if (this.index === 0) return undefined;

		let removedItem = this.stack[this.index - 1];
		this.index--;
		// if (this.index >= 0) {
		// 	this.stack[this.index - 1] = null;

		// 	if (this.index > 0) {
		// 		this.index--;
		// 	}
		// }
		console.log(`${removedItem} removed`);
		return removedItem;
	}

	isEmpty() {
		console.log(
			`${this.index === 0 ? "stack is empty" : "stack is NOT empty"}`
		);
		return this.index === 0;
	}

	getSize() {
		console.log(`${this.index} items on stack`);
		return this.index;
	}

	peek() {
		console.log(`top element is ${this.stack[this.index - 1]}`);
		return this.stack[this.index - 1];
	}

	clear() {
		this.stack = [];
		this.index = 0;
		console.log("stack cleared");
	}
}

const stack = new Stack();
stack.push(1);
stack.push(2);
// stack.push(3);

stack.peek();
stack.isEmpty();

stack.clear();
stack.isEmpty();

// stack.pop();
// stack.isEmpty();
// stack.pop();
// stack.isEmpty();
// stack.pop();
// stack.isEmpty();
