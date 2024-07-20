document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('bar');
    const navbar = document.getElementById('navbar');
    
    menuToggle.addEventListener('click', () => {
        if (navbar.classList.contains('active')) {
            navbar.classList.remove('active'); // Close the navbar
        } else {
            navbar.classList.add('active'); // Open the navbar
        }
    });
    
    // Optional: Close the navbar when clicking outside of it
    document.addEventListener('click', (event) => {
        if (!navbar.contains(event.target) && event.target !== menuToggle) {
            navbar.classList.remove('active');
        }
    });
});
