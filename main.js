function setup(){
canvas=createCanvas(200,250);
canvas.center();
background("white");
}
function preload(){

}
function draw(){
    strokeWeight(10);
    stroke(0);
    if(mouseIsPressed){
        line(10,10,100,100);
    }
}
function Cleancavas(){
    background("white");
}