let second = 0;
let minute = 0;
let hour = 0;

let date = new Date();

setInterval(
    function(){
        date = new Date();
        second = date.getSeconds() * 6;
        minute = date.getMinutes() * 6;
        hour = date.getHours() * 30 + Math.round(minute / 12);

        document.getElementById("sec-hand-holder").style.transform = "rotate(" + second + "deg)";
        document.getElementById("min-hand-holder").style.transform = "rotate(" + minute + "deg)";
        document.getElementById("hour-hand-holder").style.transform = "rotate(" + hour + "deg)";
    }, 1000
)