document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('bar');
    const navbar = document.getElementById('navbar');
    const closeBtn = document.getElementById('close');

    menuToggle.addEventListener('click', () => {
        navbar.classList.toggle('active');
    });

    closeBtn.addEventListener('click', () => {
        navbar.classList.remove('active');
    });

    // Optional: Close the navbar when clicking outside of it
    document.addEventListener('click', (event) => {
        if (!navbar.contains(event.target) && event.target !== menuToggle) {
            navbar.classList.remove('active');
        }
    });
});
