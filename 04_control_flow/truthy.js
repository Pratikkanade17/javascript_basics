const email = []

if (email) {
    console.log("email is valid");
    
} else {
    console.log("email is not valid");
    
    
}

// falsy values 
// 0, -0, 0n BigInt zero, ""  empty string, null, undefined, NaN

// truthy values
// "0", "false", [], {}, function(){}, true, 1, -1, 3.14, infinity, -infinity, 0.1, 0.0000000000000001, -0.0000000000000001


if (email.length === 0) {
    console.log("array is empty");
}
    
    