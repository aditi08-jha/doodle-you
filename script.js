
function checkAnswer(page){

let answer;

if(page==1){

answer=document.getElementById("answer1").value.toLowerCase();

if(answer=="maroon"){

window.location="page2.html";

}else{

document.getElementById("msg").innerHTML="Wrong answer 😢 Try again baby";

}

}

if(page==2){

answer=document.getElementById("answer2").value.toLowerCase();

if(answer=="chicken"){

window.location="win.html";

}else{

document.getElementById("msg").innerHTML="Wrong answer 😭 Try again jaan";

}

}

}



function restart(){

window.location="index.html";

}



function showProposal(){

document.getElementById("proposal").style.display="block";

}



function yes(){

document.getElementById("result").innerHTML="YAYYYYY ❤️ I LOVE YOU SO MUCH 😭💍";

}



function moveNo(){

let btn=document.getElementById("noBtn");

let x=Math.random()*200-100;

let y=Math.random()*200-100;

btn.style.left=x+"px";

btn.style.top=y+"px";


}
