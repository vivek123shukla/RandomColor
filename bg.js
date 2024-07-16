let randomNumber=function(){
    let hax='0123456789ABCDEF';
    let color='#';
    for(let i=0;i<6;i++){
        color+=hax[Math.floor(Math.random()*16)];
    }
    return color;
}

let start=document.querySelector('#start');
let stop=document.querySelector('#stop');

let startcolor=function(){
    document.body.style.backgroundColor=randomNumber();
}
let breakinterval;
start.addEventListener('click',function(){
    if(!breakinterval){
   breakinterval= setInterval(startcolor,500);
    }
})
stop.addEventListener('click',function(){
    clearInterval(breakinterval);
    breakinterval=null;
})