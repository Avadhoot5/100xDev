let fileinput = document.getElementById("upload");
let imagecanvas = document.getElementById("canvas1");
let image;

function upload() {
    image = new SimpleImage(fileinput);
    image.drawTo(imagecanvas);
}

function greyScale() {
    for (let pix of image.values()){
        let avg = ((pix.getGreen()+pix.getRed()+pix.getBlue())/3);
        pix.setRed(avg);
        pix.setGreen(avg);
        pix.setBlue(avg);
    }
    image.drawTo(imagecanvas);
}

function red() {
    for (let pix of image.values()){
        pix.setRed(255);
    }
    image.drawTo(imagecanvas);
}

function resetImage() {
    upload();
}