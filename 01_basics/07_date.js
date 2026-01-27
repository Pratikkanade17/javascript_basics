let myDate = new Date()
console.log(myDate);

console.log(myDate.toString());
console.log(myDate.toLocaleString);
console.log(myDate.toDateString);
console.log(typeof myDate);

let myCreateDate = new Date(2026, 0, 26, 6, 41)
console.log(myCreateDate); //2026-01-26T06:41:00.000Z
console.log(myCreateDate.toLocaleString()); //1/26/2026, 6:41:00 AM

let myNewCreateDate = new Date("01-27-2026") //(mm/dd/yyyy)
console.log(myNewCreateDate); //2026-01-27T00:00:00.000Z
console.log(myNewCreateDate.toLocaleString()); //1/27/2026, 12:00:00 AM

let myTimeStamp = Date.now()
console.log(myTimeStamp);

let newDate = new Date()
console.log(newDate.getFullYear());//2026
console.log(newDate.getMinutes());
console.log(newDate.getDay());//2






