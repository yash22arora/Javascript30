let cardNumberInput = document.getElementById("cardNumberInput");
let cardNumber = document.getElementById("cardNumber");

cardNumberInput.addEventListener('input', updateNumber);

let i=0;
let cnumber="";
function updateNumber(e) {

    console.log(e);
    if(!isNaN(e.data)||e.data==null)
    {
        if(i%4==0&&i!=0)
        {
            e.target.value=e.target.value + "-";
        }
        
        if((e.data>-1&&e.data<10))
            i++;

        else if(e.data==null)
        {
            if(i>0)
            --i;
            cnumber=cnumber.slice(0, cnumber.length-1);
            
        }
        
        cardNumber.value = e.target.value;
        cnumber=cardNumber.value;
    }
    else
    {
        console.log("Not a number");
        cardNumberInput.value=cnumber;
        return;
    }

  
}