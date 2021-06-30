let cardNumberInput = document.getElementById("cardNumberInput");
let cardNumber = document.getElementById("cardNumber");

let cardHolderInput = document.getElementById("cardHolderInput");
let cardHolder = document.getElementById("cardHolderName");


const submitBtn = document.getElementById("submit");

submitBtn.addEventListener("click",function(e){
    e.preventDefault();
});

let cnumber = "";
let i=0;
cardNumberInput.addEventListener("keydown",function(e){
   
    //adding - after every 4 digits
    console.log(e.key);
    
    if(!isNaN(e.key)||e.key=="Backspace")
    {
        if(i%4==0&&i!=0)
        {
            cnumber=cnumber + "-";
        }
        
        if((e.key>-1&&e.key<10))
        {
            cnumber=cnumber+ e.key;
            i++;
        }
        else if(e.key=="Backspace")
        {
            if(i>0)
            --i;
            cnumber=cnumber.slice(0, cnumber.length-1);
            
        }
    }
    else
    {
        console.log("Not a number");
        cardNumberInput.value=cnumber;
        return;
    }
    
    //final updation:
    cardNumber.innerText=cnumber;
    if(e.key!="Backspace")
    cardNumberInput.value=cnumber.slice(0, cnumber.length-1);
    else
    cardNumberInput.value=cnumber.slice(0, cnumber.length);

    
});


let cname=" ";
cardHolderInput.addEventListener("keydown", function(s){

    if
    {
        cname
    }
    cname = cname + s.key;
    cardHolder.value=cname;

});