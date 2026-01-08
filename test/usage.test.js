const assert = require('assert');
const PriorityQueue = require('../lib/PriorityQueue');

function runTests() {
  const q = new PriorityQueue(4);
  assert.strictEqual(q.isEmpty(), true);

  q.enqueue('a', 1);
  q.enqueue('b', 5);
  q.enqueue('c', 3);
  q.enqueue('d', 5);

  assert.strictEqual(q.isFull(), true);
  assert.strictEqual(q.peek(), 'b');
  assert.strictEqual(q.dequeue(), 'b');
  assert.strictEqual(q.dequeue(), 'd');
  assert.strictEqual(q.dequeue(), 'c');
  assert.strictEqual(q.dequeue(), 'a');
  assert.strictEqual(q.isEmpty(), true);

  console.log('All tests passed');
}

if (require.main === module) runTests();
