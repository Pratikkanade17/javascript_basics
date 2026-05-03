// console.log("hello guyz");
// console.dir(window.document)

// let headings = document.getElementsByClassName("child")
// console.dir(headings)
// console.log(headings);


// let parah = document.getElementsByTagName("p")
// console.dir(parah)

// let element = document.querySelector("p")
// console.dir(element)

// let element = document.querySelectorAll("p")
// console.dir(element)

// let myEle = document.querySelectorAll(".child")
// console.dir(myEle)

// console.dir(document.body.firstChild)

// let div = document.querySelector("div")
// console.dir(div)

// let parah = document.querySelector("p")
// console.dir(parah.innerText)

// parah.innerText= parah.innerText + "- i have changed this paragraph" // I have concanet two strings using +

// let divs = document.querySelectorAll(".child")
// // console.dir(newEle)
// // console.log(newEle);

// // divs[0].innerText = "this is my firts box" // To chnage innertext of first box

// let idx = 1;

// for (div of divs){
//     div.innerText = `new box No. ${idx}`
//     idx++

// }

// let para = document.querySelector("p")
// console.log(para.getAttribute("class"));

// let para = document.querySelector("p")
// console.log(para.setAttribute("class", "newClass"));    

let div = document.querySelectorAll(".child")
 

div.forEach(function(item) {
    item.style.backgroundColor = "red";
});
