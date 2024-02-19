function dochange() {
    alert('The button is clicked');
}

function option() {
    confirm("Are You Sure? ");
    let choice;
        if (confirm() == true) {
            choice = "You pressed OK!";
            }
        else {
            choice = "Are you sure you want to cancel?";
            }
    alert(choice);
}