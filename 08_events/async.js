// setTimeout(function() {
//     console.log("pratik");
// }, 2000);

// const { reject } = require("async");


// function getData(dataId, getNextData){
//     setTimeout(function(){
//         console.log("data", dataId);
//         if(getNextData){
//             getNextData();
//         }
        
//     },2000);
// }

// // // Callback Hell 
// getData(1,function(){
//     console.log("getting data 1");
    
//     getData(2, function(){
//         console.log("getting data 2");
//         getData(3,function(){
//             console.log("getting data 3");
//             getData(4,function(){
//                 console.log("getting data 4");
//             })
//         })
//     }
//     );
// });

// let myPromise = new Promise(function(resolve, reject) {
//     let success = true;

//     if (success) {
//         resolve("Task completed successfully!");
//     } else {
//         reject("Task failed!");
//     }
// });

// // Consuming the promise
// myPromise
//     .then(function(result) {
//         console.log(result);   // if resolved
//     })
//     .catch(function(error) {
//         console.log(error);    // if rejected
//     });



// setTimeout(myFunction,2000)

// function myFunction(){
//     console.log("my name is crush");
    
// }


// let result;

// setTimeout(function() {
//   result = 5;
// }, 1000);

// console.log(result);       // undefined output

// let result = 5;

// setTimeout(myFunction,2000)
// function myFunction(){
//     console.log(result," is my result");
    
// }

// OR Both Are Same

// let result = 5;

// setTimeout(function myFunction(){
//     console.log(result," is my result");
    
// },2000)


// let promise = new Promise ((resolve,reject)=>{
//     console.log("promise created");
//     resolve("issue resolved")
// })

// const promiseOne = new Promise(function(resolve,reject){
//     setTimeout(function() {
//         console.log("async task completed");
//         resolve()
        
//     }, 1000);
    
// })

// promiseOne.then(function(){
//     console.log("promise consumed");
    
// })

// // OR

// new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("second async task completed");
//         resolve()
        
//     },1000);
// }).then(function(){
//     console.log("promise consumed again");
// })


// const promiseThree = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log("creating first object");
//         resolve({ name: "pratik", id: 17 });
//     }, 2000);
// });

// promiseThree.then((user) => {
//     console.log(user);
// });


// const promiseFour = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         let error=true
//         if(!error){         //!error shows error nahi hai 
//             resolve({ username: "pratik", id: 17 })
//             console.log("error resolve");
//         }
//         else{
//             reject('ERROR:something went Wrong')
            
//         }
//     },2000)
// })

// promiseFour.then((user)=>{
//     console.log(user);
//     return user.username
// }).then((username)=>{
//     console.log(username);
// }).catch((error)=>{
//     console.log(error);
    
// }).finally(()=>{
//     console.log("promise is either resolved or reject");
    
// })

// Async Await ------------------------------------------->
// Example 1
/*const promiseFive = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        let = error =true
        if(!error){
            resolve({username:"crush",id:18})
            console.log("issue resolved");
        }
        else{
            reject("ERROR: Error Occures")
        }
    },1000)
})

async function consumPromiseFive(){
    try{
        let responce = await promiseFive
        console.log(responce);
        
    }catch(error){
        console.log(error);
        
    }
}
consumPromiseFive() */

// Example 2 -------------------------------------------->

function getData(getId){
    return new Promise ((resolve,reject)=>{
        setTimeout (()=>{
            console.log(getId);
            resolve("success")
        },1000)
    })
}

async function allData() {
    console.log("getting data 1..");
    await getData(1);
    
}