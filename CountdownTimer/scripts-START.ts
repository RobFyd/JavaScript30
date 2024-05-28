let countdown: number;
const timerDisplay = document.querySelector(".display__time-left") as HTMLHtmlElement;

function timer(seconds: number) {
  const now = Date.now();
  const then = now + seconds * 1000;
  displayTimeLeft(seconds);

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
  const display = `${hours}:${remainderMinutes}:${remainderSeconds}`;
  console.log(hours, remainderMinutes, remainderSeconds);
}

timer(6120);
