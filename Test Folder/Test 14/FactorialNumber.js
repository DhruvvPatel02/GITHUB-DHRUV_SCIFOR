function factorial(n) { 
    if (n === 0 || n === 1) { 
        return 1; 
    } else { 
        return n * factorial(n - 1); 
    } 
} 
let num = 6; 
let result = factorial(num); 
console.log("The factorial of given number is :" + result);