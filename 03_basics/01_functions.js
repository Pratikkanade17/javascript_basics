// function myName() {
//     console.log("p");
//      console.log("r");
//       console.log("a");
//        console.log("t");
//         console.log("i");
//          console.log("k");
    
// }

// myName();

// function addTwonumbers(num1, num2) {  //parameters
//     console.log(num1+num2);

    
// }

// addTwonumbers(3, 4); //arguments



// myName();

// function addTwonumbers(num1, num2) {  //parameters
//     // const result = num1+num2;
//     // return result;
//     return num1+num2;

    
// }

// const result = addTwonumbers( 3, 4); //arguments
// // console.log("result is :", result);

// function loginUsername(username) {
//     return ` my user name is : ${username}`
// }

// console.log(loginUsername("pratik"));

//********* to check undefine */
function loginUsername(username) {
    if(username === undefined){
        console.log("please enter username");
        
        return 
    }
    return ` my user name is : ${username}`
}

console.log(loginUsername());

