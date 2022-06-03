/*Given an array of ones and zeroes, convert the equivalent binary value to an integer.*/

const binaryArrayToNumber = arr => {
// Array, any length, always be 0 or 1
// Function to return a number

let binaryString = arr.join('')  // Use join method to make a string of the binary number
 let answer = parseInt(binaryString,2) // Use parseInt (x,2) to get reasult
  
 return answer
};
