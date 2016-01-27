var seconds = 0;

function funcStart(){
    document.getElementById("eyede").innerHTML = seconds++;
    setTimeout(funcStart,1000);
}
funcStart();

function funcStop(){
    var x = setTimeout(funcStart,1000);
    return clearTimeout(x);
 }
