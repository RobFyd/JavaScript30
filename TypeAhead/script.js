const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
const cities = [];
fetch(endpoint)
    .then(blob => blob.json()) // blob.json() returns a promise
    //.then(data => cities = data); // data is the parsed JSON data, need to use let cities = [] instead of const cities = []
    //or
    .then(data => cities.push(...data)); // data is the parsed JSON data and you can use const cities = [] instead of let cities = []
function findMatches(wordToMatch, cities) {
    return cities.filter(place => {
        // here we need to figure out if the city or state matches what was searched
        const regex = new RegExp(wordToMatch, 'gi');
        return place.city.match(regex) || place.state.match(regex); // match() returns null if no match found
    });
}