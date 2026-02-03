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
// function loginUsername(username) {
//     if(username === undefined){
//         console.log("please enter username");
        
//         return 
//     }
//     return ` my user name is : ${username}`
// }

// console.log(loginUsername());

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// function with objects and Arrays -->

function calculatePrice (val1, ...num1){
    return num1
}

console.log(calculatePrice(200,100,300));

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const user = {      //Object
    name: "crush",
    age: 25,
    id: "ab01"
}

function handleObject(anyobject){   // function defination
    console.log(`my name is ${anyobject.name} and my age is ${anyobject.age}`); 
    

}

handleObject(user) //function call

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++

const myArray = [10,20,30]

function newFun(newArray){
    return newArray[1]

}
// console.log(newFun(myArray));
console.log(newFun([10,20,30]));


