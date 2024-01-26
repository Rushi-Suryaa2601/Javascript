const express = require('express')
const app = express()
const port = 3000
const mongoose = require('mongoose');
const employee=require("./modules/employee");
const Employee = require('./modules/employee');
mongoose.connect('mongodb://127.0.0.1:27017/company');

app.set('view engine','ejs');

const getRandom=(arr) => { 
    let rno=Math.floor(Math.random()*(arr.length-1))
    console.log(rno)
    return arr[rno]
 }

app.get('/', (req, res) => {
  res.render('index',{foo:'Foo'});
})

app.get('/generate', async(req, res) => {
    //Clear al; the data
    await Employee.deleteMany({})
    //Generate random data
    let randomNames=['harry','Rohan','Rohit','Harpreet']
    let randomLnag=['python','java','C#','C']
    let randomCity=['Pune','Mumbai','Delhi']
    for (let index = 0; index <10; index++) {
        let e= await employee.create({
            name:getRandom(randomNames),
            salary:Math.floor(Math.random()*65000),
            language:getRandom(randomLnag),
            city:getRandom(randomCity),
            isManager:Math.random()>0.5?true:false
        })
        
        console.log(e)
        
    }

  res.render('index',{foo:'Foo'});
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})