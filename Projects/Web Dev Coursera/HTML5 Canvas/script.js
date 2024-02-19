function lime() {
    let d1 = document.getElementById("d1");
    d1.style.backgroundColor = 'lime';
}
function yellow() {
    let d2 = document.getElementById("d1");
    d2.style.backgroundColor = 'white';
    let ctx = d2.getContext("2d");
    ctx.fillStyle = "yellow";
    ctx.fillRect(10, 10, 40, 40);
    ctx.fillRect(60, 10, 40, 40);
    ctx.fillStyle = "black";
    ctx.font = "30px Roboto"
    ctx.fillText("Hello", 10, 80);
}