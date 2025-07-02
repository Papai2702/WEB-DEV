/*
function Toffe(name){
    this.name=name
    this.price='10'
}
*/
//agar kisi chiz jo har object mai same hoga aisa kuch function mai hai then usse constructor k andar nhiu likhna chahiye  uske liye prototype use hoga.

function Toffe(name) {
  this.name = name;
}
Toffe.prototype.price = 10;
let t1 = new Toffe("Cadberry");
let t2 = new Toffe("Dairymilk");
let t3 = new Toffe("KitKat");

