console.log("Hello, world!");

{
  const speed = document.querySelector(".speed") as HTMLDivElement;
  const bar = speed.querySelector(".speed-bar") as HTMLDivElement;
  const video = document.querySelector(".flex") as HTMLVideoElement;

  function handleMove(event: MouseEvent) {
    const y = event.pageY - speed.offsetTop;
    const percent = y / speed.offsetHeight;
    const min = 0.4;
    const max = 4;
    const height = Math.round(percent * 100) + "%";
    const playbackRate = percent * (max - min) + min;
    bar.style.height = height;
    bar.textContent = playbackRate.toFixed(2) + "x";
    video.playbackRate = playbackRate;
  }

  speed.addEventListener("mousemove", handleMove);
}
