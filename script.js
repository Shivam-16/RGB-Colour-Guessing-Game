var colors = generateRandomColors(6);
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var pickedColor = pickColor();
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");

easyBtn.addEventListener("click",function(){
    easyBtn.classList.add("selected");
    hardBtn.classList.remove("selected");
    colors = generateRandomColors(3) ;
    pickedColor = pickColor() ;
    colorDisplay.textContent = pickedColor;

    for(var i=0 ;i<squares.length ; i++){
        if(colors[i]){
            squares[i].style.background = colors[i];
        } else {
            squares[i].style.display = "none" ;
        }
    }
})
hardBtn.addEventListener("click",function(){
    hardBtn.classList.add("selected");
    easyBtn.classList.remove("selected");
    colors = generateRandomColors(6) ;
    pickedColor = pickColor() ;
    colorDisplay.textContent = pickedColor;

    for(var i=0 ;i<squares.length ; i++){
        squares[i].style.backgroundColor = colors[i];
        squares[i].style.display = "block" ;
    }
})
resetButton.addEventListener("click",function(){
    //generate all new colors
    colors = generateRandomColors(6);


    //pick a new random color from array
    pickedColor = pickColor() ;

    //change clorDisplay to match picked Color
    colorDisplay.textContent = pickedColor ;
    //change colors of squares
    for(var i=0 ; i<squares.length ; i++){
        squares[i].style.backgroundColor = colors[i] ;
    }
    h1.style.background = "steelblue" ;


})
colorDisplay.textContent = pickedColor ;
for( var i =0 ;i< squares.length ; i++)
{
    //ADD INITIAL COLOR TO SQUARES
    squares[i].style.backgroundColor = colors[i];

    //add click listeners to squares
    squares[i].addEventListener("click",function(){
    //grab color of clicked square
    var clickedColor = this.style.backgroundColor ;

    //compare color of clicked square
    if(clickedColor == pickedColor){
    messageDisplay.textContent = "Correct";
    changeColors(pickedColor);
    h1.style.backgroundColor=pickedColor ;
    resetButton.textContent = "Play Again ?";
        }
    else {
        this.style.backgroundColor = '#232323';
        messageDisplay.textContent = "Try again";
    }
    });
    function changeColors(color){
        //loop through all square
        for(var i=0 ; i<squares.length ; i++)
        {
            squares[i].style.backgroundColor = color ;
        }
        //change each color to match a given color
    }  
}
function pickColor()
{
    var random = Math.floor(Math.random() * colors.length) ;
    return colors[random];
}
function generateRandomColors(num){
    //make an array 
    var arr = [] ;

    //repaeat num times
    for(var i =0 ; i<num ; i++)
    {
        //get random color and push into array
        arr.push(randomColor()) ;
    }
    //return that array
    return arr ;
}
function randomColor() {
    //pic a "red" from 0-255
    var r = Math.floor(Math.random() * 256);
    //pick a "green" from 0-255
    var g = Math.floor(Math.random() * 256);
    //pick a "blue" from 0 - 255
    var b = Math.floor(Math.random() * 256);
    "rgb(r,g,b)"
    return "rgb(" + r + ", " + g + ", " + b + ")" ;
}
