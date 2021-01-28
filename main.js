canvas=document.getElementById("canvas1");
ctx=canvas.getContext("2d");

var arrayImages=["Marsimg1.jpg" , "Marsimg2.jpg" , "Marsimg3.jpg" , "Marsimg4.jpg"] /*Array always in SQUARE BRACKETS */
var randomNumber=Math.floor(Math.random()*4);

roverWidth=100;
roverHeight=90;
roverX=10;
roverY=10;
backgroundImage= arrayImages[randomNumber];
roverImage="rover.png";

function add(){
    backgroundImageTag=new Image();  /*newImage() is a prebuilt JS CLASS */
    backgroundImageTag.onload=uploadBackground;
    backgroundImageTag.src=backgroundImage;

    roverImageTag=new Image();
    roverImageTag.onload=uploadRover;
    roverImageTag.src=roverImage;
}

function uploadBackground(){
    ctx.drawImage(backgroundImageTag,0,0,canvas.width,canvas.height);
}

function uploadRover(){
    ctx.drawImage(roverImageTag,roverX,roverY,roverWidth,roverHeight);/*roverX,y,Width,Height are all variables*/
}

window.addEventListener("keydown",myKeyDown)
function myKeyDown(e){
    keypress=e.keyCode;
    if(keypress=='38'){
        up()
    }

    if(keypress=='39'){
        right()
    }

    if(keypress=='37'){
        left()
    }

    if(keypress=='40'){
        down()
    }
}

function up(){
    if(roverY>0){
        roverY-=10;
        console.log("When Up is pressed" + roverX + "-" + roverY);
        uploadBackground(); /*CALLING A FUNCTION*/ 
        uploadRover();
    }
}

function down(){
    if(roverY<500){
        roverY+=10;
        console.log("When Down is pressed" + roverX + "-" + roverY);
        uploadBackground(); /*CALLING A FUNCTION*/ 
        uploadRover();
    }
}

function right(){
    if(roverX<700){
        roverX+=10;
        console.log("When Right is pressed" + roverX + "-" + roverY);
        uploadBackground(); /*CALLING A FUNCTION*/ 
        uploadRover();
    }
}

function left(){
    if(roverX>0){
        roverX-=10;
        console.log("When Left is pressed" + roverX + "-" + roverY);
        uploadBackground(); /*CALLING A FUNCTION*/ 
        uploadRover();
    }
}
