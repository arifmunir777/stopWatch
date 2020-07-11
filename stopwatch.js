
let min=0;
let sec=0;
let ms=0;

let minHeading=document.getElementById("min");
let SecondHeading=document.getElementById("sec");
let msHeading=document.getElementById("ms");
console.log(msHeading)

let interval;

function timer()
{
    ms++;
    msHeading.innerHTML=ms;  
    if(ms>=100)
    {
        sec++;
        SecondHeading.innerHTML=sec;
        ms=0;
       if(sec>=60)
       {
           min++;
           minHeading.innerHTML=min++;
           sec=0;
       } 
    }
}


 function start()
 {
    interval=setInterval(timer,10);
 }

 function stop()
 {
     clearInterval(interval);
 }

 function reset()
 {
     min=0;
     sec=0;
     ms=0;
     minHeading.innerHTML=min;
     SecondHeading.innerHTML=sec;
     msHeading.innerHTML=ms;

 }