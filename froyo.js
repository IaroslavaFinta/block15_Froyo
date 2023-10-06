// The user is prompted for froyo flavors upon entering the website
const userInput = prompt(
    "Please enter enter a list of comma-separated froyo flavors.",);

// The user's input string is split into an array of strings
const orderArray = userInput.split(",");

//The logic for counting the frequencies of elements in an array is organized into a function that returns an object
//@param {sortedArray[]} an array of flavors
//@returns {count} the object with counted flavors

function countOrders(orderArray) {

    //An object is used to keep count of how many orders there are of each flavor
    const count = {};

    // A loop is used to iterate through the array of flavors
    for (let flavor of orderArray) {
        if (count[flavor]) {
            count[flavor] += 1;
        } else {
            count[flavor] = 1;
        }
    }

    return count;
}

//Printing the orders
console.log(`Your order is: ${countOrders(orderArray)}`);

//strawberry, vanilla, chocolate, vanilla, cream

