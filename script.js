fetch('header.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('header-container').innerHTML = data;
        const navbar = document.querySelector('.navbar');
        const main = document.querySelector('main');
        if (navbar && main) {
            main.style.paddingTop = navbar.offsetHeight + 'px';
        }
    });