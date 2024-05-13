const timeNodes = Array.from(document.querySelectorAll('[data-time]'));
console.log(timeNodes);
const seconds = timeNodes.map(node => node.dataset.time);
console.table(seconds);
