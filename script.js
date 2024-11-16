let container = document.querySelector(".container");
let btn = document.getElementById("spin");

let options = ["10%", "20%", "0%", "75%", "5%", "1%"];
let sectionAngle = 360 / options.length; // Each section's angle

btn.onclick = function () {
    // Generate a random rotation angle for the spin
    let rotationAngle = Math.floor(Math.random() * 5000) + 1000;

    // Apply the rotation
    container.style.transform = `rotate(${rotationAngle}deg)`;

    // Wait for the rotation animation to complete
    setTimeout(() => {
        // Calculate the final angle within the 0-360 range
        let finalAngle = rotationAngle % 360;

        // Adjust the angle so 0 degrees is at the top
        let adjustedAngle = (360 - finalAngle + sectionAngle / 2) % 360;

        // Determine the winning section based on the adjusted angle
        let winningIndex = Math.floor(adjustedAngle / sectionAngle);
        let winner = options[winningIndex];

        // Display the winner using SweetAlert
        swal({
            title: "Congratulations!",
            text: `You Win: ${winner}`,
            icon: "success",
            button: "OK",
        });
    }, 5000); // Timeout matches the rotation animation duration
};
