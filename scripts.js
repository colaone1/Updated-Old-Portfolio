/**
 * Handles reduced motion preferences for users who prefer less animation
 * Checks user's system preferences and disables animations accordingly
 */
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

/**
 * Initializes navigation functionality including scroll-based hiding/showing
 * Uses throttling to optimize scroll event handling
 */
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

/**
 * Throttles function execution to limit how often it can be called
 * @param {Function} func - The function to throttle
 * @param {number} limit - Time in milliseconds between function calls
 * @returns {Function} - Throttled version of the input function
 */
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

/**
 * Initializes project card interactions including hover effects and focus states
 * Handles both mouse and keyboard interactions for accessibility
 */
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

/**
 * Implements skip link functionality for keyboard navigation
 * Allows users to skip directly to main content
 */
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

/**
 * Initializes all application functionality
 * Sets up event listeners and initial states
 */
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

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', initializeApp); 