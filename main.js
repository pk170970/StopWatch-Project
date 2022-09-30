
// Method-1 


// const start = document.getElementById("start");
// const stops = document.getElementById("stop");
// const reset = document.getElementById("reset");
// let time = document.getElementById("time");

// let timeContent = time.textContent;

// let sec =0;
// let interval=null;

// // Event listeners 
// start.addEventListener("click",starter);
// stops.addEventListener("click", stopper);
// reset.addEventListener("click",reseter);

// // generating  time function 
// function timer(){
//     let hours= Math.floor(sec/3600);
//     sec = sec %  3600;
//     let minutes= Math.floor(sec/60);
//     let second= sec % 60;
//     ++sec;

//     if(hours < 10) hours= '0'+hours;
//     if(minutes < 10) minutes= '0'+minutes;
//     if(second < 10) second= '0'+second;
//     time.innerText= `${hours}:${minutes}:${second}`;
// }


// // calling timer every second with this function

// function starter(){
//     if(interval){
//         return;
//     }
//     // interval= setInterval(timer,20); //we can make a stop watch with just min and sec
//     interval= setInterval(timer,1000); // we can make a stop watch with  min , sec and hour
// }

// function stopper() {
//     clearInterval(interval);
//     interval= null;
// }

// function reseter(){
//     stopper();
//     sec=0;
//     time.innerText= "00:00:00";
// }



// // Method-2 

const start = document.getElementById("start");
const stops = document.getElementById("stop");
const reset = document.getElementById("reset");
let second = document.getElementById("sec");
let miliSecond = document.getElementById("mili");
let time= document.getElementById("time");


let miliSec =0;
let sec=0;
let interval=null;

//Adding Event Listeners for start, stop and reset button
start.addEventListener("click",()=>{
    clearInterval(interval);
    interval= setInterval(timer,15);
});

stops.addEventListener("click",()=>{
    clearInterval(interval);
});


reset.addEventListener("click",()=>{
    clearInterval(interval);
    miliSec= "00";
    sec="00";
    miliSecond.textContent=miliSec;
    second.textContent=sec;
});



function timer(){
    miliSec++;

    if(miliSec < 9){
        miliSec= "0" + miliSec;
        miliSecond.textContent= miliSec;
    }

    if(miliSec>9){
        miliSecond.textContent= miliSec;
    }

    if(miliSec>99){
        sec++;
        second.textContent= "0" + sec;
        miliSec=0;
        miliSecond.textContent= "0" + miliSec;
    }

    if(sec>9){
        second.textContent= sec;
    }
}