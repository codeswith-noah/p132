status = "";
string = "Detecting Objects"
function preload(){

}

function setup(){
    canvas = createCanvas(640, 420);
    canvas.center();
    document.getElementById("SOM").innerHTML = string + ".";
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
}

function modelLoaded(){
    console.log("Model Loaded");
    status = true;
    objectDetector.detect(img, gotResults);
}

function gotResults(error, results){
    if(error != true){
        console.log(results);
    }
}

function draw(){
}