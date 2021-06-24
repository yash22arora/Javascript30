const dayText = document.getElementById("dayText");
const hourText = document.getElementById("hourText");
const minuteText = document.getElementById("minuteText");
const secondText = document.getElementById("secondText");
const formInput= document.getElementById("inputDate");


let eventDate = new Date("December 31, 2021 00:00:00").getTime();
 

// Factors for calculating Days, Hours, Minutes and Seconds
const seconds = 1000;
const minutes = seconds*60;
const hours = minutes*60;
const days = hours*24;

// Converting datetime-local string input to a Date object
function parseYMDHM(s) {
    var b = s.split(/\D+/);
    return new Date(b[0], --b[1], b[2], b[3], b[4], b[5]||0, b[6]||0);
}

formInput.addEventListener("change", function(){
    eventDate=parseYMDHM(formInput.value);
    console.log(formInput.value);
});

function updateCountdown()
{
    
    
    const now = new Date().getTime();
    let gap= eventDate - now;

    const dayCalc = Math.floor(gap/days);
    const hourCalc = Math.floor((gap%days)/hours);
    const minuteCalc = Math.floor((gap%hours)/minutes);
    const secondCalc = Math.floor((gap%minutes)/seconds);

    dayText.innerText=dayCalc;
    hourText.innerText=hourCalc;
    minuteText.innerText=minuteCalc;
    secondText.innerText=secondCalc;
    
}

setInterval(updateCountdown,1000);

