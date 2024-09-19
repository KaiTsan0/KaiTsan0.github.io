// Countdown function
function countdown() {
  try {
    // Get Christmas Day and current date
    const christmasDay = new Date("December 26, 2024");
    const now = new Date();

    // Calculate time difference
    const timeDiff = christmasDay - now;

    // Extract days, hours, minutes, and seconds
    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

    // Format countdown text
    const countdownText = `Time until the flight: ${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`;

    // Update countdown element
    document.getElementById("countdown").innerHTML = countdownText;
  } catch (error) {
    console.error("Error calculating countdown:", error);
    // Handle error gracefully (e.g., display an error message)
  }
}

// Update countdown every second
setInterval(countdown, 1000);

// Initial countdown update
countdown();
