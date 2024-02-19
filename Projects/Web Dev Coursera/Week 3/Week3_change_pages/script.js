function changecolor() {
    let dd1 = document.getElementById("d1");
    let dd2 = document.getElementById("d2");

    dd1.className = "yellowback";
    dd2.className = "blueback";
}

function changeText() {
    let dd1 = document.getElementById("d1");
    let dd2 = document.getElementById("d2");

    dd1.innerHTML = "Bonjour";
    dd2.innerHTML = "Tata Bye Bye"
}

function changestyle() {
    let dd3 = document.getElementById("d3");
    dd3.className = "stylecolor";
}
function changebutton() {
    let final = document.getElementById("test");
    final.value = "Final";
}