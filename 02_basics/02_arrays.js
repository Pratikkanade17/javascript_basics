const marval_Heroes = ["thor","ironman","hulk"]
const dc_Heroes = ["superman","batman","wonderwomen"]

// marval_Heroes.push(dc_Heroes)
// console.log(marval_Heroes);


// console.log(marval_Heroes[1][2]);

// const all_Heroes = marval_Heroes.concat(dc_Heroes)
// console.log(all_Heroes);

// const all_new_heroes = [...marval_Heroes, ...dc_Heroes] // same as like concat
// console.log(all_new_heroes);

// const another_array = [0,1,2,[1,2,[4,5,6,7]]]
// const real_another_array = another_array.flat(Infinity) 
//  /* output-
//  [
//   0, 1, 2, 1, 2,
//   4, 5, 6, 7
// ] */

// console.log(real_another_array);


console.log(Array.isArray("pratik")); // false
console.log(Array.from("pratik"));   // [ 'p', 'r', 'a', 't', 'i', 'k' ]
console.log(Array.from({name : "pratik"})); //[]

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));





