// Object And This Keyword ---->

// const userdata ={
//     name: "crush",
//     id:1718,
//     marks:79.74,
//     printmarks: function () {
//         console.log("Marks=",this.marks);
        
//     },
// }

// userdata.printmarks()

// Class ---->

// class toyotaCar {
//     constructor(brand){
//         console.log("creating new object");
//         this.brand= brand ;
        
//     }
//     start() {
//         console.log("start");
        
//     }
//     stop(){
//         console.log("stop");
        
//     }
// }

// let fortunar = new toyotaCar( "fortunar")
// fortunar.start()
// fortunar.stop()

// Inheritance ---->

// class person{
//     constructor(){

//     }
//     eat(){
//         console.log("eat daily");
        
//     }
//     sleep(){
//         console.log("sleep daily");
        
//     }
// }

// class doctor extends person{
//     constructor(branch){
//         super()
//         this.branch=branch;
//     }
//     work(){
//         console.log("daily work");
        
//     }
// }

// let myobj = new doctor()

// myobj.eat()
// myobj.sleep()
// myobj.work()


class Car {
  constructor(brand) {
    this.carname = brand;
  }
  present() {
    return 'I have a ' + this.carname;
  }
}

class Model extends Car {
  constructor(brand, mod) {
    super(brand);
    this.model = mod;
  }
  show() {
    return this.present() + ', it is a ' + this.model;
  }
}

let myCar = new Model("Ford", "Mustang");
// document.getElementById("demo").innerHTML = myCar.show();

console.log(myCar.present());
console.log(myCar.show());
 
