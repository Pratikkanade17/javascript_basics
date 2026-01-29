//  singleton 

// Objects Literals

const jsUser = {
    name : "pratik",
    no : 18,
    email : "pratikk@17.com"

}

console.log(jsUser.email);
console.log(jsUser["email"]);
jsUser.email= "crush@07.com"
console.log(jsUser);

jsUser.greeting = function(){
    console.log("hello js user");
    
}

console.log(jsUser.greeting);

jsUser.greeting2 = function(){
    console.log(`hello js user, ${this.name}`);
    
}
console.log(jsUser.greeting2);





