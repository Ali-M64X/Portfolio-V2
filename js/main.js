// Main JavaScript file for portfolio website

document.addEventListener('DOMContentLoaded', function() {
    // Initialize variables
    const currentYear = new Date().getFullYear();
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    const cvDownloadBtn = document.querySelector('.cv-download');
    const cvModal = document.getElementById('cvModal');
    const closeModal = document.querySelector('.close-modal');
    const header = document.querySelector('header');
    const sections = document.querySelectorAll('section');
    const navItems = document.querySelectorAll('.nav-link');
    const skillBars = document.querySelectorAll('.skill-progress');
    
    // Set current year in footer
    document.getElementById('currentYear').textContent = currentYear;
    
    // Mobile menu toggle
    mobileMenuBtn.addEventListener('click', function() {
        this.classList.toggle('active');
        navLinks.classList.toggle('active');
    });
    
    // Close mobile menu when clicking a nav link
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', function() {
            mobileMenuBtn.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });
    
    // CV Modal functionality
    cvDownloadBtn.addEventListener('click', function(e) {
        e.preventDefault();
        cvModal.style.display = 'block';
    });
    
    closeModal.addEventListener('click', function() {
        cvModal.style.display = 'none';
    });
    
    window.addEventListener('click', function(e) {
        if (e.target === cvModal) {
            cvModal.style.display = 'none';
        }
    });
    
    // Sticky header on scroll
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('sticky');
        } else {
            header.classList.remove('sticky');
        }
        
        // Update active nav link based on scroll position
        updateActiveNavLink();
        
        // Animate skill bars when in viewport
        animateSkillBars();
        
        // Add fade-in animation to elements when they come into view
        animateOnScroll();
    });
    
    // Update active navigation link based on scroll position
    function updateActiveNavLink() {
        let currentSection = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.offsetHeight;
            
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                currentSection = section.getAttribute('id');
            }
        });
        
        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href') === `#${currentSection}`) {
                item.classList.add('active');
            }
        });
    }
    
    // Animate skill bars when in viewport
    function animateSkillBars() {
        skillBars.forEach(bar => {
            const barTop = bar.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (barTop < windowHeight - 100) {
                const progress = bar.getAttribute('data-progress');
                bar.style.width = `${progress}%`;
            }
        });
    }
    
    // Add animation classes to elements when they come into view
    function animateOnScroll() {
        const animatedElements = document.querySelectorAll('.section-header, .about-content, .skills-category, .timeline-item, .project-card, .youtube-content, .contact-content');
        
        animatedElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementTop < windowHeight - 100) {
                element.classList.add('fade-in');
            }
        });
    }
    
    // Initialize animations
    animateSkillBars();
    animateOnScroll();
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Add typing animation to hero text
    const heroGreeting = document.querySelector('.greeting');
    if (heroGreeting) {
        heroGreeting.classList.add('typing-animation');
    }
    
    // Add pulse animation to primary buttons
    document.querySelectorAll('.primary-btn').forEach(btn => {
        btn.classList.add('pulse');
    });
    
    // Add hover effects to project cards
    document.querySelectorAll('.project-card').forEach(card => {
        card.classList.add('transition-transform');
    });
    
    // Add rotate effect to social icons on hover
    document.querySelectorAll('.social-links a i').forEach(icon => {
        icon.classList.add('rotate-hover');
    });
});
