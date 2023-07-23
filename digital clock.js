//so this will get the current date and time

function getCurrentTime(){

    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    return { hours, minutes, seconds };

}

//Then this will Format the time to ensure its always two digits - army style
function formatTime(time){
    return time < 10 ? `0${time}` : time;

}
//Need it to Update the clock every second obviously
function updateClock() {
    const currentTime = getCurrentTime();
    const formattedHours = formatTime(currentTime.hours);
    const formattedMinutes = formatTime (currentTime.minutes);
    const formattedSeconds = formatTime (currentTime.seconds);
    const clock = document.getElementById('clock');

    clock.textContent = `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
}

//Now we'll Start the clock
setInterval(updateClock, 1000);
