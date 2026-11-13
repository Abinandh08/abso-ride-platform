
/* =====================================
   ABSO RIDE - MAIN JAVASCRIPT
===================================== */

document.addEventListener("DOMContentLoaded", function () {

    console.log("ABSO RIDE PLATFORM LOADED!");

    // =================================
    // 1. BOOKING FORM
    // =================================

    const bookingForm = document.getElementById("bookingForm");

    if (bookingForm) {

        bookingForm.addEventListener("submit", function (event) {

            event.preventDefault();

            const pickup = document.getElementById("pickup").value.trim();
            const drop = document.getElementById("drop").value.trim();
            const vehicle = document.getElementById("vehicle").value;

            if (!pickup || !drop || !vehicle) {
                alert("Please complete all booking details.");
                return;
            }

            if (pickup.toLowerCase() === drop.toLowerCase()) {
                alert("Pickup and destination cannot be the same.");
                return;
            }

            const bookingId = "ABS" + Date.now().toString().slice(-8);

            alert(
                "BOOKING REQUEST SUCCESSFUL!\n\n" +
                "Booking ID: " + bookingId +
                "\nPickup: " + pickup +
                "\nDestination: " + drop +
                "\nVehicle: " + vehicle
            );

            bookingForm.reset();

        });

    }

    // =================================
    // 2. REGISTRATION FORM
    // =================================

    const registerForm = document.getElementById("registerForm");

    if (registerForm) {

        registerForm.addEventListener("submit", function (event) {

            event.preventDefault();

            const name = document.getElementById("fullName").value.trim();
            const email = document.getElementById("registerEmail").value.trim();
            const phone = document.getElementById("phone").value.trim();
            const password = document.getElementById("registerPassword").value;
            const confirmPassword = document.getElementById("confirmPassword").value;

            if (!name || !email || !phone || !password || !confirmPassword) {
                alert("Please fill in all fields.");
                return;
            }

            if (!/^[0-9]{10}$/.test(phone)) {
                alert("Please enter a valid 10-digit phone number.");
                return;
            }

            if (password.length < 8) {
                alert("Password must contain at least 8 characters.");
                return;
            }

            if (password !== confirmPassword) {
                alert("Passwords do not match. Please try again.");
                return;
            }

            alert(
                "Registration details validated successfully!\n\n" +
                "Welcome to Abso Ride, " + name + "!\n\n" +
                "Secure account creation will be available after backend integration."
            );

            registerForm.reset();

        });

    }

});
