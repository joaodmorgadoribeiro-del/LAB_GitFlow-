console.log("JS is connected!");

// Select the button by its ID
const themeToggle = document.getElementById('theme-toggle');

// Listen for a click event
themeToggle.addEventListener('click', () => {
    // Check the current theme attribute
    const currentTheme = document.body.getAttribute('data-theme');

    if (currentTheme === 'dark') {
        // If it's dark, switch to light
        document.body.setAttribute('data-theme', 'light');
        themeToggle.textContent = 'Toggle Dark Mode';
    } else {
        // If it's not dark, set it to dark
        document.body.setAttribute('data-theme', 'dark');
        themeToggle.textContent = 'Toggle Light Mode';
    }
});

