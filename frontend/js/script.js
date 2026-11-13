
document.addEventListener("DOMContentLoaded", function () {

    console.log("ABSO RIDE JAVASCRIPT LOADED!");

    const bookingForm = document.getElementById("bookingForm");

    if (!bookingForm) {
        console.error("Booking form not found!");
        return;
    }

    console.log("Booking form found successfully!");

    bookingForm.addEventListener("submit", function (event) {

        event.preventDefault();

        console.log("BOOK NOW BUTTON CLICKED!");

        const pickup = document.getElementById("pickup").value.trim();
        const drop = document.getElementById("drop").value.trim();
        const vehicle = document.getElementById("vehicle").value;

        if (!pickup || !drop || !vehicle) {
            alert("Please fill in all booking details.");
            return;
        }

        if (pickup.toLowerCase() === drop.toLowerCase()) {
            alert("Pickup and destination cannot be the same.");
            return;
        }

        const bookingId = "ABS" + Date.now().toString().slice(-8);

        alert(
            "ABSO RIDE BOOKING SUCCESSFUL!\n\n" +
            "Booking ID: " + bookingId +
            "\nPickup: " + pickup +
            "\nDestination: " + drop +
            "\nVehicle: " + vehicle
        );

        bookingForm.reset();

    });

});
