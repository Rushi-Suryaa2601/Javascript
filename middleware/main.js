
const express = require('express')
const app = express()
const port = 3000
const fs=require("fs")
//Middleware Modify Our request

// Middleware 1
app.use((req,res,next)=>{
    req.rushi="I am rushikesh!" //I can access in any path go to about
    fs.appendFileSync("logs.txt",`${Date.now()} is a ${req.method}\n`)
    next()
})

//Middleware 2
app.use((req,res,next) => { 
    console.log("Middleware 2")
    // res.send("Hello Rushi") //This will stop the middleware but do not write next() method
    next()
 })

app.get('/', (req, res) => {
  res.send('Hello Rushikesh!')
})

app.get('/about', (req, res) => {
    res.send('Hello User! ' + req.rushi)
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})