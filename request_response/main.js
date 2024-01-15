const express = require('express')
const birds = require('./routes/birds')
const app = express()
const port = 3000
app.use('/birds', birds)
app.use(express.static("public"))


// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

// app.post('/', (req, res) => {
//     console.log("get request")
//      res.send('Hello World post!')
// })

// app.put('/', (req, res) => {
//     console.log("get request put")
//      res.send('Hello World put!')
// })

// app.delete('/', (req, res) => {
//     console.log("get request delete")
//      res.send('Hello World delete!')
// })

// Second method to write
app.get('/', (req, res) => {
    res.send('Hello rushikesh!')
  }).post('/', (req, res) => {
      console.log("get request")
       res.send('Hello World post!')
  }).put('/', (req, res) => {
      console.log("get request put")
       res.send('Hello World put!')
  }).delete('/', (req, res) => {
      console.log("get request delete")
       res.send('Hello World delete!')
  })

app.get('/index',(req, res) => {
  console.log("get request index")
   res.sendFile('templates/index.html',{root:__dirname})
})

app.get('/api',(req, res) => {
  res.json({a:1,b:2,c:3,d:4})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})