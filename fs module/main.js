const fs=require("fs")
// console.log(fs)

// fs.writeFileSync("rushi.txt","Hello Rushi!")
console.log("starting")
fs.writeFile("rushi2.txt","Hello Rushi2!",() => { 
    console.log("done")
    fs.readFile("rushi.txt",(error,data
        ) => { 
            console.log(error,data.toString())
         })
         
         fs.appendFile("rushi2.txt","i am so happy.",(e,d) => { console.log(d) })
        })
 console.log("Ending")