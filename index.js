var randomNumber1 = Math.floor( Math.random() * 6) + 1; //1-6

var randomDiceImage = "dice-" + randomNumber1 + ".jpg"; //dice1.png - dice6.png
 
var randomImageSource = "Images/" + randomDiceImage;  //Images/dice-1.png - Images/dice-6.png

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);  //here 1st parameter is the think that want o change and the secong is the with what value you want to change.


var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImageSource2 = "Images/dice-" + randomNumber2 + ".jpg";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "Player 1 Wins!🚩";
}

else if (randomNumber2 > randomNumber1){
    document.querySelector("h1").innerHTML = "Player 2 Wins!🚩";
}
else{
    document.querySelector("h1").innerHTML = "Draw!";
}


 

 