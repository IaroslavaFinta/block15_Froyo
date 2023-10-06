// The user is prompted for froyo flavors upon entering the website
const userInput = prompt(
    "Please enter enter a list of comma-separated froyo flavors.",);

// The user's input string is split into an array of strings
const orderArray = userInput.split(",");

const count = {};

// A loop is used to iterate through the array of flavors
for (let flavor of orderArray) {
    if (count[flavor]) {
        count[flavor] += 1;
    } else {
        count[flavor] = 1;
    }
}

console.log(count)



