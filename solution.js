/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

// This class does not neet to be created byt the interviewee
// Please provide for their referrence
class Node {
  constructor(val, next) {
    this.val = val;
    this.next = next;
  }
}

function reverseList(head) {
  let current = head;
  let previous = null;

  while (current !== null) {
    let temp = current.next;
    current.next = previous;
    previous = current;
    current = temp;
  }

  return previous;
}

const test1 = new Node(1, new Node(2, new Node(3, new Node(4, new Node(5, null)))));
const test2 = new Node(1, new Node(2, null));

console.log(reverseList(test1));
console.log(reverseList(test2));
