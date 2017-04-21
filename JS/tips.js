使用sort()方法创建一个随机数组

function compare(){
    return Math.random() - 0.5;
}
var array = [1,2,3,4,5];
console.log(array.sort(compare));//[2,1,5,4,3]

var array = [3,111,2,4,5];

p(array.reduce(function(x,y){
  return x+y;
}));
p(array.reduce(function(x,y){
  return x > y ? x : y;
}))

name = 'global';
var obj = {
  name :'xf',
  arr:[1,2],
  print:function() {
    console.log("p:" + this.name);
    return this.arr.map(function(n){
       console.log("map:" + this.name);
       return n;
    },this)
    return this.arr.map(function(n){
       console.log("map:" + this.name);
       return n;
    })
  }
}

var t = obj.print();
console.log(obj.print());


function findLongestWord(str) { 
     var strSplit = str.split(' '); 
     return strSplit.reduce(function(longest, currentWord) { return Math.max(longest, currentWord.length) }, 0);
}

//数组顺序扰乱
作者： IT程序狮 

function shuffle(array) { 
    var copy = [], n = array.length, i; // 如果还剩有元素则继续。。。 
    while (n) { // 随机抽取一个元素 
    i = Math.floor(Math.random() * array.length); // 如果这个元素之前没有被选中过。。 
    if (i in array) { 
        copy.push(array[i]); delete array[i]; 
        n--; 
    } 
}



function shuffle(array) { 
    var copy = [], n = array.length, i; // 如果还剩有元素。。 
    while (n) { // 随机选取一个元素 
        i = Math.floor(Math.random() * n--); // 移动到新数组中 
        copy.push(array.splice(i, 1)[0]); 
    } 
    return copy; 
}
