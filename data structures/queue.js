//       back --> [8][7][6][6][2][4][2][1]  <-- front
// FIFO - first in first out

class Queue {
  constructor() {
    this.elements = {};
    this.back = 0;
    this.front = 0;
  }

  enqueue(element) {
    this.elements[this.back] = element;
    this.back++;
  }
  dequeue() {
    const temp = this.elements[this.back];
    delete this.elements[this.back];
    this.front++;
    return temp;
  }

  peek() {
    return this.elements[this.front];
  }

  get length() {
    return this.back-this.front;
  }

  print() {
    console.log(this.elements);
  }
}

function main() {
  let myqueue = new Queue();

  myqueue.enqueue(5);
  myqueue.enqueue(2);
  myqueue.enqueue(8);
  myqueue.enqueue(4);

  myqueue.print();

  console.log(myqueue.dequeue());
  console.log(myqueue.dequeue());

  console.log(myqueue.length);

  myqueue.print();
}

main();
