var randomno1 =Math.floor(Math.random()*6)+1;

var randomdiceing="dice"+randomno1+".png";//dice1.png-dice6.png
var image="images/"+randomdiceing;//images/dice1.png-images/dice6.png
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",image)


var randomno2=Math.floor(Math.random()*6)+1;

var randomdiceing1="dice"+randomno2+".png";
var image2="images/"+randomdiceing1;
var image3=document.querySelectorAll("img")[1];
image3.setAttribute("src",image2)

if(randomno1>randomno2){
    document.querySelector("h1").innerHTML="🚩player 1 wins";
}
else if(randomno2>randomno1){
    document.querySelector("h1").innerHTML="player 2 wins 🚩";

}
else{
    document.querySelector("h1").innerHTML="draw!";

}


