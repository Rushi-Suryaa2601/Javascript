const express = require('express')
const app = express()
const port = 3000
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
    res.send('Hello World!')
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

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})