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

// Performance monitoring
const performanceMetrics = {
    startTime: performance.now(),
    resources: [],
    errors: []
};

// Error boundary
window.onerror = function(msg, url, lineNo, columnNo, error) {
    performanceMetrics.errors.push({
        message: msg,
        url: url,
        line: lineNo,
        column: columnNo,
        error: error
    });
    console.error('Error:', msg, '\nURL:', url, '\nLine:', lineNo, '\nColumn:', columnNo, '\nError object:', error);
    return false;
};

// Performance observer
const observer = new PerformanceObserver((list) => {
    for (const entry of list.getEntries()) {
        performanceMetrics.resources.push(entry);
    }
});

observer.observe({ entryTypes: ['resource', 'navigation', 'paint'] });

// Enhanced service worker registration
function registerServiceWorker() {
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
            navigator.serviceWorker.register('/sw.js')
                .then(registration => {
                    console.log('ServiceWorker registration successful');
                    
                    // Check if we're offline
                    if (!navigator.onLine) {
                        console.log('Application is offline');
                        showOfflineIndicator();
                    }
                    
                    // Monitor service worker updates
                    registration.addEventListener('updatefound', () => {
                        const newWorker = registration.installing;
                        newWorker.addEventListener('statechange', () => {
                            if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                                showUpdateAvailable();
                            }
                        });
                    });
                })
                .catch(err => {
                    console.error('ServiceWorker registration failed: ', err);
                    performanceMetrics.errors.push({
                        type: 'serviceWorker',
                        error: err
                    });
                });
        });
    }
}

// Offline indicator
function showOfflineIndicator() {
    const indicator = document.createElement('div');
    indicator.className = 'offline-indicator';
    indicator.textContent = 'You are currently offline. Some features may be limited.';
    document.body.appendChild(indicator);
}

// Update available indicator
function showUpdateAvailable() {
    const updateIndicator = document.createElement('div');
    updateIndicator.className = 'update-indicator';
    updateIndicator.innerHTML = `
        <p>An update is available!</p>
        <button onclick="window.location.reload()">Refresh to update</button>
    `;
    document.body.appendChild(updateIndicator);
}

/**
 * Initializes all application functionality
 * Sets up event listeners and initial states
 */
function initializeApp() {
    // Register service worker
    registerServiceWorker();
    
    // Add loading states
    const heroSection = document.querySelector('.hero-section');
    const projectCards = document.querySelectorAll('.projects-section article');
    
    if (heroSection) {
        heroSection.classList.add('loading');
        setTimeout(() => {
            heroSection.classList.remove('loading');
        }, 1000);
    }
    
    if (projectCards.length > 0) {
        projectCards.forEach(card => {
            card.classList.add('loading');
            setTimeout(() => {
                card.classList.remove('loading');
            }, 1000);
        });
    }
    
    // Initialize other components
    handleReducedMotion();
    initializeNavigation();
    initializeProjectCards();
    initializeSkipLink();
    
    // Log performance metrics
    window.addEventListener('load', () => {
        const loadTime = performance.now() - performanceMetrics.startTime;
        console.log('Page load time:', loadTime, 'ms');
        console.log('Performance metrics:', performanceMetrics);
    });
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', initializeApp); 