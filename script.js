// script.js

document.addEventListener('DOMContentLoaded', function () {
    const navbar = document.getElementById('navbar');
    const toggleButton = document.getElementById('toggle-button');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('#navbar ul li a');
    const sections = document.querySelectorAll('section');

    // Toggle menu for mobile view
    toggleButton.addEventListener('click', function () {
        navMenu.classList.toggle('active');
        navMenu.style.display = navMenu.style.display === 'flex' ? 'none' : 'flex';
    });

    // Smooth scroll to sections
    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            window.scrollTo({
                top: targetSection.offsetTop - navbar.offsetHeight,
                behavior: 'smooth'
            });
        });
    });

    // Highlight active link based on scroll position
    window.addEventListener('scroll', function () {
        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop - navbar.offsetHeight;
            if (scrollY >= sectionTop) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').substring(1) === current) {
                link.classList.add('active');
            }
        });

        // Change navbar background on scroll
        if (window.scrollY > 50) {
            navbar.style.backgroundColor = 'pink';
        } else {
            navbar.style.backgroundColor = 'lavender';
        }
    });
});
