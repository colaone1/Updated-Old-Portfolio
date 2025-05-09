/**
 * Core utility functions
 */
const utils = {
    /**
     * Throttles function execution to limit how often it can be called
     * @param {Function} func - The function to throttle
     * @param {number} limit - Time in milliseconds between function calls
     * @returns {Function} - Throttled version of the input function
     */
    throttle(func, limit) {
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
};

/**
 * Navigation functionality
 */
const navigation = {
    /**
     * Initializes navigation functionality including scroll-based hiding/showing
     */
    initialize() {
        const nav = document.querySelector('.nav-container');
        let lastScroll = 0;

        // Handle navigation visibility on scroll
        window.addEventListener('scroll', utils.throttle(() => {
            const currentScroll = window.pageYOffset;
            
            if (currentScroll > lastScroll) {
                nav.style.transform = 'translateY(-100%)';
            } else {
                nav.style.transform = 'translateY(0)';
            }
            
            lastScroll = currentScroll;
        }, 100));

        // Handle keyboard navigation
        const navLinks = document.querySelectorAll('.nav-button');
        navLinks.forEach((link, index) => {
            link.addEventListener('keydown', (e) => {
                if (e.key === 'ArrowRight' && index < navLinks.length - 1) {
                    navLinks[index + 1].focus();
                } else if (e.key === 'ArrowLeft' && index > 0) {
                    navLinks[index - 1].focus();
                } else if (e.key === 'Home') {
                    navLinks[0].focus();
                } else if (e.key === 'End') {
                    navLinks[navLinks.length - 1].focus();
                }
            });
        });
    }
};

/**
 * Project card functionality
 */
const projectCards = {
    /**
     * Initializes project card interactions including hover effects and focus states
     */
    initialize() {
        const cards = document.querySelectorAll('.project-card');
        
        cards.forEach(card => {
            // Handle focus states for accessibility
            card.addEventListener('focus', () => {
                card.classList.add('ring-2', 'ring-blue-500');
            });
            
            card.addEventListener('blur', () => {
                card.classList.remove('ring-2', 'ring-blue-500');
            });
            
            // Handle keyboard navigation within cards
            card.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    const link = card.querySelector('a');
                    if (link) link.click();
                }
            });
        });
    }
};

/**
 * Accessibility functionality
 */
const accessibility = {
    /**
     * Handles reduced motion preferences
     */
    handleReducedMotion() {
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        const animatedElements = document.querySelectorAll('.animate-fadeInUp');
        
        if (prefersReducedMotion) {
            animatedElements.forEach(element => {
                element.style.opacity = '1';
                element.style.transform = 'none';
                element.style.animation = 'none';
            });
        }
    },

    /**
     * Implements skip link functionality
     */
    initializeSkipLink() {
        const skipLink = document.querySelector('.skip-link');
        const mainContent = document.querySelector('main');
        
        if (skipLink && mainContent) {
            skipLink.addEventListener('click', (e) => {
                e.preventDefault();
                mainContent.focus();
            });
        }
    }
};

/**
 * Performance monitoring
 */
