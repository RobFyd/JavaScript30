"use strict";
console.log("Hello, World!");
window.addEventListener("keydown", function (event) {
    const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${event.keyCode}"]`);
    if (!audio)
        return; // stop function from running all together
    audio.currentTime = 0; // rewind to the start
    audio.play();
    key.classList.add("playing");
});
// alternative for TS
// window.addEventListener("keydown", function(event) {
//     const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`) as HTMLAudioElement;
//     if (audio) {
//         audio.play();
//       }
// });
