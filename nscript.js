var seconds = 0;
var x;
var isOn = 0;

function isRunning(){
    document.getElementById("eyede").innerHTML = seconds++;
    var x = setTimeout(function(){
        isRunning();
    },10);
}

function funcStart(){
    if(isOn===0){
        isOn=1;
        isRunning();
    }
}

function funcStop(){
    clearTimeout(x);
    isOn=0;
 }
