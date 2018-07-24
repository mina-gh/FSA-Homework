// FIFO
function Queue(){
  this.head = null;
  this.tail = null;
  this.counter = 0;
}

function Node(n){
  this.value = n;
  this.previous = null;
  this.next = null;
}

Queue.prototype.add = function(n){
  var node = new Node(n);
  if(this.head == null && this.tail == null){
    this.head = node;
    this.tail = node;
  }else{
    this.tail.next = node;
    node.previous = this.tail;
    this.tail = node;
  }
  this.counter++;
}

Queue.prototype.remove = function(){
  if(this.head == null){
    return undefined;
  }

  var head = this.head;

  this.head = head.next;
  this.head.previous = null;
  head.next = null;

  this.counter--;  
  return head.value;
}

Queue.prototype.peek = function(){
  return this.head.value;
}

Queue.prototype.clear = function(){
  return this.queue = [];
}

Queue.prototype.isEmpty = function(){
  return this.counter == 0;
}


Queue.prototype.printQueue = function(){
  var head = this.head;

  var queueToPrint = [];
  while(head != null && head.value != null){
    queueToPrint.push(head.value);
    head = head.next;
  }

  return queueToPrint;
}


var test = new Queue();
test.add(1);
test.add(2);
test.add(3);

console.log(test.printQueue())
console.log(test.peek());
console.log(test.remove());
console.log(test.printQueue())