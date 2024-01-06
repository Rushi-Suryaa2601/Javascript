// The Double Trouble: You are tasked with writing a function that doubles each element in an array. However, there's a catch: if the array contains consecutive duplicate elements, only double one of them.

function doubleTrouble(arr){
    for(let i=0;i<arr.length-1;i++){
        if(arr[i]===arr[i+1]){
            arr[i]*=2;
            i++;
        }
        else{
            arr[i]*=2;
        }
    }
    if(arr.length>1 && arr[arr.length-1]!==arr[arr.length-2]){
        arr[arr.length-1]*=2;
    }
    return arr;
}


const inputarray=[2,5,7,8,8,9,5,5,7,8,9,8,9,8,9,8]
const result=doubleTrouble(inputarray)
console.log(result)