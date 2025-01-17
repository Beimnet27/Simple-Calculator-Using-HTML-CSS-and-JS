let display = document.getElementById("disp");

function Clear(){
    display.value = "";
}

function Add(n){
    display.value += n;
}

function Calculate(){
    display.value = eval(display.value);
}