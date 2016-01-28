var secs = 0;
var mins = 0;
var hrs = 0;
var mils = 0;
var int;

function funcStart() {
    double();
    document.getElementById("mils").innerHTML = mils;
    document.getElementById("secs").innerHTML = secs + "&nbsp:&nbsp";
    document.getElementById("mins").innerHTML = mins + "&nbsp:&nbsp";
    document.getElementById("hrs").innerHTML = hrs + "&nbsp:&nbsp";
    mils++;
    if (mils >= 100) {
        mils = 0;
        secs++;
        if (secs >= 60) {
            secs = 0;
            mins++;
            if (mins >= 60) {
                mins = 0;
                hrs++;
            }
        }
    }
}

function double() {
    if (mils.toString().length === 1) {
        mils = "0" + mils;
    }
    if (secs.toString().length === 1) {
        secs = "0" + secs;
    }
    if (mins.toString().length === 1) {
        mins = "0" + mins;
    }
    if (hrs.toString().length === 1) {
        hrs = "0" + hrs;
    }
}

function startClickHandler() {
    funcStart();
    int = setInterval(funcStart,10);
}

function funcStop() {
    clearInterval(int);
 }

 function reset() {
     mils = 0+"0";
     secs = 0+"0";
     mins = 0+"0";
     hrs = 0+"0";
     document.getElementById("mils").innerHTML = mils;
     document.getElementById("secs").innerHTML = secs + "&nbsp:&nbsp";
     document.getElementById("mins").innerHTML = mins + "&nbsp:&nbsp";
     document.getElementById("hrs").innerHTML = hrs + "&nbsp:&nbsp";
 }

 function hide(){
     document.getElementById("start").classList.add("hide");
 }

 function show(){
     document.getElementById("start").classList.remove("hide");
 }
