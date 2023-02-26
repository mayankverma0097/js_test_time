t=document.getElementById('time');




setInterval(show,1000);
let a;
let date;
let time;

function show()
{ 
    a=new Date();
    date=a.toLocaleDateString();
    time=a.getHours()+":"+a.getMinutes()+":"+a.getSeconds();
    console.log("interval executed");
    t.innerHTML=time+" on "+date;

}
