function formatString(input) { 
    if (typeof input !== 'string') { 
        return 'Input must be a string.'; 
    } 

    // Convert the entire string to uppercase 
    const upperCaseString = input.toUpperCase(); 
        
    // Convert the entire string to lowercase 
    const lowerCaseString = input.toLowerCase(); 
        
    // Extract a substring from index 2 to 5 
    const subString = input.substring(2, 6); // end index is exclusive 
        
    return { 
        upperCaseString: upperCaseString, 
        lowerCaseString: lowerCaseString, 
        subString: subString 
    }; 
} 
    
// Example usage: 
const inputString = "Thisismylasttest";
const result = formatString(inputString); 
console.log(result);