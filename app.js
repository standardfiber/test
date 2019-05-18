/*
Instructions: Push a number to the end of an array.
1. Create array with numbers.
2. Create a function that takes a parameter arr and returns it.
3. Print the function to the console.
4. Add an item parameter to the function.
5. Push the item to the array.
6. Notice how the item is undefined.
7. Add a number argument to be pushed.
8. Stringify the results.
*/

let arr = [1, 2, 3, 4, 5];

function nextInArr(arr, item) {
  arr.push(item);
  return arr;
}

let results = JSON.stringify(nextInArr(arr, 6));

console.log(results);
