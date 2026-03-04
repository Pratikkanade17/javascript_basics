// let age = prompt ("Enter your age")

// age = number(age)

// if (age < 18) {
//     alert("you get 20% disc")
        
//         }
//         else if (age >= 18 && age <= 65) {
//             alert("normal ticket price applied")
//             } 
//             else if (age > 65) {
//                 alert("you will get 30% senior disc")
//                 }
//                 else{
//                     alert("please eneter the valid age")
//                     }
                    
const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('Hello World')
})

app.listen(3000)
 