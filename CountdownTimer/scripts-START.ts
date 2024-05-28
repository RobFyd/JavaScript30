let countdown: number;

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
  console.log(minutes, remainderSeconds);
}

timer(120);
