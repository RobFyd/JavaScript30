// start with strings, numbers and booleans

// if you change first value, the second value will not change because the second value is a copy of the first value
let age = 100;
let age2 = age;
console.log(age, age2); //the value of age and age2 is 100 because age2 is a copy of age
age = 200;
console.log(age, age2); //the value of age is 200 and age2 is 100 because age2 is a copy of first value of age

let surname: string = 'Wes';
let surname2 = surname;
console.log(surname, surname2); //the value of surname and surname2 is Wes because surname2 is a copy of surname
surname = 'Bos';
console.log(surname, surname2); //the value of surname is Bos and surname2 is Wes because surname2 is a copy of first value of surname


// Let's say we have an array
const players = ["Wes", "Sarah", "Ryan", "Poppy"];

// and we want to make a copy of it.
const team = players;
console.log(players, team); //the value of players and team is ["Wes", "Sarah", "Ryan", "Poppy"] because team is a copy of players

// You might think we can just do something like this:
team[3] = "Lux"; //change the value of team[3] to Lux

// however what happens when we update that array?

// now here is the problem!

// oh no - we have edited the original array too!

// Why? It's because that is an array reference, not an array copy. They both point to the same array!

// So, how do we fix this? We take a copy instead!

// one way

// or create a new array and concat the old one in

// or use the new ES6 Spread

// now when we update it, the original one isn't changed

// The same thing goes for objects, let's say we have a person object

// with Objects
const person = {
  name: "Wes Bos",
  age: 80,
};

// and think we make a copy:

// how do we take a copy instead?

// We will hopefully soon see the object ...spread

// Things to note - this is only 1 level deep - both for Arrays and Objects. lodash has a cloneDeep method, but you should think twice before using it.
