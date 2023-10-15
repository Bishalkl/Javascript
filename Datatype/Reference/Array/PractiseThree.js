const color = ["Blue", "Red", "Green", "Yellow"];

// using for loop
for(let i = 0; i < color.length; i++){
    console.log(color[i]);
}
console.log("\n")
// for of loop
for(i of color){
    console.log(i);
}
console.log("\n")
// for each of loop
color.forEach(function(i){
    console.log(i);
});