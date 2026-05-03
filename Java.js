// ========== NAVIGATION SCROLL EFFECT ==========
window.addEventListener('scroll', () => {
    const nav = document.getElementById('nav');
    if (nav) {
        if (window.scrollY > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    }
});

// ========== MOBILE NAVIGATION TOGGLE ==========
function toggleNav() {
    const hamburger = document.getElementById('ham');
    const navLinks = document.getElementById('navLinks');
    if (hamburger && navLinks) {
        hamburger.classList.toggle('open');
        navLinks.classList.toggle('open');
    }
}

function closeNav() {
    const hamburger = document.getElementById('ham');
    const navLinks = document.getElementById('navLinks');
    if (hamburger && navLinks) {
        hamburger.classList.remove('open');
        navLinks.classList.remove('open');
    }
}

// ========== REVEAL ELEMENTS ON SCROLL ==========
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.classList.add('visible');
            }, index * 70);
            revealObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach((el) => {
    revealObserver.observe(el);
});

// ========== SKILL BARS ANIMATION ==========
const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            const fills = entry.target.querySelectorAll('.fill');
            fills.forEach((fill) => {
                const width = fill.getAttribute('data-w');
                if (width) {
                    fill.style.width = width + '%';
                }
            });
            skillObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.3 });

document.querySelectorAll('.skills-box').forEach((el) => {
    skillObserver.observe(el);
});

// ========== FORM SUBMIT SIMULATION ==========
function sendForm(button) {
    const originalHTML = button.innerHTML;
    button.innerHTML = '<i class="fas fa-check"></i> Sent!';
    button.style.background = '#22c55e';
    button.disabled = true;
    
    setTimeout(() => {
        button.innerHTML = originalHTML;
        button.style.background = '';
        button.disabled = false;
    }, 3000);
}

// ========== CLOSE MOBILE MENU WHEN CLICKING OUTSIDE ==========
document.addEventListener('click', function(event) {
    const navLinks = document.getElementById('navLinks');
    const hamburger = document.getElementById('ham');
    
    if (navLinks && navLinks.classList.contains('open')) {
        const isClickInsideNav = navLinks.contains(event.target);
        const isClickOnHamburger = hamburger && hamburger.contains(event.target);
        
        if (!isClickInsideNav && !isClickOnHamburger) {
            closeNav();
        }
    }
});
