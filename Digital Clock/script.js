function getCurrentTime(){
    const now = new Date();

    const hours = String(now.getHours()).padStart(2,"0")
    const mins = String(now.getMinutes()).padStart(2,"0")
    const secs = String(now.getSeconds()).padStart(2,"0")

    return `${hours} : ${mins} : ${secs}`;

}

function updateClock(){
    const clockElement = document.getElementById("clock");
    clockElement.textContent = getCurrentTime();
}
updateClock();
setInterval(updateClock,1000)