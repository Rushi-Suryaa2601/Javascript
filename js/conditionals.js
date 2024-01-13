console.log("Conditional Tutorial")
let age=18
console.log("3"===3) //return false because it compare value and type
console.log("3"==3) //return true because it compare only value.

if(age!=18)
{
    console.log("You can drive")
}
else if(age==0){
    console.log("Are You kidding")
}
else{
    console.log("You cannot drive")
}

let a=6
let b=8
let c=a>b ?(a+b):(b-a)  //The conditional (ternary) operator is the only JavaScript operator that takes three operands: a condition followed by a question mark (?), then an expression to execute if the condition is truthy followed by a colon (:), and finally the expression to execute if the condition is falsy. This operator is frequently used as an alternative to an if...else statement.
console.log(c)
