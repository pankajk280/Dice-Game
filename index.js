var rndm1=Math.floor(Math.random()*6)+1;
//var imagesArray=["images/dice1.png","images/dice2.png","images/dice3.png","images/dice4.png","images/dice5.png","images/dice6.png"];
//var imagesy=imagesArray[rndm1];
var dice="images/dice"+rndm1+".png";
document.querySelectorAll("img")[0].setAttribute("src",dice);

var rndm2=Math.floor(Math.random()*6)+1;
var dice2="images/dice"+rndm2+".png";
document.querySelectorAll("img")[1].setAttribute("src",dice2);
if(rndm1>rndm2){
    document.querySelectorAll("h1")[0].innerHTML="Player 1 Wins!";
}
else if(rndm2>rndm1){
    document.querySelectorAll("h1")[0].innerHTML="Player 2 Wins!";
}
else{
    document.querySelectorAll("h1")[0].innerHTML="Draw!";
}