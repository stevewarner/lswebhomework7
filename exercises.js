//Do not change any of the function names

function getBiggest(x, y) {
  //x and y are integers.  Return the larger integer
  //if they are the same return either one
    if(x > y){
        return x;
    } else {
        return y;
    }
}

function greeting(language) {
  //return a greeting for three different languages:
  //language: 'German' -> 'Guten Tag!'
  //language: 'English' -> 'Hello!'
  //language: 'Spanish' -> 'Hola!'
  //if language is undefined return 'Hello!'
    if(language === 'German'){
        return 'Guten Tag!';
    } 
    else if(language === 'Spanish'){
        return 'Hola!';
    } 
    else {
        return 'Hello!';
    }
}

function isTenOrFive(num) {
  //return true if num is 10 or 5
  //otherwise return false
    if(num === 10 || num === 5){
        return true;
    }
    else {
        return false;
    }
}

function isInRange(num) {
  //return true if num is less than 50 and greater than 20
    if(num < 50 && num > 20){
        return true;
    } 
    else {return false;}
}

function isInteger(num) {
  //return true if num is an integer
  //0.8 -> false
  //1 -> true
  //-10 -> true
  //otherwise return false
  //hint: you can solve this using Math.floor
    if (num === Math.floor(num)){
        return true;
    }
    else {return false;}
}

function fizzBuzz(num) {
  //if num is divisible by 3 return 'fizz'
  //if num is divisible by 5 return 'buzz'
  //if num is divisible by 3 & 5 return 'fizzbuzz'
  //otherwise return num
    if (num % 3 === 0 && num % 5 === 0) {
        return 'fizzbuzz';
        }
    else if (num % 3 === 0){
        return 'fizz';
        }
    else if (num % 5 === 0){
        return 'buzz';
    } 
    else {
        return num;
    }
}

function isPrime(num) {
  //return true if num is prime.
  //otherwise return false
  //hint: a prime number is only evenly divisible by itself and 1
  //hint2: you can solve this using a for loop
  //note: 0 and 1 are NOT considered prime numbers
    if (num<2) return false; 
 var m=Math.sqrt(num);
 for (var i=2; i<=m; i++) if (num%i==0) return false;
    return true; 
}

    

function returnFirst(arr) {
  //return the first item from the array
    return arr[0];
}

function returnLast(arr) {
  //return the last item of the array
    return arr[arr.length - 1];
}

function getArrayLength(arr) {
  //return the length of the array
    return arr.length;
}

function incrementByOne(arr) {
  //arr is an array of integers  
  //increase each integer by one
  //return the array
    var newArr = arr.map(function(i){
  return i + 1;
});
    return newArr;
}

function addItemToArray(arr, item) {
  //add the item to the end of the array
  //return the array
    arr.push(item);
    return arr;
}

function addItemToFront(arr, item) {
  //add the item to the front of the array
  //return the array
  //hint: use the array method .unshift
    arr.unshift(item);
    return arr;
}

function wordsToSentence(words) {
  //words is an array of strings
  //return a string that is all of the words concatenated together
  //spaces need to be between each word
  //example: ['Hello', 'world!'] -> 'Hello world!'
    return words.join(' ');
}

function contains(arr, item) {
  //check to see if item is inside of arr
  //return true if it is, otherwise return false
    var counter = 0;
    for (var i = 0; i < arr.length; i++){
        if (arr[i] === item) {
            counter += 1;
        }
    }
    if (counter > 0){
        return true;
    } else {
        return false;
    }
}

function addNumbers(numbers) {
  //numbers is an array of integers.
  //add all of the integers and return the value
    var total = 0;
    for (var i = 0; i < numbers.length; i++){
        total += numbers[i];
    }
    return total;
}

function averageTestScore(testScores) {
  //testScores is an array.  Iterate over testScores and compute the average.
  //return the average
    var sum = 0;
    var avg = 0;
    for (var i = 0; i < testScores.length; i++){
        sum += testScores[i];
    }
    avg = sum/testScores.length;
    return avg;
}

function largestNumber(numbers) {
  //numbers is an array of integers
  //return the largest integer
    var biggie = 0;
    for (var i = 0; i < numbers.length;i++){
        if (numbers[i] >= biggie) {
            biggie = numbers[i];
        } 
    }
    return biggie;
}

