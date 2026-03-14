// Get the elements
var modal = document.getElementById("availModal");
var btn = document.getElementById("availBtn");
var span = document.getElementsByClassName("close-btn")[0];

// When the user clicks the button, open the modal 
btn.onclick = function(e) {
    e.preventDefault(); // Prevents page jumping
    modal.style.display = "block";
}

// When the user clicks on (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}