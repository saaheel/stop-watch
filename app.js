let msec = sec = min = 0;
let interval;

const miliSecond = document.getElementById("msec");
const second = document.getElementById("sec");
const mints = document.getElementById("min");

function timer() {
    msec++;
    miliSecond.innerHTML = msec;
    if(msec >= 100){
        sec++;
        second.innerHTML = sec;
        msec = 0;
    } else if(sec === 60){
        min++;
        mints.innerHTML = min;
    }
}


// Add Button Functionality

function getStart() {
    interval = setInterval(timer, 10)
    document.getElementById('start').disabled = true;
}
function getStop() {
    clearInterval(interval);
    document.getElementById('start').disabled = false;
}
function getReset() {
    getStop();
    min = 0;
    sec = 0;
    msec=0;
    mints.innerHTML = 0;
    second.innerHTML = 0;
    miliSecond.innerHTML = 0;
    document.getElementById('start').disabled = false;
}