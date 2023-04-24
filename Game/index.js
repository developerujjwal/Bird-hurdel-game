var life = 5;
function ujjwal(){
    
if (life==0){
    
}
else{
    life=life-1;
    document.querySelector("h2").innerText="LIFE"+life;
    if (life==0){
        document.querySelector("button").classList.remove("st");
        document.querySelector(".go").classList.add("go1");
        for(let i=0;i<8;i++){
        document.querySelectorAll("marquee")[i].stop();
        }
    }
}
}

document.querySelector("button").addEventListener('click',function(){
    life=6;
    ujjwal();
    document.querySelector(".BTN").classList.add("st");
    document.querySelector(".go").classList.remove("go1");
    for(let i=0;i<8;i++){
        document.querySelectorAll("marquee")[i].start();
        }
});

for (let i=0;i<8;i++){
    document.querySelectorAll(".hurdel")[i].innerHTML='<img src="cloud1.png" height="90" width="90">';

    }