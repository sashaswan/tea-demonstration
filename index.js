// Function to add two numbers
function add(a, b) {
    return a + b;
  }
  
  // Function to check if a number is even
  function isEven(num) {
    return num % 2 === 0;
  }
  
  // Function to convert Celsius to Fahrenheit
  function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
  }
  
  // Function to find the maximum of two numbers
  function max(a, b) {
    return a > b ? a : b;
  }
  
  // Function to calculate the factorial of a number
  function factorial(n) {
    if (n === 0 || n === 1) {
      return 1;
    }
    return n * factorial(n - 1);
  }
  
  // Function to reverse a string
  function reverseString(str) {
    return str.split('').reverse().join('');
  }
  
  // Function to check if a string is a palindrome
  function isPalindrome(str) {
    const reversed = reverseString(str);
    return str === reversed;
  }
  
  // Example usage:
  console.log(add(2, 3)); // Output: 5
  console.log(isEven(4)); // Output: true
  console.log(celsiusToFahrenheit(0)); // Output: 32
  console.log(max(10, 20)); // Output: 20
  console.log(factorial(5)); // Output: 120
  console.log(reverseString("hello")); // Output: "olleh"
  console.log(isPalindrome("racecar")); // Output: true
  