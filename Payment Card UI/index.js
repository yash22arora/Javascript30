let cardNumberInput = document.getElementById("cardNumberInput");
let cardNumber = document.getElementById("cardNumber");

$("#visa").fadeOut(1);
$("#mastercard").fadeOut(1);

let cardHolderInput = document.getElementById("cardHolderInput");
let cardHolder = document.getElementById("cardHolderName");

cardNumberInput.addEventListener('input', updateNumber);
cardHolderInput.addEventListener('input', updateName);

const submitBtn = document.getElementById("submit");

submitBtn.addEventListener("click",function(e){
    e.preventDefault();
});

let i=0;
let cnumber="";
function updateNumber(e) {

    if(!isNaN(e.data)||e.data==null)
    {
        
        cnumber=cardNumberInput.value;
        let length=cnumber.length;
        if(length==4||length==9||length==14)
        {
            cnumber=cnumber+' ';
        }

        cardNumberInput.value=cnumber;
        cardNumber.value = cardNumberInput.value;
        

        console.log(cnumber.length);
        
        if(length==1)
            showNetwork(cnumber);
        if(length==0)
        {
            $("#visa").fadeOut(1);
            $("#mastercard").fadeOut(1);
        }
        
    }
    else
    {
        console.log("Not a number");
        cardNumberInput.value=cnumber;
        return;
    }

    
}

function updateName(e)
{
    cardHolder.value=e.target.value;
}

function showNetwork(integer)
{
    
    if(integer==4)
    {
        $("#mastercard").fadeOut(200, "swing");
        $("#visa").fadeIn(400, "swing");
        
    }
    if(integer==5)
    {
        $("#visa").fadeOut(200, "swing");
        $("#mastercard").fadeIn(400, "swing");
    }
}