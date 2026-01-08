export type Priority = 1 | 2 | 3 | 4 | 5;

export default class PriorityQueue<T> {
  private queues: T[][];
  private capacity: number;
  private count: number;

  constructor(capacity: number) {
    if (!Number.isFinite(capacity) || capacity <= 0) throw new Error('Capacity must be a positive integer');
    this.capacity = Math.floor(capacity);
    this.queues = [[], [], [], [], []];
    this.count = 0;
  }

  enqueue(item: T, priority: Priority = 3): void {
    if (this.isFull()) throw new Error('Queue is full');
    if (priority < 1 || priority > 5) throw new Error('Priority must be between 1 and 5');
    this.queues[priority - 1].push(item);
    this.count++;
  }

  dequeue(): T {
    if (this.isEmpty()) throw new Error('Queue is empty');
    for (let i = 4; i >= 0; i--) {
      if (this.queues[i].length > 0) {
        this.count--;
        return this.queues[i].shift() as T;
      }
    }
    throw new Error('Queue is empty');
  }

  peek(): T | undefined {
    if (this.isEmpty()) return undefined;
    for (let i = 4; i >= 0; i--) {
      if (this.queues[i].length > 0) return this.queues[i][0];
    }
    return undefined;
  }

  isEmpty(): boolean {
    return this.count === 0;
  }

  isFull(): boolean {
    return this.count >= this.capacity;
  }

  size(): number {
    return this.count;
  }

  clear(): void {
    this.queues = [[], [], [], [], []];
    this.count = 0;
  }
}
