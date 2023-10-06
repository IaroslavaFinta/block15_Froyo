// The user is prompted for froyo flavors upon entering the website
const userInput = prompt(
    "Please enter enter a list of comma-separated froyo flavors.",);

// The user's input string is split into an array of strings
const orderArray = userInput.split(",");

// //print each element of array and total count
// let totalCount = 0;
// for (let i = 0; i < orderArray.length; i++){
//     totalCount += 1;
//     console.log(orderArray[i]);
// }
// console.log("Total count is " + totalCount);

//sort array
// let sortedArray = orderArray.sort();
// for (let i = 0; i < sortedArray.length; i++){
//     console.log(sortedArray[i]);
// }

//The logic for counting the frequencies of elements in an array is organized into a function that returns an object
//@param {sortedArray[]} an array of flavors
//@returns {count} the object with counted flavors

const count = {};
//console.log("Line 27", count);

function countOrders(orderArray) {
// A loop is used to iterate through the array of flavors
for (let flavor of orderArray) {
    if (count[flavor]) {
        count[flavor] += 1;
    } else {
        count[flavor] = 1;
    }
}
//console.log(count);
console.log(`Your order is ${totalCount}: ${count}`);
}

//An object is used to keep count of how many orders there are of each flavor

countOrders(orderArray);

//Printing the orders
// console.log(`Your order is ${totalCount}: ${countOrders(sortedArray)}`);

//strawberry, vanilla, chocolate, vanilla, cream