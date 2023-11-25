// const age=20;
// const age1=22;
// console.log(age+age1);

// console.log('hello ' + 'rushi');
// console.log("hello it's rushi");
// console.log(`hello it's me ${age}`);

// console.log(typeof age);


// <------If__else------->
// const age=10;

// if(age>18){
//     console.log("You are good to go");
// }
// else if(age===10)
// {
//     console.log("You are in child phase");
// }
// else{
//     console.log("Not this time...")
// }


// <------Arrays-------->
// const arr=[1,2,3,4,5,6];

// // console.log(arr[4]);


// // arr.push(7,8,9);  ----Add item in the end---
// // arr.pop();         ----remove last item----
// // arr.shift();       ----remove first item ----
// // arr.unshift(1);    ----add item in first index----
// // console.log(arr);
// console.log(`index is : ${arr.indexOf(3)}`);


// <-------Object & Keywords -------->
// const user={
//     name:'Rushi',
//     age:'24',
//     gender:'male',
//     purchase:['mobile','phone'],
//     sayName:function()
//     {
//         console.log(this.gender);
//     }
// };
// user.sayName();
// // console.log(user.purchase[0]);

// // console.log(this); //Get all methods name

// function apple(num1)
// {
//     const num2 = num1*num1;
//     console.log(num2);
//     console.log("apple");

// }

// apple(50);



// <---------- Loops --------->
const names=['rushi','rahul','yash','ganesh','sandy']
// for(i=0;i<6;i++)
// {
//     console.log(names[i]);
// }

// for(name of names)
// {
//     console.log(name);
//     if(name==='yash')
//     {
//         console.log('Found it');
//         break;
//     }
    
// }

// let i=0;
// while(i<=100)
// {
//     console.log(i);
//     i++;
// }


// <-------DOM Manipulation------>
// const text=document.querySelector(".title");
// const changecolor=document.querySelector(".changeColor");

// text.style.color="red";

// text.classList.add('change');
// text.classList.remove('change');

// changecolor.addEventListener("click",function()
// {
//     // text.classList.add('change');
//     text.classList.toggle('change');
// });

// const userlist=document.querySelectorAll(".namelist li");
// for(user of userlist)
// {
//     user.addEventListener('click',function(){
//         console.log(this);
//         this.style.color='red';
//     })
// }

const userlist=document.querySelector(".namelist");
const listinput=document.querySelector(".listinput");
const addlistbtn=document.querySelector(".addlist");
addlistbtn.addEventListener("click",function()
{
    // create on li out of thin air
    const newli=document.createElement('li');
    const licontent=document.createTextNode(listinput.value);

    // Add the input value inside that new li
    newli.appendChild(licontent);

    // Attaching the li to the user list
    userlist.appendChild(newli);
   
});

