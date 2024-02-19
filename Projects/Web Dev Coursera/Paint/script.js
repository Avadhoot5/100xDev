// My Code

// function textwidth() {
//     let w = document.getElementById("textwidth");
//     let w1 = w.value;
//     return w1;
// }
// function textheight() {
//     let h = document.getElementById("textheight");
//     let h1= h.value;
//     return h1;
// }

// function canvas(){
//     let dd1 = document.getElementById("d1");
//     let cxt = dd1.getContext("2d");
//     cxt.fillStyle = "yellow";
//     cxt.fillRect(0,0,textwidth(),textheight())
    
// }

let paintcanvas = document.getElementById("canvas1");
let context = paintcanvas.getContext("2d");
let color = 'black';
let radius = 50;
// only paint if mouse is being dragged (moved while the button is pressed)
let isPainting = false;

function setWidth (value) {
    if(isNumeric(value)){
        paintcanvas.width = value;
    } else {
        console.log("The value is not numeric");
    }
}
function setHeight (value) {
    if(isNumeric(value)){
        paintcanvas.height = value;
    } else {
        console.log("The value is not numeric");
    }
}

function togglePaint() {
    isPainting = !isPainting;
}

function doPaint(x,y){
    if(isPainting)  {
        paintCircle(x,y);
    }
}
function clearCanvas () {
    context.clearRect(0, 0, paintcanvas.width, paintcanvas.height);
}

function paintCircle (x, y) {
    // make sure to start a new circle each time
    context.beginPath();
    // draw circle using a complete (2*PI) arc around given point
    context.arc(x, y, radius, 0, Math.PI * 2, true);
    context.fillStyle = color;
    context.fill();
}

// verify the given value is actually a number
function isNumeric (value) {
    // standard JavaScript function to determine whether a string is an illegal number (Not-a-Number)
    return !isNaN(value);
}

function changeColor(newColor){
    color = newColor;
}

function resizeBrush(newSize){
    radius = newSize;
    document.getElementById("sizeOutput").value = newSize;
}
