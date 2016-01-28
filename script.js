var seconds = 0;
var int;

function funcStart(){
    document.getElementById("eyede").innerHTML = seconds++;
}

function startClickHandler(){
    funcStart();
    int = setInterval(funcStart,1000);
}

function funcStop(){
    clearInterval(int);
 }
