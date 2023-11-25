console.log("Welcome! in javascript")
var b=5
var c="Rushi"
var _c="Rahul"
// var 55a="Rahul" This is not valid
console.log(typeof a,typeof c)
console.log(a+b)


// Var is globally scoped
// let and const are block scoped

// const a1=6
// a1=a1+6  this is not allowed beacuse this is constant
var a=6
{
    let a=66
    console.log(a)

}
console.log(a)

let x="Rushi";
let y=22;
let z=3.55;
const p=true;
let q=undefined;
let r=null;

console.log(x,y,z,p,q,r)
console.log(typeof x,typeof y,typeof z,typeof p,typeof q,typeof r)

let O ={
    "name": "Rushi",
    "job code":102,
    "is_handsome":true,
}
console.log(O)
O.salary=50000
console.log(O)
