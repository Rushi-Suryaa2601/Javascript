console.log("This is string tutorial")
let a="harry"
console.log(a)
console.log(a[0])
console.log(a[2])

console.log(a.length)

let my_name="Rushi"
let friend="Rahul"
console.log("Hello my name is " + my_name +" and my friend name is " + friend)
console.log(`Hello my name is ${my_name}  and my friend name is ${friend}`)


let b="Hello"
console.log(b.toLowerCase())
console.log(b.toUpperCase())

// string slicing
console.log(b.slice(1,5))
console.log(b.slice(1))

// replace
console.log(b.replace("Hello","Rushi"))

console.log(b.concat(a))


// for remove whitespaces
let c="hello   rushi   "  //hello   rushi
console.log(c.trim())
console.log(c.startsWith("hell"))