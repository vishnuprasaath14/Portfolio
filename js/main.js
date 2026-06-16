// ==========================================
// Vishnu Prasaath VS - Professional Portfolio
// ==========================================

// Loading Screen
window.addEventListener('load', () => {
    const loader = document.getElementById('loader');
    setTimeout(() => loader?.classList.add('hidden'), 800);
});

// Scroll Reveal Animation
function handleReveal() {
    const reveals = document.querySelectorAll('.reveal');
    reveals.forEach(el => {
        const top = el.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (top < windowHeight - 80) {
            el.classList.add('visible');
        }
    });
}

// Navbar Scroll Effect
function handleNav() {
    const nav = document.getElementById('nav');
    if (window.scrollY > 50) {
        nav?.classList.add('scrolled');
    } else {
        nav?.classList.remove('scrolled');
    }
}

// Back to Top Button
function handleBackTop() {
    const btn = document.getElementById('backTop');
    if (window.scrollY > 400) {
        btn?.classList.add('visible');
    } else {
        btn?.classList.remove('visible');
    }
}

// Skill Bar Animation
function animateSkills() {
    const fills = document.querySelectorAll('.skill-fill');
    fills.forEach(fill => {
        const width = fill.getAttribute('data-width');
        if (width) {
            fill.style.width = width + '%';
        }
    });
}

// Check if skills are in view
function checkSkills() {
    const section = document.getElementById('skills');
    if (!section) return;
    const top = section.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    if (top < windowHeight - 100) {
        animateSkills();
        window.removeEventListener('scroll', checkSkills);
    }
}

// Update active nav link on scroll
function updateActiveLink() {
    const sections = document.querySelectorAll('section[id]');
    const links = document.querySelectorAll('.nav-link');
    let current = '';

    sections.forEach(section => {
        const top = section.offsetTop - 100;
        if (window.scrollY >= top) {
            current = section.getAttribute('id');
        }
    });

    links.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + current) {
            link.classList.add('active');
        }
    });
}

// Main Scroll Handler
window.addEventListener('scroll', () => {
    handleNav();
    handleBackTop();
    handleReveal();
    updateActiveLink();
});

// Initial calls
document.addEventListener('DOMContentLoaded', () => {
    handleReveal();
    checkSkills();
});

// Mobile Menu Toggle
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

navToggle?.addEventListener('click', () => {
    navToggle.classList.toggle('active');
    navLinks?.classList.toggle('active');
});

// Close mobile menu on link click
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navToggle?.classList.remove('active');
        navLinks?.classList.remove('active');
    });
});

// Smooth Scroll for all anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Back to Top Button Click
document.getElementById('backTop')?.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Contact Form
document.getElementById('contactForm')?.addEventListener('submit', function (e) {
    e.preventDefault();
    const btn = this.querySelector('button[type="submit"]');
    const original = btn.innerHTML;

    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
    btn.disabled = true;

    setTimeout(() => {
        btn.innerHTML = '<i class="fas fa-check"></i> Sent!';
        btn.style.background = '#22C55E';

        setTimeout(() => {
            btn.innerHTML = original;
            btn.style.background = '';
            btn.disabled = false;
            this.reset();
        }, 3000);
    }, 1500);
});

// Console Easter Egg
console.log('%c VP ', 'background:#3B82F6;color:white;font-size:20px;font-weight:bold;padding:5px 10px;border-radius:4px;');
console.log('%c Software Developer | Java | Full Stack ', 'font-size:14px;color:#94A3B8;');