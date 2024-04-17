"use strict";
console.log("Hello, World!");
function playSound(event) {
    const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${event.keyCode}"]`);
    if (!audio)
        return; // stop function from running all together
    audio.currentTime = 0; // rewind to the start
    audio.play();
    key.classList.add("playing");
}
function removeTransition(event) {
    if (event.propertyName !== "transform")
        return; // skip if it's not a transform
    this.classList.remove("playing");
}
const keys = document.querySelectorAll(".key");
keys.forEach(key => key.addEventListener("transitionend", removeTransition));
window.addEventListener("keydown", playSound);
/////////////////////////////////////////////////////////////////
// alternative for TS
// window.addEventListener("keydown", function(event) {
//     const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`) as HTMLAudioElement;
//     if (audio) {
//         audio.play();
//       }
// });
