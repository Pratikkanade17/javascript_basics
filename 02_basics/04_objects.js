const newtinderUser = new object() //singleton object
const tinderUser = {} // non-singleton object 

tinderUser.email = "p14@.com"
tinderUser.id = 123
tinderUser.no = 18

console.log(tinderUser);

const regularUser = {
    email: "p18@gmail.com",
    fullname: {
        userName: "crush01",
        middle: "u",
        lastName: "to"
    }
}

console.log(regularUser.fullname);

const obj1 = {a: "1", b: "2" }
const obj2 = {d: "1", c: "2"}

// const obj3 = {obj1, obj2}
// console.log(obj3);

// const obj4 = Object.assign ({ }, obj1, obj2)
const obj4 = {...obj1, ...obj2}
console.log(obj4);

// array of object

const user = [
    {
        name : "pratik",
        email : "pratik01@gmail.com",
        no : 96645

    },
    {
        pin : 414402,
        city : "pune"
    },
    {

    }
]

// user[1].email
