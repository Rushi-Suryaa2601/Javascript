const express = require('express')
const app = express()
const port = 3000

//Static files handling
app.use(express.static('public'))  //http://localhost:3000/hello.txt
app.use('/static',express.static('public'))   //http://localhost:3000/static/hello.txt
 
//app.get,app.post,app.delete
app.get('/', (req, res) => {
  res.send('Hello World4!')
})

app.get('/about', (req, res) => {
  res.send('Hello About!')
})

app.get('/blog', (req, res) => {
  res.send('Hello blog!')
})


// app.get('/blog/intro_to_py', (req, res) => {
//     //logic to fetch intro
//   res.send('Introduction')
// })

// app.get('/blog/intro_to_js', (req, res) => {
//     //logic to fetch intro
//   res.send('Introduction')
// })

app.get('/blog/:slug', (req, res) => {
        //logic to fetch intro
        //for url : http://localhost:3000/blog/javascript?mode=dar&regoin=in
        console.log(req.params) //Will output  { slug: 'javascript' }
        console.log(req.query) //{ mode: 'dar', regoin: 'in' }
      res.send(`hello ${req.params.slug}`)
    })



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})