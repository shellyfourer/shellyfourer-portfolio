document.querySelector('.scroll-down').addEventListener('click', function() {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
        aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
});


