// constructor function
function Constructor() {
  //1st letter should be capital letter
  this.data = "store"; // this=>{}
}

//agar function ko call karte waqt new ka use kiya then think about a blank object in mind

new Constructor();

// jab bhi fn mai this hpga immidiate us blank obj ko yaad karke us jagah rakhdo

function Ghar() {
  (this.village = "keshiary"), (this.room = 5), (this.kitchen = 2);
}

let ghar1 = new Ghar();
console.log(ghar1);

//this is older version of creating obj when there was no class concept in js

class Toffee {
  //har class banaate hi pehli cheej jo banate hai uski aadat daal lo uska naam hai constructor
  constructor(taste, col, shape) {
    this.taste = taste;
    this.color = col;
    this.shape = shape;
  }
}
let t1 = new Toffee("Sweet", "Red", "Cube");
let t2 = new Toffee("Salt", "yello", "Cube");
let t3 = new Toffee("Spicy", "Green", "Cube");
