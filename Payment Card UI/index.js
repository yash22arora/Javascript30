const visa = document.getElementById("visa");
const mastercard = document.getElementById("mastercard");


let cardNumberInput = document.getElementById("cardNumberInput");
let cardNumber = document.getElementById("cardNumber");

let cardHolderInput = document.getElementById("cardHolderInput");
let cardHolder = document.getElementById("cardHolderName");


const submitBtn = document.getElementById("submit");

submitBtn.addEventListener("click",function(e){
    e.preventDefault();
});

function showNetwork(integer)
{
    
    if(integer==52)
    {
        
            mastercard.style.visibility="hidden";
            visa.style.visibility="visible";
            console.log("Visa");
        
    }
    if(integer==53)
    {
        if(mastercard.style.visibility=="hidden")
        {
            visa.style.visibility="hidden";
            mastercard.style.visibility="visible";
            console.log("Mastercard");
        }
    }
}

let cnumber = "";
let i=0;
cardNumberInput.addEventListener("keydown",function(e){
   
    console.log(i);
    //adding - after every 4 digits
    if(i==0)
    {
        showNetwork(e.keyCode);
    }
    
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
    cardNumber.value=cnumber;
    if(e.key!="Backspace")
    cardNumberInput.value=cnumber.slice(0, cnumber.length-1);
    else
    cardNumberInput.value=cnumber.slice(0, cnumber.length);

    
});


let cname="";
let cnameLength = 0;
cardHolderInput.addEventListener("keydown", function(event){

    if((event.keyCode>=65&&event.keyCode<=90)||event.keyCode==8||event.keyCode==32)
    {
        if(event.keyCode==8)
        {
            
            cname=cardHolderInput.value;
            cardHolder.value=cname;
            
            
            
        }
        else
        {
            cname = cname + event.key;
            cnameLength++;
            cardHolder.value=cname;
        }
        
    }
    else
    {
        return;
    }
    

});