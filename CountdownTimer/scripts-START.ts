let countdown: number;
const timerDisplay = document.querySelector(
  ".display__time-left"
) as HTMLHtmlElement;
const endTime = document.querySelector(".display__end-time") as HTMLHtmlElement;
const buttons = document.querySelectorAll(
  "[data-time]"
) as NodeListOf<HTMLButtonElement>;

function timer(seconds: number) {
  // clear any existing timers
  clearInterval(countdown);
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

function displayTimeLeft(seconds: number) {
  const minutes = Math.floor(seconds / 60);
  const remainderSeconds = seconds % 60;
  const hours = Math.floor(minutes / 60);
  const remainderMinutes = minutes % 60;
  const display = `${hours}:${
    remainderMinutes < 10 ? "0" : ""
  }${remainderMinutes}:${remainderSeconds < 10 ? "0" : ""}${remainderSeconds}`;
  document.title = display;
  timerDisplay.textContent = display;
  console.log(hours, remainderMinutes, remainderSeconds);
}

function displayEndTime(timestamp: number) {
  const end = new Date(timestamp);
  const hour = end.getHours();
  const minutes = end.getMinutes();
  endTime.textContent = `Be back at ${hour}:${
    minutes < 10 ? "0" : ""
  }${minutes}`;
}

function startTimer() {
  const seconds = parseInt(this.dataset.time);
  timer(seconds);
}

buttons.forEach((button) => button.addEventListener("click", startTimer));

timer(0);