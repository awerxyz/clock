
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

        let secNumbers = document.getElementsByClassName("sec-number");
        for (let i = 0; i < secNumbers.length; i++) {
            secNumbers[i].style.transform = "rotate(" + -(second + -90) + "deg)";
            secNumbers[i].textContent = date.getSeconds();
        }

        let minNumbers = document.getElementsByClassName("min-number");
        for (let i = 0; i < minNumbers.length; i++) {
            minNumbers[i].style.transform = "rotate(" + -(minute + -90) + "deg)";
            minNumbers[i].textContent = date.getMinutes();
        }

        let hourNumbers = document.getElementsByClassName("hour-number");
        for (let i = 0; i < hourNumbers.length; i++) {
            hourNumbers[i].style.transform = "rotate(" + -(hour + -90) + "deg)";
            hourNumbers[i].textContent = date.getHours();
        }

    },1000
)
