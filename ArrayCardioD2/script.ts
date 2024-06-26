console.log("Array Cardio Day 2");

// ## Array Cardio Day 2

const people2 = [
  { name: "Wes", year: 1988 },
  { name: "Kait", year: 1986 },
  { name: "Irv", year: 1970 },
  { name: "Lux", year: 2015 },
];

const comments = [
  { text: "Love this!", id: 523423 },
  { text: "Super good", id: 823423 },
  { text: "You are the best", id: 2039842 },
  { text: "Ramen is my fav food ever", id: 123523 },
  { text: "Nice Nice Nice!", id: 542328 },
];

// Some and Every Checks
// Array.prototype.some() // is at least one person 19 or older?
const isAdult = people2.some(function (person) {
  const currentYear = new Date().getFullYear();
  if (currentYear - person.year >= 19) {
    return true;
  }
});

// short version
const isAdult2 = people2.some((person) => {
  const currentYear = new Date().getFullYear();
  return currentYear - person.year >= 19;
});

// much shorter version
const isAdult3 = people2.some(
  (person) => new Date().getFullYear() - person.year >= 19
);
console.log({ isAdult }); // {} - to show the result as an object
console.log(isAdult2);
console.log(isAdult3);

// Array.prototype.every() // is everyone 19 or older?
const isEveryAdult = people2.every(
  (person) => new Date().getFullYear() - person.year >= 19
);
console.log(isEveryAdult);

// Array.prototype.find()
// Find is like filter, but instead returns just the one you are looking for
// find the comment with the ID of 823423
const rightComment = comments.find(function(comment) {
    if(comment.id === 823423) {
        return true;
    }
});
console.log({rightComment});

// simpler
const rightComment2 = comments.find(comment => comment.id === 823423);
console.log(rightComment2);

// Array.prototype.findIndex()
// Find the comment with this ID
// delete the comment with the ID of 823423
const index = comments.findIndex(comment => comment.id === 823423);
console.log(index);

comments.splice(index, 1); // delete one item from the index
console.table(comments); // to show the result as a table

// or create a new array - redux way - spread operator - without mutation
const newComments = [       // create a new array   
    ...comments.slice(0, index),        // take all the comments before the index
    ...comments.slice(index + 1)        // take all the comments after the index
];
console.table(newComments); // to show the result as a table