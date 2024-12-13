function manipulateArray(arr) {
    // Add a new string "VOLVO" to the end of the array
    arr.push("VOLVO");

    // Iterate over each element and convert each element to uppercase
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i].toUpperCase();
    }

    return arr;
}

// Example usage:
let myArray = ["apple", "banana", "cherry"];
let manipulatedArray = manipulateArray(myArray);
console.log(manipulatedArray); // Output: ["APPLE", "BANANA", "CHERRY", "VOLVO"]
