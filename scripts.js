// Utility function for handling animations
function handleReducedMotion() {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const animatedElements = document.querySelectorAll('.animate-fadeInUp');
    
    if (prefersReducedMotion) {
        animatedElements.forEach(element => {
            element.style.opacity = '1';
            element.style.transform = 'none';
            element.style.animation = 'none';
        });
    }
}

// Navigation functionality
function initializeNavigation() {
    const nav = document.querySelector('.nav-container');
    let lastScroll = 0;

    // Throttle function to limit scroll event handling
    function throttle(func, limit) {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    }

    // Handle navigation visibility on scroll
    window.addEventListener('scroll', throttle(() => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll <= 0) {
            nav.classList.remove('nav-hidden');
            return;
        }
        
        if (currentScroll > lastScroll && !nav.classList.contains('nav-hidden')) {
            nav.classList.add('nav-hidden');
        } else if (currentScroll < lastScroll && nav.classList.contains('nav-hidden')) {
            nav.classList.remove('nav-hidden');
        }
        
        lastScroll = currentScroll;
    }, 250));
}

// Project card interactions
function initializeProjectCards() {
    const projectCards = document.querySelectorAll('.projects-section article');
    
    projectCards.forEach(card => {
        // Handle card hover animations
        card.addEventListener('mouseenter', () => {
            if (window.matchMedia('(prefers-reduced-motion: no-preference)').matches) {
                card.style.transform = 'translateY(-5px)';
            }
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
        });
        
        // Handle focus states for accessibility
        const interactiveElements = card.querySelectorAll('a, button');
        interactiveElements.forEach(element => {
            element.addEventListener('focus', () => {
                card.classList.add('card-focused');
            });
            
            element.addEventListener('blur', () => {
                card.classList.remove('card-focused');
            });
        });
    });
}

// Handle skip link functionality
function initializeSkipLink() {
    const skipLink = document.querySelector('a[href="#main-content"]');
    const mainContent = document.getElementById('main-content');
    
    if (skipLink && mainContent) {
        skipLink.addEventListener('click', (e) => {
            e.preventDefault();
            mainContent.setAttribute('tabindex', '-1');
            mainContent.focus();
            mainContent.removeAttribute('tabindex');
        });
    }
}

// Initialize all functionality
function initializeApp() {
    handleReducedMotion();
    initializeNavigation();
    initializeProjectCards();
    initializeSkipLink();
    
    // Handle window resize events
    window.addEventListener('resize', throttle(() => {
        handleReducedMotion();
    }, 250));
}

// Helper function for throttling
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', initializeApp); 