const panels = document.querySelectorAll(".panel");
// 2nd
function toggleOpen() {
    this.classList.toggle("open");
}
;
// 4th
function toggleActive(e) {
    console.log("propertyName");
    if (e.propertyName.includes("flex-grow")) {
        this.classList.toggle("open-active");
    }
}
// 1st
panels.forEach((panel) => panel.addEventListener("click", toggleOpen));
// 3rd
panels.forEach((panel) => panel.addEventListener("transitionend", toggleActive));
