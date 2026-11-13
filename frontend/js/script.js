
/* =====================================
   ABSO RIDE - BOOKING SYSTEM
===================================== */

document.addEventListener("DOMContentLoaded", function () {

    console.log("Abso Ride Platform Loaded!");

    // Get booking form
    const bookingForm = document.getElementById("bookingForm");

    // Handle booking submission
    if (bookingForm) {

        bookingForm.addEventListener("submit", function (event) {

            // Prevent page refresh
            event.preventDefault();

            // Get user input
            const pickup = document.getElementById("pickup").value.trim();
            const drop = document.getElementById("drop").value.trim();
            const vehicle = document.getElementById("vehicle").value;

            // Validate inputs
            if (!pickup || !drop || !vehicle) {
                alert("Please complete all booking details.");
                return;
            }

            // Prevent same pickup and destination
            if (pickup.toLowerCase() === drop.toLowerCase()) {
                alert("Pickup and destination cannot be the same.");
                return;
            }

            // Generate temporary booking reference
            const bookingId = "ABS" + Date.now().toString().slice(-8);

            // Display confirmation
            alert(
                "Booking Request Submitted Successfully!\n\n" +
                "Booking ID: " + bookingId + "\n" +
                "Pickup: " + pickup + "\n" +
                "Destination: " + drop + "\n" +
                "Vehicle: " + vehicle + "\n\n" +
                "Thank you for choosing Abso Ride!"
            );

            // Clear form
            bookingForm.reset();

            console.log("Booking request:", {
                bookingId,
                pickup,
                drop,
                vehicle
            });

        });

    }

});
