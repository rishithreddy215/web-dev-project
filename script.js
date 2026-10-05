// Get the theme button
const themeButton = document.getElementById("themeToggle");

// Check if a theme was already saved
const savedTheme = localStorage.getItem("portfolio-theme");


// If dark theme was saved earlier,
// apply it when the page opens

if (savedTheme === "dark") {

    document.body.classList.add("dark-theme");

    themeButton.textContent = "☀️";
}


// When the button is clicked

themeButton.addEventListener("click", function () {

    // Add or remove the dark-theme class
    document.body.classList.toggle("dark-theme");


    // Check whether dark mode is active

    const isDark =
        document.body.classList.contains("dark-theme");


    // Save the selected theme

    if (isDark) {

        localStorage.setItem(
            "portfolio-theme",
            "dark"
        );

        themeButton.textContent = "☀️";

    } else {

        localStorage.setItem(
            "portfolio-theme",
            "light"
        );

        themeButton.textContent = "🌙";
    }

});