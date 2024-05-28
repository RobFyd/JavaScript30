
const holes = document.querySelectorAll(".hole");
const scoreBoard = document.querySelector(".score");
const moles = document.querySelectorAll(".mole");
let lastHole: HTMLElement;

function randomTime(min: number, max: number) {
    return Math.round(Math.random() * (max - min) + min);
}

function randomHole(holes: NodeListOf<HTMLElement>) {
    const idx = Math.floor(Math.random() * holes.length);
    const hole = holes[idx];
    if (hole === lastHole) {
        return randomHole(holes);
    }
    lastHole = hole;
    return hole;
}