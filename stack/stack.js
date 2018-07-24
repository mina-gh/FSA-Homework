// FILO
function Stack(){
  this.top = null;
  this.counter = 0;
}

function Node(n){
  this.value = n;
  this.previous = null;
  this.next = null;
}

Stack.prototype.push = function(n){
  var node = new Node(n);

  if(!this.top){
    this.top = node;
  }else{
    this.top.previous = node;
    node.next = this.top;
    this.top = node;
  }

  this.counter++;
}

Stack.prototype.pop = function(){
  if(this.counter === 0) return undefined;

  this.counter--;

  var topNode = this.top;
  
  this.top = this.top.next;
  topNode.next = null;
  this.top.previous = null;

  return topNode.value;
}

Stack.prototype.peek = function(){
  return this.top.value;
}

Stack.prototype.isEmpty = function(){
  return this.counter === 0;
}

Stack.prototype.clear = function(){
  this.top = null;
}

Stack.prototype.size = function(){
  return this.counter;
}

Stack.prototype.printStack = function(){
  var top = this.top;

  var stackToPrint = []; 
  
  while(top != null && top.value != null){
    stackToPrint.push(top.value);
    top = top.next;
  }

  return stackToPrint;
}


var test = new Stack();

console.log(test.isEmpty());
test.push(1);
test.push(2);
console.log(test.size());
console.log(test.printStack());
test.push(3);
console.log(test.printStack());
console.log(test.peek());
console.log(test.pop());
console.log(test.printStack());