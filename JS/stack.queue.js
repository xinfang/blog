/*------------------------------------------------------------------ 
 Defining Stack Operations using Closures in Javascript, privacy and
 state of stack operations are maintained
 ------------------------------------------------------------------- 
 */
var stackControl = true;
var stack = (function(array) {
        array = [];
        //--Define the max size of the stack
        var MAX_SIZE = 5;

        function isEmpty() {
            if (array.length < 1) console.log("Stack is empty");
        };
        isEmpty();

        return {

            push: function(ele) {
                if (array.length < MAX_SIZE) {
                    array.push(ele)
                    return array;
                } else {
                    console.log("Stack Overflow")
                }
            },
            pop: function() {
                if (array.length > 1) {
                    array.pop();
                    return array;
                } else {
                    console.log("Stack Underflow");
                }
            }

        }
    })()
    // var list = 5;
    // console.log(stack(list))
if (stackControl) {
    console.log(stack.pop());
    console.log(stack.push(3));
    console.log(stack.push(2));
    console.log(stack.pop());
    console.log(stack.push(1));
    console.log(stack.pop());
    console.log(stack.push(38));
    console.log(stack.push(22));
    console.log(stack.pop());
    console.log(stack.pop());
    console.log(stack.push(6));
    console.log(stack.pop());
}

var stack = function() {
   var data = [];
   this.isEmpty = function() {
     return !data.length;
   };
   
   this.push = function(obj) {
       data.push(obj)
   };
  
   this.peek = function() {
      if (!!data.length) {
         return data[data.length - 1]
      }
   };
  
   this.popup = function() {
      if (!!data.length) {
         return data.pop();
         //return data.splice(data.length-1,1);
      }
   };
}

var mystack = new stack()
p(mystack.isEmpty());
mystack.push(1);
p(mystack.isEmpty());
p(mystack.peek());
mystack.push(2);
mystack.push(3);
mystack.push(4);
p(mystack.peek());
p(mystack.popup());
p(mystack.popup());


//End of STACK Logic

/* Defining Queue operations*/

var queue = (function(array) {
    array = [];
    var reversearray;
    //--Define the max size of the stack
    var MAX_SIZE = 5;

    function isEmpty() {
        if (array.length < 1) console.log("Queue is empty");
    };
    isEmpty();

    return {
        insert: function(ele) {
            if (array.length < MAX_SIZE) {
                array.push(ele)
                reversearray = array.reverse();
                return reversearray;
            } else {
                console.log("Queue Overflow")
            }
        },
        delete: function() {
            if (array.length > 1) {
                //reversearray = array.reverse();
                array.pop();
                return array;
            } else {
                console.log("Queue Underflow");
            }
        }
    }



})()

console.log(queue.insert(5))
console.log(queue.insert(3))
console.log(queue.delete(3))

//===================================

// Linked List
function Node(data) {
  this.data = data;
  this.next = null;
}

// Stack implemented using LinkedList
function Stack() {
  this.top = null;
}

Stack.prototype.push = function(data) {
  var newNode = new Node(data);

  newNode.next = this.top; //Special attention
  this.top = newNode;
}

Stack.prototype.pop = function() {
  if (this.top !== null) {
    var topItem = this.top.data;
    this.top = this.top.next;
    return topItem;
  }
  return null;
}

Stack.prototype.print = function() {
  var curr = this.top;
  while (curr) {
    console.log(curr.data);
    curr = curr.next;
  }
}

// var stack = new Stack();
// stack.push(3);
// stack.push(5);
// stack.push(7);
// stack.print();

// Queue implemented using LinkedList
function Queue() {
  this.head = null;
  this.tail = null;
}

Queue.prototype.enqueue = function(data) {
  var newNode = new Node(data);

  if (this.head === null) {
    this.head = newNode;
    this.tail = newNode;
  } else {
    this.tail.next = newNode;
    this.tail = newNode;
  }
}

Queue.prototype.dequeue = function() {
  var newNode;
  if (this.head !== null) {
    newNode = this.head.data;
    this.head = this.head.next;
  }
  return newNode;
}

Queue.prototype.print = function() {
  var curr = this.head;
  while (curr) {
    console.log(curr.data);
    curr = curr.next;
  }
}

var queue = new Queue();
queue.enqueue(3);
queue.enqueue(5);
queue.enqueue(7);
queue.print();
queue.dequeue();
queue.dequeue();
queue.print();

==================

//wrong
var Queue = function() {
  this.first = null;
  this.last = null;
  this.size = 0;
};

var Node = function(data) {
  this.data = data;
  this.next = null;
};

Queue.prototype.enqueue = function(data) {
  var node = new Node(data);

  if (!this.first){ // for empty list first and last are the same
    this.first = node;
    this.last = node;
  } else { // otherwise we stick it on the end
    this.last.next=node;
    this.last=node;
  }

  this.size += 1;
  return node;
};

Queue.prototype.dequeue = function() {
  if (!this.first) //check for empty list
    return null;

  temp = this.first; // grab top of list
  if (this.first==this.last) {
    this.last=null;  // when we need to pop the last one
  }
  this.first = this.first.next; // move top of list down
  this.size -= 1;
  return temp;
};



====
function node(value, noderef) {
    this.value = value;
    this.next = noderef;
}
function stack() {
    this.push = function (value) {
        this.next = this.first;
        this.first = new node(value, this.next);
    }
    this.pop = function () {
        var popvalue = this.first.value;
        this.first = this.first.next;
        return popvalue;
    }
    this.hasnext = function () {
        return this.next != undefined;
    }
    this.isempty = function () {
        return this.first == undefined;
    }

}

//Javascript stack linked list data structure (no array)
function node(value, noderef) {
    this.value = value;
    this.next = undefined;
}
function queue() {
    this.enqueue = function (value) {
        this.oldlast = this.last;
        this.last = new node(value);
        if (this.isempty())
            this.first = this.last;
        else 
           this.oldlast.next = this.last;
    }
    this.dequeue = function () {
        var queuvalue = this.first.value;
        this.first = this.first.next;
        return queuvalue;
    }
    this.hasnext = function () {
        return this.first.next != undefined;
    }
    this.isempty = function () {
        return this.first == undefined;
    }

}
