let tensEl = document.getElementById("tens");
let secEl = document.getElementById("seconds");
let reset = document.querySelectorAll(".btn")[0];
let stopp = document.querySelectorAll(".btn")[1];
let start = document.querySelectorAll(".btn")[2];

let ten = 0;
let seconed = 0;
let myInerval;

function startTimer(){
    ten++;
    if(ten<=9)
        tensEl.innerText = "0"+ten;
    
    else if(ten<100)
        tensEl.innerText = ten;
    
    else{
        ten = 0;
        seconed++;
        if(seconed<10)
            secEl.innerText = "0"+seconed;
        
        else
            secEl.innerText = seconed;
    }
}


start.addEventListener("click",()=>{
    clearInterval(myInerval);
    myInerval=setInterval(startTimer,10)
})

stopp.addEventListener("click",()=>{
    clearInterval(myInerval);
})

reset.addEventListener("click",()=>{
    clearInterval(myInerval);
    ten=0;
    seconed=0;
    tensEl.innerText = "00";
    secEl.innerText = "00";
})
