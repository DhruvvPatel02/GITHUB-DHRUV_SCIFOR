function reverseAndSortArray(arr) {
    // Step 1: Reverse the order of elements in the array
    let reversedArray = arr.reverse();
    
    // Step 2: Sort the reversed array in alphabetical order
    let sortedArray = reversedArray.sort();
    
    return sortedArray;
}

// Example 
const inputArray = ['z', 'd', 'a', 'c', 'b'];
const result = reverseAndSortArray(inputArray);
console.log(result);  // Output: ['a', 'b', 'c', 'd', 'z']
