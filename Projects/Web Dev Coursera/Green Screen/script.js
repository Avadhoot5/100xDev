// reference codepen - https://codepen.io/duketeam/pen/wzMGjg
let fgimage = null;
let bgimage = null;
let outputimage = null;
let outputcanvas = document.getElementById("canvas1");

function fgimageupload() {
    let fgcanvas = document.getElementById("canvas1");
    let fginput = document.getElementById("fgimage");
    fgimage = new SimpleImage(fginput);
    fgimage.drawTo(fgcanvas);
}

function bgimageupload() {
    let bgcanvas = document.getElementById("canvas2");
    let bginput = document.getElementById("bgimage");
    bgimage = new SimpleImage(bginput);
    bgimage.drawTo(bgcanvas);
}

function clearCanvas(){
    // if((fgimage == !null) || (bgimage == !null))
    let clear1 = document.getElementById("canvas1");
    let clear2 = document.getElementById("canvas2");
    let context1 = clear1.getContext("2d");
    let context2 = clear2.getContext("2d");
    context1.clearRect(0, 0, clear1.width, clear1.height);
    context2.clearRect(0, 0, clear2.width, clear2.height);
}

function greenScreen() {
    if(fgimage == null || !fgimage.complete()){
        alert("foreground not loaded");
    }
    if(bgimage == null || !bgimage.complete()){
        alert("background not loaded");
    }
    clearCanvas();
}

function green() {
    outputimage = new SimpleImage(fgimage.getWidth(),fgimage.getHeight())
    for (let pix of fgimage.values()){
        if (pix.getGreen() > (pix.getRed() + pix.getBlue())){
            let x = pix.getX();
            let y = pix.getY();
            let bgPixel = bgimage.getPixel(x,y);
            outputimage.setPixel(x,y,bgPixel);
        }
        else {
            outputimage.setPixel(pix.getX(),pix.getY(),pix);
        }
    }
    let outputcanvas = document.getElementById("canvas1");
    outputimage.drawTo(outputcanvas);
}



// function makeGray(){
//     for (let pix of image.values()) {
//         red = pix.getRed();
//         green = pix.getGreen();
//         blue = pix.getBlue();
//         let avg = ((red+green+blue)/3);
//         pix.setRed(avg);
//         pix.setGreen(avg);
//         pix.setBlue(avg);
        
//     }
//     let imgcanvas = document.getElementById("canvas2");
//     image.drawTo(imgcanvas);
// }