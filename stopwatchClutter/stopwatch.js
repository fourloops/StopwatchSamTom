
function totalHrs () {
    return document.getElementById('hrs').innerHTML;
}
function totalMins () {
    return document.getElementById('mins').innerHTML;
}
function totalSecs () {
    return document.getElementById('secs').innerHTML;
}
function totalMils () {
    return document.getElementById('mils').innerHTML;
}

var millis = 0;
var secs = 0;
var mins = 0;
var hours = 0;
function startTime () {
    millis++;
    if (millis >= 100) {
        millis = 0;
        secs++;
        if (secs >= 60) {
            secs = 0;
            mins++;
            if (mins >= 60) {
                mins = 0;
                hours++;
            }
        }
    }
}

setTimeout(startTime(), 10);

console.log(millis);

function inputMillis () {
    document.getElementById('mils').innerHTML = millis;
}

function totalMilspone () {
    return millis;
}
