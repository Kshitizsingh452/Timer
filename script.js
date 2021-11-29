const dayse1=document.getElementById('day');
const hourse1=document.getElementById('hour');
const mine1=document.getElementById('min');
const sece1=document.getElementById('second');



const Birth='1 Jan 2022';
function countdown(){
    const Birthdate=new Date(Birth);
    const curr_date=new Date();
  
    const sec=new Date(Birthdate-curr_date)/1000;
    const days=Math.floor(sec/3600/24);
    const hours=Math.floor(sec/3600%24);
    const minutes=Math.floor(sec/60)%60;
    const seconds=Math.floor(sec%60);


   dayse1.innerHTML=format(days);
   hourse1.innerHTML=format(hours);
   mine1.innerHTML=format(minutes);
   sece1.innerHTML=format(seconds);


    

}

function format(time){
    return time<10?`0${time}`:time;
}

countdown();

setInterval(countdown,1000);
