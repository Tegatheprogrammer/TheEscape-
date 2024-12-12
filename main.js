// Wait for the DOM to load completely
window.addEventListener('DOMContentLoaded', () => {
    // Remove the loading screen after a short delay
    const loader = document.getElementById('loading');
    setTimeout(() => {
        loader.style.opacity = '0'; // Fade out the loader
        setTimeout(() => {
            loader.style.display = 'none'; // Remove loader completely
            document.body.classList.add('loaded'); // Re-enable scrolling
        }, 500); // Delay to match CSS transition
    }, 1000); // Delay before fade starts

    // Apply saved theme
    const savedTheme = localStorage.getItem('theme') || 'light';
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
    }
});

// Function to show the requested section and hide others with animation
function showSection(sectionId) {
    document.querySelectorAll('section').forEach(section => {
        section.classList.remove('active');
        section.style.display = 'none'; // Ensure hidden sections are removed from DOM flow
    });

    const selectedSection = document.getElementById(sectionId);
    selectedSection.style.display = 'block'; // Make it visible
    setTimeout(() => {
        selectedSection.classList.add('active'); // Trigger animation
    }, 0);
};

// Toggle Dark/Light Mode
function toggleTheme() {
    const body = document.body; // Reference to the body element
    const themeIcon = document.getElementById('theme-icon'); // Reference to the icon

    // Toggle the 'dark-mode' class on the body
    body.classList.toggle('dark-mode');

    // Switch the icon based on the theme
    if (body.classList.contains('dark-mode')) {
        themeIcon.classList.remove('fa-sun'); // Remove sun icon
        themeIcon.classList.add('fa-moon');  // Add moon icon
        localStorage.setItem('theme', 'dark'); // Save theme in localStorage
    } else {
        themeIcon.classList.remove('fa-moon'); // Remove moon icon
        themeIcon.classList.add('fa-sun');  // Add sun icon
        localStorage.setItem('theme', 'light'); // Save theme in localStorage
    }
};

// Apply saved theme on page load
window.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme') || 'light'; // Get saved theme from localStorage
    const body = document.body;
    const themeIcon = document.getElementById('theme-icon');

    if (savedTheme === 'dark') {
        body.classList.add('dark-mode'); // Apply dark mode if saved
        themeIcon.classList.remove('fa-sun'); // Set moon icon
        themeIcon.classList.add('fa-moon');
    }
});


let slideIndex = 1; // Current slide index
showSlides(slideIndex); // Show the first slide

// Function to navigate slides
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Function to show the current slide
function showSlides(n) {
    const slides = document.getElementsByClassName("slide");
    if (n > slides.length) slideIndex = 1; // Wrap around to the first slide
    if (n < 1) slideIndex = slides.length; // Wrap around to the last slide

    // Hide all slides
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // Show the current slide
    slides[slideIndex - 1].style.display = "block";
};

// Function to show the requested section
function showSection(sectionId) {
    // Hide all sections
    document.querySelectorAll('section').forEach(section => {
        section.classList.remove('active');
        section.classList.add('hidden');
    });

    // Show the selected section
    const selectedSection = document.getElementById(sectionId);
    selectedSection.classList.remove('hidden');
    selectedSection.classList.add('active');
}

// Function to toggle dropdown visibility
function toggleDropdown(id) {
    const dropdown = document.getElementById(id);
    dropdown.classList.toggle('active');
}

// Set default mode to dark
window.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme') || 'dark'; // Default to dark mode
    const body = document.body;
    const themeIcon = document.getElementById('theme-icon');

    if (savedTheme === 'dark') {
        body.classList.add('dark-mode'); // Apply dark mode
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
    }
});
// Function to toggle dropdown visibility
function toggleDropdown(id) {
    const dropdown = document.getElementById(id);
    const icon = dropdown.previousElementSibling.querySelector('.dropdown-icon');

    dropdown.classList.toggle('active');
    if (dropdown.classList.contains('active')) {
        icon.style.transform = 'rotate(180deg)';
    } else {
        icon.style.transform = 'rotate(0deg)';
    }
};

// Apply default dark mode or saved user preference
window.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme'); // Check saved preference
    const body = document.body;
    const themeIcon = document.getElementById('theme-icon');

    if (savedTheme === 'light') {
        // If light mode is saved, apply it
        body.classList.remove('dark-mode');
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
    } else {
        // Default to dark mode
        body.classList.add('dark-mode');
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
    }
});

// Toggle between light and dark mode
function toggleTheme() {
    const body = document.body;
    const themeIcon = document.getElementById('theme-icon');

    body.classList.toggle('dark-mode');
    if (body.classList.contains('dark-mode')) {
        // Save dark mode preference
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
        localStorage.setItem('theme', 'dark');
    } else {
        // Save light mode preference
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
        localStorage.setItem('theme', 'light');
    }
}
