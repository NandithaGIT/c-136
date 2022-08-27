status = "";

function setup(){
    canvas = createCanvas(450,450);
    canvas.position(900,400);
    video = createCapture(VIDEO);
    video.hide();
}

function start(){
    ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Detecting Objects";
    input = document.getElementById("inp").value;
    console.log(input);
}

function modelLoaded(){
    console.log("model Loaded!");
    status = true;
}

function draw(){
    image(video,0,0,450,450);
}
