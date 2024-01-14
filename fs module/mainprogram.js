import fs from "fs/promises"
let a=fs.readFile("rushi.txt")
let b=fs.appendFile("rushi.txt","\n\n\nrushi is good  boy")
console.log(a.toString())
console.log(b.toString())