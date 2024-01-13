console.log("Loop tutorial")

// For Loop
let a=1
for (let index = 0; index <10; index++) {
    console.log(a+index)
    
}


// for_in
let obj={
    name:"rushi",
    course:"js"
}
for (const key in obj) {
    const element=obj[key];
    // console.log(key,element)
    // console.log(element)   It will only key value
}


// forof
for (const iterator of "Rushi") {
    console.log(iterator)
    
}

// While loop
let i=0
while (i<6) {
    console.log(i);
    i++;
    
}

//Do while loop
let x=10;
do {
    console.log(x);
    x++;
} while (x<6);