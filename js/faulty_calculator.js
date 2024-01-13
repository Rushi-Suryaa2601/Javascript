// If the random number is less than 0.1 then it will give incorrect result otherwise it will give coreect result
let random=Math.random()
console.log(random)
let a=prompt("Enter First Number")
let b=prompt("Enter second Number")
let c=prompt("Enter operation")
let obj={
    "+":"-",
    "*":"+",
    "-":"/",
    "/":"**",
}
if(random>0.1)
{
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`)
    
}
else{
    c=obj[c]
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`)

}

