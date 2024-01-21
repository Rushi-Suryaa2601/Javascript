use("CrudDb")

//<---------CREATE------->
// console.log(db)
// db.createCollection("Courses")

// db.Courses.insertOne({
//     name:"Crud operations",
//     price:5000,
//     project:45
// })

// db.Courses.insertMany(
//     [
//         {
//             "name": "Document1",
//             "price": 1000,
//             "project": 1
//         },
//         {
//             "name": "Document2",
//             "price": 2000,
//             "project": 2
//         },
//         {
//             "name": "Document3",
//             "price": 3000,
//             "project": 3
//         },
//         {
//             "name": "Document4",
//             "price": 4000,
//             "project": 4
//         },
//         {
//             "name": "Document5",
//             "price": 5000,
//             "project": 5
//         }
//     ]
// )


//<---------READ------->
// let a=db.Courses.find({price:5000})
// console.log(a)
// console.log(a.toArray())
// console.log(a.count())

// let b=db.Courses.findOne({price:5000})
// console.log(b)


//<---------UPDATE------->

// db.Courses.updateOne({
//     price:5000},{$set:{price:4500}})

// db.Courses.updateMany({
//     price:5000},{$set:{price:4500}})


//<---------DELETE------->

db.Courses.deleteOne({project:45})
db.Courses.deleteMany({project:45})
