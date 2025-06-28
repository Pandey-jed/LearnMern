const countDisplay=document.getElementById("count");
const incrementBtn=document.getElementById("increment");
const decrementBtn=document.getElementById("decriment");
const resetBtn=document.getElementById("reset");


let count=0;

function updateDisplay(){
    countDisplay.textContent=count;
}

incrementBtn.addEventListener("click" ,()=>{
    if(count==100){
        alert("No more increment please !");
    }else{
        count++;
    updateDisplay();
    }
    
});


decrementBtn.addEventListener("click",()=>{
    if(count<=0){
        alert("No more decrement please !");
    }else{
        count--;
    updateDisplay();
    }
});

resetBtn.addEventListener("click",()=>{
    count=0;
    updateDisplay();
});
