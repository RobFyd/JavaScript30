const video = document.querySelector(".player") as HTMLVideoElement;
const canvas = document.querySelector(".photo") as HTMLCanvasElement;
const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
const strip = document.querySelector(".strip") as HTMLDivElement;
const snap = document.querySelector(".snap") as HTMLAudioElement;


function getVideo() {
    navigator.mediaDevices.getUserMedia({ video: true, audio: false })
        .then(localMediaStream => {
            console.log(localMediaStream);
            video.srcObject = localMediaStream;
            video.play();
        })
        .catch(err => {
            console.error('OH NO!!!', err);
        });
}

getVideo();