// const myNums = [1,2,3,4,5,6,7,8,9,10]

// const newNums = myNums.filter( (num) => {    // IMP - if we open scope, so we have to type return.
//     return num > 4
// } )
// console.log(newNums);

// ++++++++++++++++++++++++++++++++++++++++++++++++++++

const myNums = [1,2,3,4,5,6,7,8,9,10]

const newNums = myNums.forEach( (num) => {
    return num > 4
} )
console.log(newNums);                          //This is just example to show foreach does not return anything.


