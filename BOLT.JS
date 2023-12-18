let startbtn = document.getElementById("start");
let stopbtn = document.getElementById("stop");
let resetbtn = document.getElementById("reset");
let countbtn = document.getElementById("counter")
let niy = document.getElementById("niyi");
let ti = document.getElementById("pick").value;
let des = document.getElementById("desti").value;
let a = 0;
let k;
let message = document.getElementById('sta');

function mybolt(){
    ++a;
    let mm= parseInt(a/60);
    let ss = a%60;

    mm = (mm<10)? '0'+mm: mm;
    ss = (ss<10)? '0'+ss: ss;

    min.innerHTML=mm;
    sec.innerHTML =ss;

}
function count(){
     setInterval(mybolt, 1000);
   }

   function startcount(){
    count();
    resetbtn.style.display='none';
    startbtn.style.display='none';
    countbtn.style.display='inline-block';
    stopbtn.style.display='inline-block';
    sta.style.display='inline-block';
    
    message.innerHTML = "your pick up point is " + " " +ti + " " +
    "your destination is" + " " +des; 
   
   
    
}

function resetcount(){
            a=0;
            min.innerHTML='0'+0;
            sec.innerHTML='0'+0;
    startbtn.style.display='inline-block';
    stopbtn.style.display='none';
    niy.style.display = 'none';
    resetbtn.style.display='none';
    countbtn.style.display='none';
    sta.style.display='none';
    
    
    
}
startbtn.addEventListener('click', startcount);
stopbtn.addEventListener('click', stopcount);
resetbtn.addEventListener('click', resetcount);


function bolt1(){
    let base = document.getElementById("base").value;
    let time = document.getElementById("time").value
    let base1 = Number(base);
    let time1 = Number(time);
    let total= base1 + time1;
    document.getElementById("total").value = total;

}

function stopcount(){
    clearInterval(k);
    startbtn.style.display='none';
    stopbtn.style.display='none';
    niy.style.display = 'inline-block';
    resetbtn.style.display='inline-block';
    console.log(min);
    
    const base= 500;
    const h = 15;
    let b1 = Number(base);
    let h1 = Number(h);
    let time = b1 + h1 ;
    document.getElementById("time").value=time;
    
}





