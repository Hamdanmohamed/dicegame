var randomNumber = Math.floor(Math.random()*6)+1;
var dice="dice"+randomNumber+".png"
var randomimg="images/" + dice
var img1=document.querySelectorAll("img")[0];
img1.setAttribute("src",randomimg)


var randomNumber2 = Math.floor(Math.random()*6)+1;

var randomimg2="images/dice" + randomNumber2 + ".png"
var img1=document.querySelectorAll("img")[1];
img1.setAttribute("src",randomimg2)


if(randomNumber>randomNumber2){
    document.querySelector("h1").innerHTML="player 1 win";
}
else if(randomNumber2>randomNumber){
    document.querySelector("h1").innerHTML="player 2 win";
}


else{
    document.querySelector("h1").innerHTML="draw!!!!!"
}
