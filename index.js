// problem 1 : Create a function that takes a string as input and returns the reversed version of the string without using the built-in reverse() method. 
function stringReverser(string) {
    let reversedStr = " ";
    for (let i = string.length - 1; i >= 0; i--) {
      reversedStr += string[i];
    }
    return reversedStr;
  }
  
  const myString = "Mursalin Hossain";
  const result1 = stringReverser(myString);
console.log(result1);
// output :  niassoH nilasruM

// problem 2 : Create a function that takes an array of numbers as input and returns the sum of all positive numbers in the array. 
function sumPositiveNumbers(arr) {
    let sum = 0;
    for (let num of arr) {
      if (num > 0) {
        sum += num;
      }
    }
    return sum;
  }
  
  // Test with different numbers
  const numbers = [5, -12, 8, -4, 15, -7];
console.log(sumPositiveNumbers(numbers));
   // Output: 28

  // problem 3 : Write a JavaScript program to find the most frequent element in an array and return it. 

function findMostFrequentElement(arr) {
  const frequency = {};
  let maxFrequency = 0;
  let mostFrequentElement;

  for (let num of arr) {
    frequency[num] = (frequency[num] || 0) + 1;
    if (frequency[num] > maxFrequency) {
      maxFrequency = frequency[num];
      mostFrequentElement = num;
    }
  }

  return mostFrequentElement;
}

// Test with different numbers
const numbers1 = [1, 3, 7,5, 3, 8, 7,2, 2, 5, 3, 7, 7, 7];
console.log(findMostFrequentElement(numbers1));
// Output: 7

// problem 4 : Create a function that takes a sorted array of numbers and a target value as input.
//The function should find two numbers in the array that add up to the target value.Return an array containing the indices of the two numbers.

function findTwoNumbersWithSum(arr, target) {
    let left = 0;
    let right = arr.length - 1;
  
    while (left < right) {
      const sum = arr[left] + arr[right];
      if (sum === target) {
        return [left, right];
      } else if (sum < target) {
        left++;
      } else {
        right--;
      }
    }
  
    return [];
  }
  
  // Test with different sorted array and target sum
  const sortedNumbers = [-5, -3, 0, 4, 7, 12];
  const targetSum = 4;
console.log(findTwoNumbersWithSum(sortedNumbers, targetSum));
  // Output: [1, 4]
 // problem 5 : Implement a simple JavaScript calculator. The calculator should take two numbers and an operator (+, -, *, /) as input and return the result of the operation.
 function calculator(num1, operator, num2) {
    switch (operator) {
      case "+":
        return num1 + num2;
      case "-":
        return num1 - num2;
      case "*":
        return num1 * num2;
      case "/":
        if (num2 === 0) {
          return "Error: Division by zero";
        }
        return num1 / num2;
      default:
        return "Invalid operator";
    }
  }
  
  // Test with different numbers
  console.log(calculator(10, "+", 5)); // Output: 15
  console.log(calculator(20, "*", 3)); // Output: 60
  console.log(calculator(100, "/", 4)); // Output: 25
  console.log(calculator(15, "-", 8)); // Output: 7
  console.log(calculator(10, "/", 0)); // Output: "Error: Division by zero"
  console.log(calculator(7, "%", 3)); // Output: "Invalid operator"
  
  // problem 6 : Create a program that generates a random password of a specified length. The password should include a mix of uppercase letters, lowercase letters, numbers, and special characters.
  function generateRandomPassword(length) {
    const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const specialCharacters = "!@#$%^&*()_-+=[]{}|;:,.<>?";
  
    const allCharacters =
      uppercaseLetters + lowercaseLetters + numbers + specialCharacters;
  
    let password = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * allCharacters.length);
      password += allCharacters.charAt(randomIndex);
    }
  
    return password;
  }
  
  // Test
  const passwordLength = 12;
console.log(generateRandomPassword(passwordLength));
  
 // problem 7 :Implement a function that converts a Roman numeral to an integer. The function should take a Roman numeral string (e.g., "IX" or "XXI") as input and return the corresponding integer value.
 function romanToInteger(roman) {
    const romanNumerals = {
      I: 1,
      V: 5,
      X: 10,
      L: 50,
      C: 100,
      D: 500,
      M: 1000,
    };
  
    let result = 0;
  
    for (let i = 0; i < roman.length; i++) {
      const currentNumeralValue = romanNumerals[roman[i]];
      const nextNumeralValue = romanNumerals[roman[i + 1]];
  
      if (nextNumeralValue > currentNumeralValue) {
        result += nextNumeralValue - currentNumeralValue;
        i++; // Skip the next numeral since we already used it in subtraction
      } else {
        result += currentNumeralValue;
      }
    }
  
    return result;
  }
  
  // Test with a different Roman numeral
  console.log(romanToInteger("XL")); // Output: 40
  
   // problem 8 :  Implement a JavaScript function to find the second smallest element in an array of numbers. The function should return the second smallest number.
   function findSecondSmallest(arr) {
    if (arr.length < 2) {
      return "Array should contain at least two elements.";
    }
  
    let smallest = Infinity;
    let secondSmallest = Infinity;
  
    for (let num of arr) {
      if (num < smallest) {
        secondSmallest = smallest;
        smallest = num;
      } else if (num < secondSmallest && num !== smallest) {
        secondSmallest = num;
      }
    }
  
    if (secondSmallest === Infinity) {
      return "No second smallest element found.";
    }
  
    return secondSmallest;
  }
  
  // Test with different numbers
  const numbers4 = [12, 6, 9, 15, 3, 8, 1];
console.log(findSecondSmallest(numbers4));
   // Output: 3

//    ==== THE END ====
  