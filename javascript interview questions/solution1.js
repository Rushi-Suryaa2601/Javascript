// The Magical Sorting Hat: Imagine you are creating a magical sorting hat for a wizard school. Implement a JavaScript function that takes an array of student names and assigns them to one of the four houses (Gryffindor (length less than 6), Hufflepuff(length less than 8), Ravenclaw(length less than 12), or Slytherin(length greater than or equal to 12)) based on the length of their names.

names=['rushikesh','rahul','om','denial','Jonny','muttuswami','venkatarai','Muttuswamivankatarai']

homes=[]
for (const name of names) {
    if(name.length<6){
        homes.push("Gryffindor")
    }
    else if(name.length<8)
    {
        homes.push("Hufflepuff")
    }
    else if(name.length<12)
    {
        homes.push("Ravenclaw")
    }
    else{
        homes.push("Slytherin")
    }

    
}

console.log(homes)
