// ************* Object literals and methods in Js**************

// let user = {
//     name: 'pratik',
//     age: 26,
//     singedin: true,

//     myuserdetail: function() {                      //myuserdetail is a method. 
//     // What is a Method?
//     // A method is simply a function inside an object.
//     // So here: 
//     // user → object 
//     // myuserdetail → method (function of the object)
//     console.log('got user details from database');
    
//  }

// }


// console.log(user.name);
// console.log(user.myuserdetail());

// ******* use of this keyword in method*************

let user = {
    name: 'pratik',
    age: 26,
    singedin: true,

    myuserdetail: function() {                     
    // console.log('got user details from database');
    // console.log(`my username is ${this.name}`);
    console.log(this);
    
    
 }

}


console.log(user.name);
console.log(user.myuserdetail());