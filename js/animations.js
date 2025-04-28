// Animation effects for portfolio website

document.addEventListener('DOMContentLoaded', function() {
    // Initialize animations
    initializeAnimations();
    
    // Add scroll event listener for scroll-based animations
    window.addEventListener('scroll', function() {
        animateOnScroll();
    });
    
    // Function to initialize animations
    function initializeAnimations() {
        // Add animation classes to hero section elements
        const heroElements = document.querySelectorAll('.hero-content h1, .hero-content .profession, .hero-content .hero-description, .hero-buttons, .hero-image');
        heroElements.forEach((element, index) => {
            element.classList.add('fade-in');
            element.classList.add(`delay-${index + 1}`);
        });
        
        // Add bounce animation to scroll indicator if exists
        const scrollIndicator = document.querySelector('.scroll-indicator');
        if (scrollIndicator) {
            scrollIndicator.classList.add('bounce');
        }
        
        // Add hover effects to project cards
        const projectCards = document.querySelectorAll('.project-card');
        projectCards.forEach(card => {
            card.classList.add('hover-scale');
        });
        
        // Add glow effect to logo
        const logo = document.querySelector('.logo img');
        if (logo) {
            logo.classList.add('glow');
        }
        
        // Add transition effects to buttons
        const buttons = document.querySelectorAll('.btn');
        buttons.forEach(button => {
            button.classList.add('transition-all');
        });
        
        // Add hover brightness effect to social links
        const socialLinks = document.querySelectorAll('.social-links a');
        socialLinks.forEach(link => {
            link.classList.add('hover-brightness');
        });
    }
    
    // Function to animate elements when they come into view
    function animateOnScroll() {
        // Elements to animate on scroll
        const elements = [
            { selector: '.section-header', animation: 'fade-in' },
            { selector: '.about-text p', animation: 'slide-in-right' },
            { selector: '.about-info', animation: 'slide-in-left' },
            { selector: '.skills-category', animation: 'fade-in' },
            { selector: '.timeline-item:nth-child(odd)', animation: 'slide-in-right' },
            { selector: '.timeline-item:nth-child(even)', animation: 'slide-in-left' },
            { selector: '.project-card', animation: 'zoom-in' },
            { selector: '.youtube-info', animation: 'slide-in-right' },
            { selector: '.youtube-featured', animation: 'slide-in-left' },
            { selector: '.contact-info', animation: 'slide-in-right' },
            { selector: '.contact-form', animation: 'slide-in-left' }
        ];
        
        elements.forEach(item => {
            const elementsToAnimate = document.querySelectorAll(item.selector);
            
            elementsToAnimate.forEach(element => {
                if (isElementInViewport(element) && !element.classList.contains('animated')) {
                    element.classList.add(item.animation);
                    element.classList.add('animated'); // Mark as animated
                }
            });
        });
        
        // Animate skill bars when in viewport
        const skillBars = document.querySelectorAll('.skill-progress');
        skillBars.forEach(bar => {
            if (isElementInViewport(bar) && !bar.classList.contains('animated')) {
                const progress = bar.getAttribute('data-progress');
                bar.style.width = `${progress}%`;
                bar.classList.add('animated');
            }
        });
    }
    
    // Helper function to check if element is in viewport
    function isElementInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.8 &&
            rect.bottom >= 0
        );
    }
    
    // Add typing effect to elements with class 'typing-effect'
    const typingElements = document.querySelectorAll('.typing-effect');
    typingElements.forEach(element => {
        const text = element.textContent;
        element.textContent = '';
        
        let i = 0;
        const typing = setInterval(() => {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
            } else {
                clearInterval(typing);
            }
        }, 100);
    });
});
