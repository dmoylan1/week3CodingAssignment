// 1.	Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.
let ages = [3, 9, 23, 64, 2, 8, 28, 93];

// a.	Programmatically subtract the value of the first element in the array from the value in the last element of the array (do not use numbers to reference the last element, find it programmatically, ages[7] – ages[0] is not allowed). Print the result to the console.
let lastElement = ages[ages.length-1];
let firstElement = ages[0];
console.log(lastElement - firstElement);
// b.	Add a new age to your array and repeat the step above to ensure it is dynamic (works for arrays of different lengths).
ages.push(11);
console.log(ages);
lastElement = ages[ages.length-1];
firstElement = ages[0];
console.log(lastElement - firstElement);
// c.	Use a loop to iterate through the array and calculate the average age. Print the result to the console.
let initialAge = 0;
let average =  ages.reduce(
    (previousValue, currentValue) => previousValue + currentValue, 
        initialAge) / ages.length;

    console.log(average);
// 2.	Create an array called names that contains the following values: ‘Sam’, ‘Tommy’, ‘Tim’, ‘Sally’, ‘Buck’, ‘Bob’.

let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];
// a.	Use a loop to iterate through the array and calculate the average number of letters per name. Print the result to the console.
let lengths = names.map(function(element) {
    return element.length;
});
let averageLength = lengths.reduce(
    (previousValue, currentValue) => previousValue + currentValue) / names.length;
    console.log(averageLength);

// b.	Use a loop to iterate through the array again and concatenate all the names together, separated by spaces, and print the result to the console.
console.log(names.join(' '));

// 3.	How do you access the last element of any array?
           //*** answer:  return arrayName[arrayName.length - 1];
// 4.	How do you access the first element of any array?
        //*** answer: return arrayName[0];
// 5.	Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.
// For example:

// namesArray = ["Kelly", "Sam", "Kate"] //given this array
// nameLengths = [5, 3, 4] //create this new array
let nameLengths = names.map(function(element) {
    return element.length; 
});
console.log(nameLengths);
// 6.	Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array. Print the result to the console.
let sum = nameLengths.reduce(
    (previousValue, currentValue) => previousValue + currentValue);
    console.log(sum);

// 7.	Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to 
// itself n number of times. (i.e. if I pass in ‘Hello’ and 3, I would expect the function to return ‘HelloHelloHello’).
function multy(word, n) {
    console.log(word.repeat(n));
}
multy('Hello', 5);

// 8.	Write a function that takes two parameters, firstName and lastName, and returns a full name 
// (the full name should be the first and the last name separated by a space).
function fullName(firstName, lastName) {
    console.log(firstName + " " + lastName);
}
    fullName('Danielle', 'Moylan');
// 9.	Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater 
// than 100.
let lotsOfNumbers = [33, 25, 25, 25];
let sumOfNumbers = lotsOfNumbers.reduce(
    (previousValue, currentValue) => previousValue + currentValue);
 
function sumAndHundred() {
if (sumOfNumbers > 100) {
    return true;
} else {
    return "It is not true";
}};

// 10.	Write a function that takes an array of numbers and returns the average of all the elements in the array.
function averageFunction() {
    let averageAgain =  lotsOfNumbers.reduce(
    (previousValue, currentValue) => previousValue + currentValue) / lotsOfNumbers.length;

    return averageAgain;
}

// 11.	Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array 
// is greater than the average of the elements in the second array.
function averages() {
    if (average > averageAgain) {
    return true;
}};
// 12.	Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and 
// returns true if it is hot outside and if moneyInPocket is greater than 10.50.

function willBuyDrink(isHotOutside, moneyInPocket) {
    if (isHotOutside === true && moneyInPocket > 10.50) {
        return true;
    } else {
        return "No drink for you!"
    }};
    willBuyDrink(false, 15);

// 13.	Create a function of your own that solves a problem. In comments, write what the function does and why you created it.


let evens = ages.filter(number => {
    return number % 2 === 0;
  });
  
  console.log(evens);

  // The function above iterates through the ages function and creates a new array out of only the even numbers.