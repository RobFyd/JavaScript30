// get our elements

const player = document.querySelector('.player') as HTMLDivElement;
const video = player.querySelector('.viewer') as HTMLVideoElement;
const progress = player.querySelector('.progress') as HTMLDivElement;
const progressBar = player.querySelector('.progress__filled') as HTMLDivElement;
const toggle = player.querySelector('.toggle') as HTMLButtonElement;
const skipButtons = player.querySelectorAll('[data-skip]') as NodeListOf<HTMLButtonElement>;
const ranges = player.querySelectorAll('.player__slider') as NodeListOf<HTMLInputElement>;

// build out functions

function togglePlay() {
    const method = video.paused ? 'play' : 'pause';
    video[method]();

    // if(video.paused) {
    //     video.play();
    // } else {
    //     video.pause();
    // }
    console.log(method);
}

function updateButton() {
    const icon = this.paused ? '►' : '❚ ❚';
    toggle.textContent = icon;
    console.log(icon);
}

function skip() {
    console.log(this.dataset.skip);
    video.currentTime += parseFloat(this.dataset.skip);
}

function handleRangeUpdate() {
    video[this.name] = this.value;
    console.log(this.name);
    console.log(this.value);
}

function handleProgress() {
    const percent = (video.currentTime / video.duration) * 100;
    progressBar.style.flexBasis = `${percent}%`;
}

function scrub(e) {
    const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
    console.log(e);
    video.currentTime = scrubTime;
}

// hook up the event listeners

video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
video.addEventListener('timeupdate', handleProgress);

toggle.addEventListener('click', togglePlay);
skipButtons.forEach(button => button.addEventListener('click', skip));
ranges.forEach(range => range.addEventListener('change', handleRangeUpdate));
ranges.forEach(range => range.addEventListener('mousemove', handleRangeUpdate));

let mousedown = false;
progress.addEventListener('click', scrub);
progress.addEventListener('mousemove', (e) => mousedown && scrub(e));
progress.addEventListener('mousedown', () => mousedown = true);
progress.addEventListener('mouseup', () => mousedown = false);