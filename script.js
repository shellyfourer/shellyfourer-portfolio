fetch('header.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('header-container').innerHTML = data;
        const navbar = document.querySelector('.navbar');
        const main = document.querySelector('main');
        if (navbar && main) {
            const navbarHeight = navbar.offsetHeight;
            main.style.paddingTop = navbarHeight + 'px';
            main.style.height = `calc(100vh - ${navbarHeight}px)`;
        }
    });