const secondHand = document.querySelector('.second-hand') as HTMLDivElement;
const minuteHand = document.querySelector('.minute-hand') as HTMLDivElement;
const hourHand = document.querySelector('.hour-hand') as HTMLDivElement;

const setDate = () => {
    const now = new Date();
    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
    const minutes = now.getMinutes();
    const hours = now.getHours();
    console.log(hours, minutes, seconds);
};

setInterval(setDate, 1000);