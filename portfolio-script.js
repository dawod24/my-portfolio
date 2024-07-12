document.addEventListener('DOMContentLoaded', (event) => {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Form submission handling
    const form = document.getElementById('contact-form');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your message! I will get back to you soon.');
            form.reset();
        });
    }

    // Add a simple animation to project cards
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'scale(1.05)';
            card.style.transition = 'transform 0.3s ease-in-out';
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'scale(1)';
        });
    });
});
