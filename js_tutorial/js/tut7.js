console.log('I am focusing in programming.');
let marks = [89,90,78,67,77];
const food = ['Mango','Rice','Potato'];
const mixed = ['str',89,[8,7,5]];

const arr = new Array(88,55,34,'Meat');
// console.log(arr);
// console.log(mixed);
// console.log(food[2]);
// console.log(marks)

// console.log(arr.length)
// console.log(Array.isArray(food)) //true value as it is array
// console.log(Array.isArray('masu')) //false value is string

// arr[0] = 'harry';
// let arrelement = arr[0];
// console.log('element:', arrelement)
// console.log(arr);

// let value = marks.indexOf(34);
// console.log(value);

// Mutating or Modifying Array
// marks.push(612) // elments insert at last
// marks.unshift(123) // elements at first insert
//  marks.pop() // removes alements from last
// marks.shift() // removes elements from first
// marks.splice(1,3) // removes elements from index 1 to index 3
// marks.reverse();
let marks2 =[3,5,6,7]
marks = marks.concat(marks2) 
// console.log(marks)

let myobj = {
    name: 'harry',
    channel:'codehack',
    marks: [2,3,4,5]
}

console.log(myobj)
console.log(myobj['marks'])
console.log(myobj.marks)
