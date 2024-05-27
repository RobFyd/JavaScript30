console.log("Hello, world!");

const slider = document.querySelector(".items") as HTMLDivElement;
let isDown: boolean = false;
let startX: number;
let scrollLeft: number;

slider.addEventListener("mousedown", (event) => {
    isDown = true;
    slider.classList.add("active");
    startX = event.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
    console.log(startX);
});

slider.addEventListener("mouseleave", () => {
    isDown = false;
    slider.classList.remove("active");
});

slider.addEventListener("mouseup", () => {
    isDown = false;
    slider.classList.remove("active");
});

slider.addEventListener("mousemove", (event) => {
    if (!isDown) return; // stop the fn from running
    event.preventDefault();
    const x = event.pageX - slider.offsetLeft; // get the x position of the mouse
    const walk = (x - startX) * 3; // calculate how far the mouse has moved
    slider.scrollLeft = scrollLeft - walk; // set the scroll position
});

