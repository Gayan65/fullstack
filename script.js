document.getElementById("actionButton").addEventListener("click", function () {
    // alert("Button clicked!");
    var paragraph = document.getElementById("description");
    // Calling the function
    toggleVisibility(paragraph);
});

// Get the current year
var currentYear = new Date().getFullYear();

// Update the footer with the current year
document.getElementById("currentYear").innerText = currentYear;

//Function for the toggle visibility
function toggleVisibility(paragraph) {
    if (window.getComputedStyle(paragraph).display === "none") {
        paragraph.style.display = "block";
    } else {
        paragraph.style.display = "none";
    }
}
