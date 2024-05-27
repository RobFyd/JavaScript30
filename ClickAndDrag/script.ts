console.log("Hello, world!");

const slider = document.querySelector(".items") as HTMLDivElement;
let isDown: boolean = false;
let startX: number;
let scrollLeft: number;

slider.addEventListener("mousedown", () => {
    isDown = true;
});

slider.addEventListener("mouseleave", () => {
    isDown = false;
});

slider.addEventListener("mouseup", () => {
    isDown = false;
});

slider.addEventListener("mousemove", () => {
    console.log(isDown);
    console.log("mousemove");
});

