// this is grade data in arrays
let studentGrades = [92, 78, 85, 95, 88];

//making sum first
let sum = 0;

// Calcuating average grade of all the student
for(let i = 0; i < studentGrades.length; i++){
    sum = sum + studentGrades[i];
}


// this is calculating the number
let averageMarks = sum / studentGrades.length;

console.log(`The average marks of students is ${averageMarks}.`)


// Finding the highest number
let n = studentGrades[0];
for(let i = 0; i < studentGrades.length; i++){
    if(n < studentGrades[i]){
        n = studentGrades[i];
    }
}
console.log(`THe highest number of all Grades is ${n}`)

// finding the lowest number
let k = studentGrades[0];
for(let i = 0; i < studentGrades.length; i++){
    if( k > studentGrades[i]){
        k = studentGrades[i];
    }
}
console.log(`The loweset number of all grades is ${k}`)

