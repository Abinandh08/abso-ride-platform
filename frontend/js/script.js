
/* =================================
   ABSO RIDE - MAIN JAVASCRIPT
================================= */

// Wait until the page loads
document.addEventListener("DOMContentLoaded", function () {

    console.log("Abso Ride Platform Loaded Successfully!");

    // Welcome message
    const heading = document.querySelector("header h1");

    if (heading) {
        console.log("Welcome to " + heading.textContent);
    }

    // Main booking section
    const bookingSection = document.querySelector("main h2");

    if (bookingSection) {
        bookingSection.addEventListener("click", function () {
            alert("Welcome to Abso Ride! Ride booking feature coming soon.");
        });
    }

});