//Do not change any of the function names

function multiplyByTen(num) {
  //return num after multiplying it by ten
  //code here
    num = num * 10;
    return num;
}

function subtractFive(num) {
  //return num after subtracting five
  //code here
}

function areSameLength(str1, str2) {
  //return true if the two strings have the same length
  //otherwise return false
  //code here
}

function areEqual(x, y) {
  //return true if x and y are the same
  //otherwise return false
  //code here
}

function lessThanNinety(num) {
  //return true if num is less than ninety
  //otherwise return false
  //code here
}

function greaterThanFifty(num) {
  //return true if num is greater than fifty
  //otherwise return false
  //code here
}

function add(x, y) {
  //add x and y together and return the value
  //code here
}

function subtract(x, y) {
  //subtract y from x and return the value
  //code here
}

function divide(x, y) {
  //divide x by y and return the value
  //code here
}

function multiply(x, y) {
  //multiply x by y and return the value
  //code here
}

function getRemainder(x, y) {
  //return the remainder from dividing x by y
  //code here
}

function isEven(num) {
  //return true if num is even
  //otherwise return false
  //code here
}

function isOdd(num) {
  //return true if num is false
  //otherwise return false
  //code here
}

function square(num) {
  //square num and return the new value
  //code here
}

function cube(num) {
  //cube num and return the new value
  //code here
}

function raiseToPower(num, exponent) {
  //raise num to whatever power is passed in as exponent
  //code here
}

function roundNumber(num) {
  //round num and return it
  //code here
}

function roundUp(num) {
  //round num up and return it
  //code here
}

function addExclamationPoint(str) {
  //add an exclamation point to the end of str and return the new string
  //'hello world' -> 'hello world!'
  //code here
}

function combineNames(firstName, lastName) {
  //return firstName and lastName combined as one string and separated by a space.
  //'Lambda', 'School' -> 'Lambda School'
  //code here
}

function getGreeting(name) {
  //Take the name string and concatenate other strings onto it so it takes the following form:
  //'Sam' -> 'Hello Sam!'
  //code here
}

//If you can't remember these area formulas then head over to Google or look at the test code.
 
function getRectangleArea(length, width) {
  //return the area of the rectangle by using length and width
  //code here
}

function getTriangleArea(base, height) {
  //return the area of the triangle by using base and height
  //code here
}

function getCircleArea(radius) {
  //return the rounded area of the circle given the radius
  //code here
}

function getRectangularPrismVolume(length, width, height) {
  //return the volume of the 3D rectangular prism given the length, width, and height
  //code here
}


//Do not modify code below this line.
////--------------------------------

module.exports = {
  multiplyByTen: multiplyByTen,
  subtractFive: subtractFive,
  areSameLength: areSameLength,
  areEqual: areEqual,
  lessThanNinety: lessThanNinety,
  greaterThanFifty: greaterThanFifty,
  add: add,
  subtract: subtract,
  divide: divide,
  multiply: multiply,
  getRemainder: getRemainder,
  isEven: isEven,
  isOdd: isOdd,
  square: square,
  cube: cube,
  raiseToPower: raiseToPower,
  roundNumber: roundNumber,
  roundUp: roundUp,
  addExclamationPoint: addExclamationPoint,
  combineNames: combineNames,
  getGreeting: getGreeting,
  getRectangleArea: getRectangleArea,
  getTriangleArea: getTriangleArea,
  getCircleArea: getCircleArea,
  getRectangularPrismVolume: getRectangularPrismVolume,
  getBiggest: getBiggest,
  greeting: greeting,
  isTenOrFive: isTenOrFive,
  isInRange: isInRange,
  isInteger: isInteger,
  fizzBuzz: fizzBuzz,
  isPrime: isPrime,
  returnFirst: returnFirst,
  returnLast: returnLast,
  getArrayLength: getArrayLength,
  incrementByOne: incrementByOne,
  addItemToArray: addItemToArray,
  addItemToFront: addItemToFront,
  wordsToSentence: wordsToSentence,
  contains: contains,
  addNumbers: addNumbers,
  averageTestScore: averageTestScore,
  largestNumber: largestNumber
};
