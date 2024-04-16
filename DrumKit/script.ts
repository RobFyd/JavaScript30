console.log("Hello, World!");

window.addEventListener("keydown", function(event) {
    const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`) as HTMLAudioElement;
    if(!audio) return; // stop function from running all together
    audio.play();
});