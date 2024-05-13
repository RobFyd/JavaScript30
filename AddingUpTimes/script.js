const timeNodes = Array.from(document.querySelectorAll('[data-time]'));
console.log(timeNodes);
const seconds = timeNodes
    .map(node => node.dataset.time)
    .map(timeCode => {
    const [mins, secs] = timeCode.split(':').map(parseFloat);
    return (mins * 60) + secs;
})
    .reduce((total, vidSeconds) => total + vidSeconds);
let secondsLeft = seconds;
const hours = Math.floor(secondsLeft / 3600);
secondsLeft = secondsLeft % 3600;
console.log(seconds);
console.log(secondsLeft);
