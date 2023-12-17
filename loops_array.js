let a=[1,93,5,6,88]
// for (let index = 0; index < a.length; index++) {
//     const element = a[index];
//     console.log(element)
    
// }

a.forEach((value,index,array)=>{
    console.log(value,index,array)
    //1 0 [ 1, 93, 5, 6, 88 ]
    // 93 1 [ 1, 93, 5, 6, 88 ]
    // 5 2 [ 1, 93, 5, 6, 88 ]
    // 6 3 [ 1, 93, 5, 6, 88 ]
    // 88 4 [ 1, 93, 5, 6, 88 ]

})

obj={
    a:1,
    b:2,
    c:3
}
for (const key in obj) {
    if(Object.hasOwnProperty.call(obj,key)){
        const element=obj[key];
        console.log(key,element)
    }
    /*  a 1
        b 2
        c 3*/
    
}

for (const iterator of a) {
    console.log(iterator)
    /*
    1
    93
    5
    6
    88
    */
}


let arr=[1,3,5,7,11,13]
// let newarr=[]
// for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];
//     newarr.push(element**2)
    
// }
// console.log(newarr)

let newarr=arr.map((e)=>{
    return e**2
})
console.log(newarr)

const greaterthanseven=(e)=>{
    if(e>7){
        return true
    }
    return false
}

console.log(newarr.filter(greaterthanseven))



let arr2=[1,2,3,4,5]

const red=(a,b)=>{
    return a*b
}
console.log(arr2.reduce(red)) //120  [1*2=2,2*3=6,6*4=24,24*5=120]

console.log(Array.from("RUSHIKESH"))  /*[
                                            'R', 'U', 'S',
                                            'H', 'I', 'K',
                                            'E', 'S', 'H'
                                        ]
                                        */
