document.getElementById("actionButton").addEventListener("click", function () {
    alert("Button clicked!");
});

// Get the current year
var currentYear = new Date().getFullYear();

// Update the footer with the current year
document.getElementById("currentYear").innerText = currentYear;
