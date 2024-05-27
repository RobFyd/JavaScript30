function timer(seconds: number) {
    setInterval(() => {
        seconds--;
        if (seconds < 0) {
            return;
        }
        console.log(seconds);
    }, 1000);
}