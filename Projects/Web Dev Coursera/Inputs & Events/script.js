function docolor() {
    let dd1 = document.getElementById("d1");
    let colorinput = document.getElementById("clr"); 
    let color = colorinput.value;
    dd1.style.backgroundColor = color;
}

// dosquare - take the input from slider, and pass the value to the fill rect function as a parameter.
function dosquare() {
    let dd1 = document.getElementById("d1");
    let inpt = document.getElementById("sldr");
    let slide = inpt.value;
    let cxt = dd1.getContext("2d");
    cxt.clearRect(0,0,dd1.width,dd1.height);
    cxt.fillStyle = "yellow";
    cxt.fillRect(10,10,slide,slide);
}