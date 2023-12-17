let arr=[1,2,3,4,5,6]
console.log(arr,typeof(arr))
console.log(arr.length)

console.log(arr[2])
arr[0]=5454;
console.log(arr)

// Strings are immutable but arrays are mutable.
console.log(arr.toString())

console.log(arr.join(" and ")) //5454 and 2 and 3 and 4 and 5 and 6

arr.push(100)
console.log(arr)

arr.pop(100)
console.log(arr)

arr.shift()
console.log(arr)

arr.unshift(500)
console.log(arr)

arr.pop(100)
console.log(arr)

console.log(arr.length)


let a1=[1,2,3]
let a2=[4,5,6]
let a3=[8,0,0]

console.log(a1.concat(a2,a3))

let b=[4,7,2,4,9,0]
console.log(b.sort())

let c=[5,6,7,8,9,0]
console.log(c.splice(1,3)) //array.splice(index, howmany, item1, ....., itemX)
console.log(c)


let d=[100,99,98,97]
console.log(d.reverse())



