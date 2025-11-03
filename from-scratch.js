// For all of the following problems, use an array higher order method to solve the problem.
// You should not use any for or while loops!
// For each section, we've provided some sample data for you to test your function with.

/* -------------------------------------------- */
/* --------------STRING PROBLEMS--------------- */
/* -------------------------------------------- */

const sampleWords = ['dog', 'blueberry', 'alabama', 'earth', 'football'];

// Problem 1
const printEveryWord = (words) => {
  words.forEach(function (word) {
    console.log(word);
  });

};

// Problem 2
const getStringLengths = (strings) => {
  return strings.map((str) => {
    return str.length;

  });

};

// Problem 3
const sortWordsZtoA = (words) => {
  words.sort();
  words.reverse();
  return words;

};

/* -------------------------------------------- */
/* --------------NUMBER PROBLEMS--------------- */
/* -------------------------------------------- */

const sampleNumbers = [7, 3, 9, 1, 4, 8, 2, 10, 5, 6];

// Problem 4
const getEvenNumbers = (nums) => {
  return numbers.filter((num) => {
    return num % 2 === 0;

  });

};

// Problem 5
const getLargestNumber = (numbers) => {
  return numbers.reduce((currentMax, num) => {
    if (num > currentMax) {
      return num
    } else {
      return currentMax;
    }
  });

};

/* -------------------------------------------------- */
/* --------------OBJECT ARRAY PROBLEMS--------------- */
/* -------------------------------------------------- */

const sampleUsers = [
  { name: 'Charlie', isActive: true, age: 18, score: 80 },
  { name: 'Edward', isActive: true, age: 30, score: 60 },
  { name: 'Bob', isActive: true, age: 25, score: 90 },
  { name: 'Diana', isActive: false, age: 35, score: 70 },
  { name: 'Alice', isActive: false, age: 28, score: 100 },
];

// Problem 6
const printUserNamesAndScores = (users) => {
  // couldnt complete this problem but i have a feeling we use 
  // .forEach because the problem states do not return a new
  // array and .forEach is made for looping through an array and
  // doing an action for each item and  not returning anything.

};


// Problem 7
const getUserNames = (users) => {
  return users.map((user) => {
    return user.name;
  });


};


// Problem 8
const getActiveUsersUnder30 = (users) => {
  return user.filter((user) => {
    return user.age < 30 && user.isActive === true;
  });

};


// Problem 9
const getTotalScore = (users) => {

};

// Problem 10
const sortUsersByScoreDescending = (users) => {

};
