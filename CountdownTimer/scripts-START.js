let countdown;
const timerDisplay = document.querySelector(".display__time-left");
const endTime = document.querySelector(".display__end-time");
function timer(seconds) {
    const now = Date.now();
    const then = now + seconds * 1000;
    displayTimeLeft(seconds);
    displayEndTime(then);
    countdown = setInterval(() => {
        const secondsLeft = Math.round((then - Date.now()) / 1000);
        // check if we should stop it!
        if (secondsLeft < 0) {
            console.log("Timer has ended!");
            clearInterval(countdown);
            return;
        }
        // display it
        displayTimeLeft(secondsLeft);
    }, 1000);
    console.log({ now, then });
}
function displayTimeLeft(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainderSeconds = seconds % 60;
    const hours = Math.floor(minutes / 60);
    const remainderMinutes = minutes % 60;
    const display = `${hours}:${remainderMinutes < 10 ? "0" : ""}${remainderMinutes}:${remainderSeconds < 10 ? "0" : ""}${remainderSeconds}`;
    document.title = display;
    timerDisplay.textContent = display;
    console.log(hours, remainderMinutes, remainderSeconds);
}
function displayEndTime(timestamp) {
    const end = new Date(timestamp);
    const hour = end.getHours();
    const minutes = end.getMinutes();
    endTime.textContent = `Be back at ${hour}:${minutes < 10 ? "0" : ""}${minutes}`;
}
timer(60);
