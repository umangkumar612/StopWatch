var timerInterval; // Variable to store the interval ID
var sec = 0;
var min = 0;
var hrs = 0;
var isStop = true;

function start() {
    if (isStop) {  
        isStop = false;  
        timerInterval = setInterval(timer, 1000);  
    }
}

function timer() {
    sec++;
    if (sec === 60) {
        sec = 0;
        min++;
        if (min === 60) {
            min = 0;
            hrs++;
        }
    }
    updateDisplay();  // Update the display after updating time
}

function stop() {
    clearInterval(timerInterval);
    timerInterval = null;
    isStop = true;
}

function reset() {
    stop();
    sec = 0;
    min = 0;
    hrs = 0;
    isStop = true;
    updateDisplay();
}

function updateDisplay() {
    var timerElement = document.getElementById("timer");
    if (timerElement) {
        timerElement.innerHTML =
            (hrs < 10 ? "0" + hrs : hrs) + " : " +
            (min < 10 ? "0" + min : min) + " : " +
            (sec < 10 ? "0" + sec : sec);
    }
}
