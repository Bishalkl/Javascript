// const collection = [1,2,3,4,5,6,7,8,9,10];

// // console.log(collection.length) // fof it is to get a length of index of arryas 
// // console.log(collection,[collection.arrays]) // this is for to get a length and also data of arryas

// // push this is to add the data in end of the arrays 
// // collection.push(10);
// // console.log(collection)

// //unshift this for to add the data in start of the arrays 
// // collection.unshift(0);
// // console.log(collection,[collection.length])

// // pop  this for to remove last value and and return the last value after remove the value 
// // collection.pop()
// // console.log(collection,[collection.pop()])

// //shift is opposite of unshift , it is for to remove first elemnt of arrays 
// // console.log(collection,[collection.shift()])

// // change the value of arrays according to index
// // collection [0] = 12;
// // console.log(collection)

// // 
// const names = ["Bishal", "kapil", "roshan", "Bishnu", "abijeet", "Bikash","kapil"];
// // console.log(name)

// // to get a index of value 
// // console.log(names.indexOf("kapil")) indexOf is use to get the index value where it is located 

// // get calcu using to end of index
// // console.log(names.indexOf("kapil",2)) have to be same value 

// // lastIndex of is same but from last 
// // console.log(names.lastIndexOf("kapil", 5))

// // includes is use to know that value is exist or not if exist it will return true and otherwise false
// // console.log(names.includes("kapil",3))

// // using find method
// // this is used for object and also primitive datatype because include method doesn't work in reference data type

// const Student = [
//                 {
//                    name: 'Bishnu',
//                    age: 20
//                 },

//                 {
//                    name: 'Bishal',
//                    age: 20
//                 },

//                 { 
//                    name: 'Roshan',
//                    age: 21
//                 },
//                 { 
//                    name: 'kapil',
//                    age: 22
//                 }
//                 ];
// // using arrow function for it 
// console.log(Student.find(elements => elements.age === 20));

// console.log(names.find(elements => elements === "kapil"));

// concat method , it is used to add the arrays
const a = [1,2,3,4,5,6];
const b = [7,8,9,10,11,12];

// const c = a.concat(b); it is old method
// there is called spread operater to add the value
const c = [...a,...b]; // es6 
console.log(c)

console.log(c.slice(6,12)) 

// for loops
for(let i = 0; i < c.length; i++){
    if(c[i] % 2 == 0){
        console.log(c[i]);
    }
}

// for of loops
let e = 0; // let because i have to change it value 
for(let i of c){
    e = i + e;
}
console.log(e)

// For each loop
let g = 0;
c.forEach(function(i,index){
    if(i % 2 == 0){
        g = i + g;
        console.log(i,index);
    }
})
console.log(g);


// Join method
let Name = ['B', 'i', 's', 'h', 'a', 'l'];
console.log(`My name is ${Name.join('')}.`);


// split method

let add = "Komal";
console.log(add.split(''));

// filter method
const number = [4,10,3,2,7,6,5,8,9,1];
const even_number = number.filter(elements => elements % 2 == 0);  
// using arrow function
console.log(even_number)

// sorting into ascending order
const asc_order = number.sort(function(a,b){
    return a - b;
 });

// map method use for to double each number of arrays
const doubled_number = asc_order.map( x => x * 2);

console.log(doubled_number);

 