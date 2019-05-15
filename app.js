// function outer() {
//   var b = 10;

//   function inner() {
//     var a = 20;
//     return a + b;
//   }
//   return inner();
// }

// console.log(outer());

let a = 100;
let hello;

function b() {
  hello = 'Hello';
  return a;
}

console.log(b());
console.log(hello);
