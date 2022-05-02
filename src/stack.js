const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
 function Stack() {
  this.store = [];
  this.top = 0;
  this.push = push;
  this.pop = pop;
  this.peek = peek;
};

function push(element) {
  this.store[this.top++] = element;
}

function peek() {
  return this.store[this.top - 1];
}

function pop() {
  return this.store[--this.top];
}

module.exports = {
  Stack
};
