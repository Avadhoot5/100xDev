// To change color of the canvas
// function changeColor() {
//     let dd1 = document.getElementById("d1");
//     let dd2 = document.getElementById("d2");
//     dd1.className = "blue";
//     dd2.className = "orange";
// }


//Making red and green colours

function red() {
    let dd1 = document.getElementById("d1");
    dd1.style.backgroundColor = "red";
    let cxt = dd1.getContext("2d");
    cxt.fillStyle= "yellow";
    cxt.fillRect(10,10,40,40);
    cxt.fillStyle="black";
    cxt.font="15px Roboto";
    cxt.fillText("Hello",15,25);
}

function green() {
    let dd2 = document.getElementById("d2");
    dd2.style.backgroundColor = "green";
    let ddclear = document.getElementById("d1");
    let cxt = ddclear.getContext("2d");
    cxt.clearRect(0,0,200,100);
}




// function clear not working debug later.
//need to add clear method for rectangle - cxt.clearRect(0,0,200,100);
// function clear() {
//     // let dd1 = document.getElementById("d1");
//     // let dd2 = document.getElementById("d2");
//     // dd1.className = "clear";
//     // dd2.className = "clear";
//     let d1 = document.getElementById("d1");
//     let d2 = document.getElementById("d2");
//     d1.className = "clear";
//     d2.className = "clear";
// }