let countdown: number;

function timer(seconds: number) {
  const now = Date.now();
  const then = now + seconds * 1000;

  countdown = setInterval(() => {
    const secondsLeft = Math.round((then - Date.now()) / 1000);
    // check if we should stop it!
    if (secondsLeft <= 0) {
      console.log("Timer has ended!");
        clearInterval(countdown);
      return;
    }
    // display it
    console.log({ secondsLeft });
  }, 1000);

  console.log({ now, then });
}

timer(3);
