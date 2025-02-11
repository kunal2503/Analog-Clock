let h = document.getElementById("hours");
let m = document.getElementById("minute");
let s = document.getElementById("second");

setInterval(() => {
    let d = new Date();
    let hoursTime = d.getHours();
    let minutesTime = d.getMinutes();
    let secondsTime = d.getSeconds();

    let hoursRotations = 30 * hoursTime + minutesTime / 2;
    let minutesRotations = 6 * minutesTime;
    let secondsRotations = 6 * secondsTime;

    h.style.transform = `rotate(${hoursRotations}deg)`;
    m.style.transform = `rotate(${minutesRotations}deg)`;
    s.style.transform = `rotate(${secondsRotations}deg)`;
}, 1000);
