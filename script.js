// Load header and adjust main-padding
fetch('header.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('header-container').innerHTML = data;
        const navbar = document.querySelector('.navbar');
        const main = document.querySelector('main');
        if (navbar && main) {
            const navbarHeight = navbar.offsetHeight;
            main.style.paddingTop = navbarHeight + 'px';
            main.style.height = `calc(100vh - ${navbarHeight}px)`; // Optional: comment out if causing issues
        }

        //Hide navbar on scroll down, show on scroll up
        let lastScrollY = window.scrollY;
        window.addEventListener('scroll', () => {
            if (!navbar) return;
            if (window.scrollY > lastScrollY && window.scrollY > 50) {
                navbar.style.transform = 'translateY(-100%)';
            } else {
                navbar.style.transform = 'translateY(0)';
            }
            lastScrollY = window.scrollY;
        });
    });



//Showcase Repositories
const showcaseRepos = [
    "pacman-clone",
];

fetch('https://api.github.com/users/shellyfourer/repos?per_page=100')
    .then(res => res.json())
    .then(repos => {
        const container = document.getElementById('github-repo-preview');
        if (!container) return;
        const filtered = repos.filter(repo => showcaseRepos.includes(repo.name));
        container.innerHTML = filtered.map(repo => `
            <div class="repo-card">
                <a href="${repo.html_url}" target="_blank">${repo.name}</a>
                <p>${repo.description || ''}</p>
            </div>
        `).join('');
    });

const currentProject = [
    "shellyfourer-portfolio"
];

fetch('https://api.github.com/users/shellyfourer/repos?per_page=100')
    .then(res => res.json())
    .then(repos => {
        const container = document.getElementById('current-repo-preview');
        if (!container) return;
        const filtered = repos.filter(repo => currentProject.includes(repo.name));
        container.innerHTML = filtered.map(repo => `
            <div class="repo-card">
                <a href="${repo.html_url}" target="_blank">${repo.name}</a>
                <p>${repo.description || ''}</p>
            </div>
        `).join('');
    });