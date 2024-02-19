let image;

function upload() {
    // get canvas ID and create variable imgcanvas, image is stored in fileinput, and pass it into simpleimage function which stores the image in image variable, now draw the image variable onto imgcanvas
    let imgcanvas = document.getElementById("canvas1");
    let fileinput = document.getElementById("finput");
    image = new SimpleImage(fileinput);
    image.drawTo(imgcanvas);
}

function makeGray(){
    for (let pix of image.values()) {
        red = pix.getRed();
        green = pix.getGreen();
        blue = pix.getBlue();
        let avg = ((red+green+blue)/3);
        pix.setRed(avg);
        pix.setGreen(avg);
        pix.setBlue(avg);
        
    }
    let imgcanvas = document.getElementById("canvas2");
    image.drawTo(imgcanvas);
}