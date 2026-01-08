class PriorityQueue {
  constructor(capacity) {
    if (!Number.isFinite(capacity) || capacity <= 0) throw new Error('Capacity must be a positive integer');
    this.capacity = Math.floor(capacity);
    this.queues = [[], [], [], [], []];
    this.count = 0;
  }
  enqueue(item, priority = 3) {
    if (this.isFull()) throw new Error('Queue is full');
    if (priority < 1 || priority > 5) throw new Error('Priority must be between 1 and 5');
    this.queues[priority - 1].push(item);
    this.count++;
  }
  dequeue() {
    if (this.isEmpty()) throw new Error('Queue is empty');
    for (let i = 4; i >= 0; i--) {
      if (this.queues[i].length > 0) {
        this.count--;
        return this.queues[i].shift();
      }
    }
    throw new Error('Queue is empty');
  }
  peek() {
    if (this.isEmpty()) return undefined;
    for (let i = 4; i >= 0; i--) {
      if (this.queues[i].length > 0) return this.queues[i][0];
    }
    return undefined;
  }
  isEmpty() {
    return this.count === 0;
  }
  isFull() {
    return this.count >= this.capacity;
  }
  size() {
    return this.count;
  }
  clear() {
    this.queues = [[], [], [], [], []];
    this.count = 0;
  }
}

module.exports = PriorityQueue;