const perfMonitor = {
    metrics: {
        startTime: performance.now(),
        resources: [],
        errors: [],
        navigation: null,
        paint: null,
        firstContentfulPaint: null,
        largestContentfulPaint: null,
        firstInputDelay: null
    },

    /**
     * Initializes performance monitoring
     */
    initialize() {
        // Enhanced error boundary
        window.onerror = (msg, url, lineNo, columnNo, error) => {
            const errorDetails = {
                message: msg,
                url: url,
                line: lineNo,
                column: columnNo,
                error: error,
                timestamp: new Date().toISOString(),
                userAgent: navigator.userAgent
            };
            
            this.metrics.errors.push(errorDetails);
            console.error('Error:', errorDetails);
            return false;
        };

        // Performance observer
        const observer = new PerformanceObserver((list) => {
            for (const entry of list.getEntries()) {
                switch(entry.entryType) {
                    case 'navigation':
                        this.metrics.navigation = entry;
                        this.metrics.firstContentfulPaint = entry.domContentLoadedEventEnd - entry.startTime;
                        break;
                    case 'paint':
                        if (entry.name === 'first-paint') {
                            this.metrics.paint = entry;
                        }
                        break;
                    case 'largest-contentful-paint':
                        this.metrics.largestContentfulPaint = entry;
                        break;
                    default:
                        this.metrics.resources.push(entry);
                }
            }
        });

        observer.observe({ 
            entryTypes: [
                'navigation',
                'paint',
                'largest-contentful-paint',
                'resource',
                'first-input'
            ]
        });

        // Track first input delay
        let firstInput = true;
        document.addEventListener('click', () => {
            if (firstInput) {
                this.metrics.firstInputDelay = performance.now() - this.metrics.startTime;
                firstInput = false;
            }
        }, { once: true });
    },

    /**
     * Logs performance metrics
     */
    logMetrics() {
        const loadTime = performance.now() - this.metrics.startTime;
        const metrics = {
            totalLoadTime: loadTime,
            firstContentfulPaint: this.metrics.firstContentfulPaint,
            largestContentfulPaint: this.metrics.largestContentfulPaint?.startTime,
            firstInputDelay: this.metrics.firstInputDelay,
            resourceCount: this.metrics.resources.length,
            errorCount: this.metrics.errors.length
        };
        
        console.log('Performance Metrics:', metrics);
    }
};

/**
 * Service worker functionality
 */
const serviceWorker = {
    /**
     * Registers service worker
     */
    register() {
        if ('serviceWorker' in navigator) {
            navigator.serviceWorker.register('/sw.js')
                .then(() => {
                    // Service worker registered successfully
                })
                .catch(error => {
                    // Service worker registration failed
                });
        }
    }
};

/**
 * UI indicators
 */
const indicators = {
    /**
     * Shows offline indicator
     */
    showOffline() {
        const indicator = document.createElement('div');
        indicator.className = 'offline-indicator';
        indicator.textContent = 'You are currently offline. Some features may be limited.';
        document.body.appendChild(indicator);
    },

    /**
     * Shows update available indicator
     */
    showUpdateAvailable() {
        const updateIndicator = document.createElement('div');
        updateIndicator.className = 'update-indicator';
        updateIndicator.innerHTML = `
            <p>An update is available!</p>
            <button onclick="window.location.reload()">Refresh to update</button>
        `;
        document.body.appendChild(updateIndicator);
    },

    /**
     * Initializes offline indicator functionality
     */
    initialize() {
        window.addEventListener('online', () => {
            document.querySelector('.offline-indicator')?.remove();
        });
        window.addEventListener('offline', this.showOffline);
        navigator.serviceWorker?.addEventListener('controllerchange', this.showUpdateAvailable);
    }
};

/**
 * Back to top functionality
 */
const backToTop = {
    /**
     * Initializes back to top button
     */
    initialize() {
        const button = document.getElementById('back-to-top');
        if (!button) return;

        window.addEventListener('scroll', utils.throttle(() => {
            if (window.pageYOffset > 300) {
                button.style.opacity = '1';
                button.style.pointerEvents = 'auto';
            } else {
                button.style.opacity = '0';
                button.style.pointerEvents = 'none';
            }
        }, 100));

        button.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
};

/**
 * Initialize all functionality
 */
function initializeApp() {
    // Initialize core functionality
    navigation.initialize();
    projectCards.initialize();
    accessibility.handleReducedMotion();
    accessibility.initializeSkipLink();
    perfMonitor.initialize();
    serviceWorker.register();
    indicators.initialize();
    backToTop.initialize();

    // Log performance metrics after page load
    window.addEventListener('load', () => {
        perfMonitor.logMetrics();
    });
}

// Initialize the application
document.addEventListener('DOMContentLoaded', initializeApp); 