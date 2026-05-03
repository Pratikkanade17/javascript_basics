// const PromiseOne= new Promise(function(resolve, reject) {
//     // Do some async tasks
//     // DB calls, Cryptography, Network calls
//     setTimeout(function(){
//         console.log("IM here");
//         resolve();

//     }, 2000);
    
// })

// PromiseOne.then(function(){
//     console.log("Promise consumed");
    
// })

// const PromiseTwo= new Promise(function(resolve, reject) {
//     setTimeout(function(){
//         console.log("IM here");
//         resolve();

//     }, 2000);
    
// }).then(function(){
//     console.log("Promise consumed");
    
// })

// const PromiseThree= new Promise(function(resolve, reject) {
//     setTimeout(function(){
//         console.log("My Details is here");
//         resolve({name: "pratik", age: 26});

//     }, 2000);
    
// }).then(function(user){
//     console.log(user);
    
// })


// const PromiseFour = new Promise(function(resolve, reject) {
//     setTimeout(function(){
//         let error = true;
//         if (!error) {
//             resolve({name: "pratik", age: 26});
            
//         } else {
//             reject("something went wrong")
//         }
         

//     }, 2000);
    
// }).then(function(user){
//     console.log(user);
//     return user.name;
    
// }).catch(function(error){
//     console.log(error);
    
// }).finally(() => (console.log("the promise is either resolved or reject")
// ))


// const PromiseFive = new Promise(function(resolve, reject) {
//     setTimeout(function(){
//         let error = true;
//         if (!error) {
//             resolve({name: "pratik", password: 26});
            
//         } else {
//             reject("something went wrong")
//         }
         
//     }, 2000);
// })

// async function PromiseFiveConsume() {
//     try {
//        const response = await PromiseFive
//        console.log(response);
       
//     } catch (error) {
//         console.log(error);
//     }
    
// }
// PromiseFiveConsume()
