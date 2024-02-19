function cube(x) {
    let ans = x * x * x;
    return ans;
}
let y = cube(4);

//Write a function that adds three numbers together

function three(x, y, z) {
    let add = x + y + z;
    return add;
}
let ans = three(1, 32, 42);
print(ans);

//Write a function that adds two strings.Remember that addings strings means concatenating, so “a” + “b” is “ab” and “b” + “a” is “ba”.

function str(x, y) {
    let stradd = x + y;
    return stradd;
}

let z = str("Hello", " World!");
print(z);

//Write a function that prints the width and height of an image.

let image = new SimpleImage("xyz.png")
let x = image.getHeight();
let y = image.getWidth();
print(x, y);

// Number of pixels in an image

function numberPixels(namefile) {
    var someImg = new SimpleImage(namefile);
    var height = someImg.getHeight();
    var width = someImg.getWidth();
    let ans = height * width;
    return ans;
}

var result = numberPixels("chapel.png");
print(result);
result = numberPixels("dinos.png");
print(result);

// Perimeter of an image

function perimeter(imageName) {
    let image = new SimpleImage(imageName);
    let w = image.getWidth();
    let h = image.getHeight();
    let ans = (2 * w) + (2 * h);
    return ans;
}

let result = perimeter("rodger.png");
print(result);
result = perimeter("dinos.png");
print(result);

// Print the RGB values of a pixel

function printPixel(namefile, xpos, ypos) {
    let image = new SimpleImage(namefile);
    let r = image.getRed(xpos, ypos);
    let g = image.getGreen(xpos, ypos);
    let b = image.getBlue(xpos, ypos);
    print("Red is: " + r);
    print("Red is: " + g);
    print("Red is: " + b);
}

printPixel("drewgreen.png", 10, 10);
printPixel("drewgreen.png", 250, 500);

//Sum of the RGB values for a Pixel


//Make a yellow square that is 200 pixels wide and 200 pixels high

let img = new SimpleImage(200, 200);
for (let pix of img.values()) {
    let red, green, blue;
    red = pix.setRed(255);
    green = pix.setGreen(255);
    blue = pix.setBlue(0);
}
print(img);

// write your code here
let image = new SimpleImage("chapel.png");
let h = image.getHeight();
let w = image.getWidth();
for (let pix of image.values()) {
    if (pix.getX() <= 50) {
        if (pix.getY() <= 50) {
            pix.setGreen(255);
            pix.setRed(0);
            pix.setBlue(0);
        }
    }
}
print(image);

// Exercise 6 - Rectangle of any color in top right corner

function topRightCorner(cornerWidth, cornerHeight, someImage, red, green, blue) {
    let image = new SimpleImage(someImage);
    let width = image.getWidth();
    let height = image.getHeight();
    for (let pix of image.values()) {
        if (pix.getX() >= width - cornerWidth && pix.getY() <= cornerHeight) {
            pix.setRed(red);
            pix.setGreen(green);
            pix.setBlue(blue);
        }
    }
    return image;
}
var picture = new SimpleImage("chapel.png")
let result = topRightCorner(30, 60, picture, 255, 255, 0)
print(result);
var picture2 = new SimpleImage("smalllion.jpg");
let result2 = topRightCorner(125, 20, picture2, 255, 0, 0)
print(result2);

//exercise 7

function changeRed(width, height) {
    let image = new SimpleImage(width, height);
    let red = 0;
    for (let pix of image.values()) {
        pix.setGreen(0);
        pix.setBlue(0);
        pix.setRed(red);
        red = red + 1;
        if (red > 255) {
            red = 0;
        }
    }
    return image;
}

var result = changeRed(256, 200);
print(result);

//Programming Exercise: Modifying Images

let image = new SimpleImage("hilton.jpg");
let width = image.getWidth();
for (let pix of image.values()) {
    if (pix.getX() < (width / 3)) {
        pix.setRed(255);
    }
    if ((pix.getX() > (width / 3)) && (pix.getX() < ((width * 2) / 3))) {
        pix.setGreen(255);
    }
    if (pix.getX() > (width * 2) / 3) {
        pix.setBlue(255);
    }
}
print(image);

// Implementing the Green Screen Algorithm

let fgImage = new SimpleImage();
let bgImage = new SimpleImage();
let outputImage = new SimpleImage(fgImage.getWidth(), fgImage.getHeight());
for (let pix of fgImage.values()) {
    if (pix.getGreen() > (pix.getRed() + pix.getBlue())) {
        let x = pix.getX();
        let y = pix.getY();
        let bgPixel = bgImage.getPixel(x, y);
        outputImage.setPixel(x,y,bgPixel) 
    }
    else {
        outputImage.setPixel(pix.getX(), pix.getY(), pix);
    }
}
print(outputImage); 

// Programming Exercise: Advanced Modifying Images

var img = new SimpleImage(200, 200);
for (var px of img.values()) {
    var x = px.getX();
    var y = px.getY();
    if (x < img.getWidth() / 2) {
        px.setRed(255);
    }
    if (y > img.getHeight() / 2) {
        px.setBlue(255);
    }
    if (x >= img.getWidth() / 2 && y <= img.getHeight() / 2) {
        px.setGreen(255);
    }
}
print(img);

// Adding border to Image

// function setBlack(pixel){
//     pix.setRed(0);
//     pix.setGreen(0);
//     pix.setBlue(0);
//     return pixel;
// }

function addBorder(image, thickness) {
    let img = new SimpleImage(image);
    let x = img.getWidth();
    let y = img.getHeight();
    for (let pix of img.values()) {
        if ((pix.getX() < thickness) || (pix.getX() > x - thickness)) {
            pix.setRed(0);
            pix.setGreen(0);
            pix.setBlue(0);
        }
        if ((pix.getY() < thickness) || (pix.getY() > y - thickness)) {
            pix.setRed(0);
            pix.setGreen(0);
            pix.setBlue(0);
        }
    }
    return img;
}
let picture = new SimpleImage("smallpanda.png");
let result = addBorder(picture, 8);
print(result);
