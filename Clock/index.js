const hourHand= document.getElementById("hour-hand");
const minuteHand = document.getElementById("minute-hand");
const secondHand = document.getElementById("second-hand");

function rotateHands(secDeg,minDeg,hourDeg)
{
    secondHand.style.transform=`rotate(${secDeg}deg)`;
    minuteHand.style.transform=`rotate(${minDeg}deg)`;
    hourHand.style.transform=`rotate(${hourDeg}deg)`;
}

function setTime()
{
    const now = new Date;
    const sec = now.getSeconds();
    const min = now.getMinutes();
    let hour = now.getHours();
    let meridean= "AM";
    if(hour>12)
    {
        hour=hour-12;
        meridean="PM";
    }
    
    const secDeg=sec*360/60 + 90;
    const minDeg=min*360/60 +90;
    const hourDeg=hour*360/12 +90;

    rotateHands(secDeg, minDeg, hourDeg);
    
}

setInterval(setTime, 1000);

