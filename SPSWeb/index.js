// You can add JavaScript functionality here if needed
document.getElementById("registrationForm").addEventListener("submit", function (event) {
    // Handle registration form submission
    event.preventDefault();
    // You can add your registration logic here
});

document.getElementById("contactForm").addEventListener("submit", function (event) {
    // Handle contact form submission
    event.preventDefault();
    // You can add your contact form logic here
});
// Add this JavaScript code to your existing script.js file

document.addEventListener("DOMContentLoaded", function () {
    var dropdownButton = document.querySelector(".dropbtn");
    var dropdownContent = document.querySelector(".dropdown-content");

    // Toggle the visibility of the dropdown content
    function toggleDropdown() {
        dropdownContent.style.display = (dropdownContent.style.display === "block") ? "none" : "block";
    }

    // Close the dropdown if the user clicks outside of it
    window.addEventListener("click", function (event) {
        if (!event.target.matches('.dropbtn')) {
            dropdownContent.style.display = 'none';
        }
    });

    // Attach the toggleDropdown function to the button click event
    dropdownButton.addEventListener("click", function (event) {
        event.stopPropagation(); // Prevent the window click event from firing
        toggleDropdown();
    });
});
