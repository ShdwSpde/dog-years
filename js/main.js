// set age as variable
let myAge = 32;

// set earlyYears variable
let earlyYears = 2;

// re-assign early years 
earlyYears = earlyYears * 10.5;

// with early years accounted for, deduce later years
let laterYears = myAge - 2;

// define later years using multiplier
laterYears = laterYears * 4;

// check your work
console.log(earlyYears);
console.log(laterYears);

// use these values, find your age in dog 
let myAgeInDogYears = earlyYears + laterYears;

// store your name as a string
let myName = 'Mike Spade'.toLowerCase();

// put it all together
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`);

