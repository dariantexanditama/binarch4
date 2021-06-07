window.onload=function(){
    document.getElementById("batu").addEventListener("click", batu);
    document.getElementById("kertas").addEventListener("click", kertas);
    document.getElementById("gunting").addEventListener("click", gunting);
}

function calculate(player) {
    var com = Math.floor(Math.random() * 3);
    if (com == 0) {
        document.getElementById("0").style.backgroundColor = "grey";
    }
    if (com == 1) {
        document.getElementById("1").style.backgroundColor = "grey";
    }
    if (com == 2) {
        document.getElementById("1").style.backgroundColor = "grey";
    }
    document.getElementById("vs").innerHTML = "";
    if ((player + 1) % 3 == com) {
        document.getElementById("result").innerHTML = "com\nwin";
        console.log("COM WIN")
    } else if (player == com) {
        document.getElementById("result").innerHTML = "draw";
        console.log("DRAW")
    } else {
        document.getElementById("result").innerHTML = "player 1\nwin";
        console.log("PLAYER 1 WIN")
    }
    document.getElementById("result").style.visibility = "visible";
    document.getElementById("result").style.backgroundColor = "green";
    document.getElementById("result").style.padding = "20px";
    document.getElementById("batu").removeEventListener("click", batu);
    document.getElementById("kertas").removeEventListener("click", kertas);
    document.getElementById("gunting").removeEventListener("click", gunting);
}

function batu(){
    document.getElementById("batu").style.backgroundColor = "grey";
    console.log("Batu");
    calculate(0);
}

function kertas(){
    document.getElementById("kertas").style.backgroundColor = "grey";
    console.log("Kertas");
    calculate(1);
}

function gunting(){
    document.getElementById("gunting").style.backgroundColor = "grey";
    console.log("Gunting");
    calculate(2);
}
