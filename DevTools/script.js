const dogs = [
    { name: "Snickers", age: 2 },
    { name: "hugo", age: 8 },
];
function makeGreen() {
    const p = document.querySelector("p");
    if (p !== null) {
        p.style.color = "#BADA55";
        p.style.fontSize = "50px";
    }
}
// Regular
console.log("hello");
// Interpolated
console.log("Hello I am a %s string!", "new");
// Styled
console.log("%c I am some great text", "font-size: 20px; color: black; background: white; text-shadow: 3px 3px 0 grey");
// warning!
console.warn("OH NOOO");
// Error :|
console.error("Bolox :|");
// Info
console.info("Crocodiles eat 3-4 people per year");
// Testing
const p = document.querySelector("p");
console.assert(p.classList.contains("ouch"), "That is wrong!");
console.assert(1 === 1, "Wrong!");
// clearing
// console.clear();
// Viewing DOM Elements
console.log(p);
console.dir(p);
// Grouping together
dogs.forEach((dog) => {
    console.groupCollapsed(`${dog.name}`); // can be just group
    console.log(`This is ${dog.name}`);
    console.log(`${dog.name} is ${dog.age} years old`);
    console.log(`${dog.name} is ${dog.age * 7} dog years old`);
    console.groupEnd(); // Remove the argument from the function call
});
// counting
console.count("Wes");
console.count("Wes");
console.count("Steve");
console.count("Wes");
console.count("Steve");
console.count("Wes");
console.count("Steve");
console.count("Steve");
// timing
console.time("fetching data");
fetch("https://api.github.com/users/wesbos")
    .then((data) => data.json())
    .then((data) => {
    console.timeEnd("fetching data");
    console.log(data);
});
// table
console.table(dogs);
