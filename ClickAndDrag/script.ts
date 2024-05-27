console.log("Hello, world!");

const slider = document.querySelector(".items") as HTMLDivElement;
let isDown: boolean = false;
let startX: number;
let scrollLeft: number;

slider.addEventListener("mousedown", () => {
    isDown = true;
    slider.classList.add("active");
});

slider.addEventListener("mouseleave", () => {
    isDown = false;
    slider.classList.remove("active");
});

slider.addEventListener("mouseup", () => {
    isDown = false;
    slider.classList.remove("active");
});

slider.addEventListener("mousemove", () => {
    if (!isDown) return; // stop the fn from running
    console.count(isDown);
    
});

