// [x] create queue class
// [x] create enqueue method
// [x] create dequeue method
// [x] create getSize method
// [x] create peek method
// [x] create isEmpty method
// [x] create clear method

class Queue {
	constructor() {
		this.queue = [];
		this.headIdx = 0;
		this.tailIdx = 0;
		this.index = 0;
		this.count = 0;
	}

	enqueue(item) {
		this.queue[this.index] = item;
		console.log(`${item} added to queue at ${this.index}`);
		this.index++;
		this.count++;

		return this.count;
	}

	dequeue() {
		if (this.count === 0) return undefined;

		let removedItem = this.queue[this.headIdx];
		this.headIdx++;
		this.count--;
		console.log(`${removedItem} removed`);

		return removedItem;
	}

	getSize() {
		if (this.count === 1) console.log(`${this.count} item in queue`);
		else console.log(`${this.count} items in queue`);
		return this.count;
	}

	peek() {
		console.log(`front element is ${this.queue[this.headIdx]}`);
		return this.queue[this.headIdx];
	}

	isEmpty() {
		console.log(
			`${this.count === 0 ? "queue is empty" : "queue is NOT empty"}`
		);
	}

	clear() {
		this.queue = [];
		this.headIdx = 0;
		this.tailIdx = 0;
		this.index = 0;
		this.count = 0;

		console.log("queue cleared");
	}
}

const queue = new Queue();

queue.enqueue(1);
queue.enqueue(2);
// queue.enqueue(3);

queue.peek(); // should return 1
queue.isEmpty(); // should return not empty
queue.getSize(); // should return 2 items

queue.dequeue(); // should return 1
queue.getSize(); // should return 1 item

queue.clear();
queue.isEmpty(); // should return empty
queue.getSize(); // should return 0 items
