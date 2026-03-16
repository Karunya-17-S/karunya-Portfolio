// Mobile Menu Toggle
const menuBtn = document.querySelector('.menu-btn');
const navbar = document.querySelector('.navbar');
const navLinks = document.querySelectorAll('.nav-link');

menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('active');
    navbar.classList.toggle('active');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        menuBtn.classList.remove('active');
        navbar.classList.remove('active');
    });
});

// Header Scroll Effect
const header = document.querySelector('.header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Active Link on Scroll
const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (pageYOffset >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(current)) {
            link.classList.add('active');
        }
    });
});

// Particles.js Configuration
if (typeof particlesJS !== 'undefined') {
    particlesJS('particles-js', {
        particles: {
            number: { value: 60, density: { enable: true, value_area: 800 } },
            color: { value: ['#00f0ff', '#b026ff', '#ffffff'] },
            shape: { type: 'circle' },
            opacity: {
                value: 0.3,
                random: true,
                anim: { enable: true, speed: 1, opacity_min: 0.1, sync: false }
            },
            size: {
                value: 3,
                random: true,
                anim: { enable: false, speed: 40, size_min: 0.1, sync: false }
            },
            line_linked: {
                enable: true,
                distance: 150,
                color: '#ffffff',
                opacity: 0.1,
                width: 1
            },
            move: {
                enable: true,
                speed: 1.5,
                direction: 'none',
                random: true,
                straight: false,
                out_mode: 'out',
                bounce: false,
                attract: { enable: false, rotateX: 600, rotateY: 1200 }
            }
        },
        interactivity: {
            detect_on: 'canvas',
            events: {
                onhover: { enable: true, mode: 'grab' },
                onclick: { enable: true, mode: 'push' },
                resize: true
            },
            modes: {
                grab: { distance: 140, line_linked: { opacity: 0.3 } },
                push: { particles_nb: 3 }
            }
        },
        retina_detect: true
    });
}

// ScrollReveal Animations
if (typeof ScrollReveal !== 'undefined') {
    const sr = ScrollReveal({
        origin: 'bottom',
        distance: '60px',
        duration: 2000,
        delay: 200,
        easing: 'cubic-bezier(0.5, 0, 0, 1)'
    });

    // Hero Section
    sr.reveal('.badge-wrapper', { origin: 'top' });
    sr.reveal('.title', { delay: 300 });
    sr.reveal('.description', { delay: 400 });
    sr.reveal('.hero-btns', { delay: 500 });
    sr.reveal('.social-links', { delay: 600, origin: 'left' });
    sr.reveal('.hero-image-wrapper', { delay: 700, origin: 'right' });
    
    // About Section
    sr.reveal('.section-header', {});
    sr.reveal('.about-text', { origin: 'left', delay: 300 });
    sr.reveal('.stat-card', { origin: 'bottom', interval: 150, delay: 400 });

    // Skills Section
    sr.reveal('.skill-category', { interval: 100, delay: 200 });

    // Projects Section
    sr.reveal('.project-card', { interval: 150, delay: 200 });

    // Timeline Items
    sr.reveal('.timeline-item', { origin: 'left', interval: 200, delay: 200 });
    sr.reveal('.cert-item', { origin: 'right', interval: 150, delay: 300 });

    // Contact Section
    sr.reveal('.contact-block', { interval: 100, delay: 200 });
    sr.reveal('.contact-form', { origin: 'right', delay: 400 });
    sr.reveal('.footer-content', { delay: 200 });
}

// --- Supabase Backend Integration ---
// TODO: Replace with your actual Supabase Project URL and Anon Key
const SUPABASE_URL = 'YOUR_SUPABASE_URL';
const SUPABASE_ANON_KEY = 'YOUR_SUPABASE_ANON_KEY';

// Initialize Supabase Client
// Uncomment the line below once you have added your URL and Key
// const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// Form Submission with Supabase
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const btn = contactForm.querySelector('.submit-btn');
        const originalText = btn.innerHTML;
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;
        
        btn.innerHTML = '<span>Sending...</span> <i class="fas fa-circle-notch fa-spin"></i>';
        
        try {
            // NOTE: Make sure you have created a table named 'contacts' in your Supabase project
            // with columns: id, name, email, subject, message, and created_at.
            
            /* Uncomment this block when Supabase is configured
            const { data, error } = await supabase
                .from('contacts')
                .insert([
                    { name: name, email: email, subject: subject, message: message }
                ]);
                
            if (error) throw error;
            */
            
            // Simulating network request for now
            await new Promise(resolve => setTimeout(resolve, 800));

            btn.innerHTML = '<span>Message Sent!</span> <i class="fas fa-check"></i>';
            btn.style.background = 'linear-gradient(135deg, #00C853, #64DD17)';
            contactForm.reset();
        } catch (error) {
            console.error('Error sending message:', error.message);
            btn.innerHTML = '<span>Error! Try again</span> <i class="fas fa-times"></i>';
            btn.style.background = 'linear-gradient(135deg, #D50000, #FF1744)';
        }
        
        setTimeout(() => {
            btn.innerHTML = originalText;
            btn.style.background = '';
        }, 3000);
    });
}
