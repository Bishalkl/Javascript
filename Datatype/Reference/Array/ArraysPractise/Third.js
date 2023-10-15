// data of fruits
let fruitBasket = ["apple", "banana", "kiwi", "strawberry", "orange"];

// Sort the fruits in alphabetical order and display the sorted list.
fruitBasket.sort();

// display sorted list
for(let i = 0; i< fruitBasket.length; i++){
    console.log(fruitBasket[i]);
}

//Find and print the index of "Kiwi" in the array.
console.log(`The index of kiwi is ${fruitBasket.indexOf("kiwi")}`)