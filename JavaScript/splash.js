// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
    // Get the splash screen element
    const splashScreen = document.getElementById("splashScreen");

    // Get the close button element
    const closeButton = document.getElementById("closeButton");

    // Function to hide the splash screen and redirect to the main website
    function hideSplashScreen() {
        splashScreen.style.display = "none"; // Hide the splash screen
        // Redirect to the main website page
        window.location.href = "MainPage.html";
    }

    // Automatically hide the splash screen after 5 seconds
    setTimeout(hideSplashScreen, 4000);

    // Event listener for the close button to hide the splash screen
    closeButton.addEventListener("click", hideSplashScreen);
});
