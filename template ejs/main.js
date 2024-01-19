//https://github.com/mde/ejs/wiki/Using-EJS-with-Express

const express = require('express')
const app = express()
const port = 3000



app.get('/', (req, res) => {
    let blogTitle="Adidas why and when?"
    let blogConatent="Its a very good brand"
    let search="Search Now"
    let arr=["rushi",100,200]
    res.render("index.ejs",{blogTitle:blogTitle,blogConatent:blogConatent,search:search,arr})
  
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})