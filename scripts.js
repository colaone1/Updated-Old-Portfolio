/**
 * Portfolio Website - Core JavaScript
 * AI-OPTIMIZED: Enhanced performance monitoring and AI processing efficiency
 * 
 * Key Modules:
 * - utils: Utility functions for performance optimization
 * - navigation: Navigation and scroll handling
 * - projectCards: Project card interactions
 * - accessibility: Accessibility features
 * - perfMonitor: Performance monitoring and metrics
 * - serviceWorker: Service worker management
 */

/**
 * Core utility functions
 * AI-OPTIMIZED: Utility functions for performance and throttling
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
    },

    /**
     * Debounces function execution to prevent excessive calls
     * AI-OPTIMIZED: Performance optimization for event handling
     * @param {Function} func - The function to debounce
     * @param {number} delay - Delay in milliseconds
     * @returns {Function} - Debounced version of the input function
     */
    debounce(func, delay) {
        let timeoutId;
        return function(...args) {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => func.apply(this, args), delay);
        };
    },

    /**
     * Measures execution time for performance monitoring
     * AI-OPTIMIZED: Performance tracking for AI processing efficiency
     * @param {string} label - Label for the measurement
     * @param {Function} fn - Function to measure
     * @returns {any} - Result of the function execution
     */
    measurePerformance(label, fn) {
        const start = performance.now();
        const result = fn();
        const end = performance.now();
        console.log(`${label}: ${(end - start).toFixed(2)}ms`);
        return result;
    }
};

/**
 * Navigation functionality
 * AI-OPTIMIZED: Navigation and scroll handling with performance optimization
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
 * AI-OPTIMIZED: Project card interactions and accessibility features
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
 * Accessibility features
 * AI-OPTIMIZED: Comprehensive accessibility support for better user experience
 */
const accessibility = {
    /**
     * Handles reduced motion preferences
     */
    handleReducedMotion() {
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            document.documentElement.style.setProperty('--animation-duration', '0s');
            document.documentElement.style.setProperty('--transition-duration', '0s');
        }
    },

    /**
     * Initializes skip link for keyboard navigation
     */
    initializeSkipLink() {
        const skipLink = document.createElement('a');
        skipLink.href = '#main-content';
        skipLink.textContent = 'Skip to main content';
        skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded z-50';
        document.body.insertBefore(skipLink, document.body.firstChild);
    },

    /**
     * Initializes all accessibility features
     */
    initialize() {
        this.handleReducedMotion();
        this.initializeSkipLink();
        
        // Add ARIA labels to interactive elements
        const buttons = document.querySelectorAll('button:not([aria-label])');
        buttons.forEach(button => {
            if (!button.textContent.trim()) {
                button.setAttribute('aria-label', 'Button');
            }
        });
    }
};

/**
 * Performance monitoring
 * AI-OPTIMIZED: Enhanced performance tracking for AI processing efficiency
 */
const perfMonitor = {
    /**
     * Logs comprehensive performance metrics
     */
    logMetrics() {
        const loadTime = performance.now();
        const navigation = performance.getEntriesByType('navigation')[0];
        const paint = performance.getEntriesByType('paint');
        
        const metrics = {
            totalLoadTime: loadTime,
            firstContentfulPaint: paint.find(p => p.name === 'first-contentful-paint')?.startTime || null,
            largestContentfulPaint: this.getLCP(),
            firstInputDelay: this.getFID(),
            resourceCount: navigation?.initiatorType ? 1 : 0,
            domContentLoaded: navigation?.domContentLoadedEventEnd - navigation?.domContentLoadedEventStart || null,
            loadComplete: navigation?.loadEventEnd - navigation?.loadEventStart || null
        };
        
        console.log('Performance Metrics:', metrics);
        return metrics;
    },

    /**
     * Gets Largest Contentful Paint metric
     */
    getLCP() {
        const observer = new PerformanceObserver((list) => {
            const entries = list.getEntries();
            const lastEntry = entries[entries.length - 1];
            return lastEntry.startTime;
        });
        observer.observe({ entryTypes: ['largest-contentful-paint'] });
        return undefined; // Will be populated by observer
    },

    /**
     * Gets First Input Delay metric
     */
    getFID() {
        const observer = new PerformanceObserver((list) => {
            const entries = list.getEntries();
            const firstEntry = entries[0];
            return firstEntry.processingStart - firstEntry.startTime;
        });
        observer.observe({ entryTypes: ['first-input'] });
        return null; // Will be populated by observer
    }
};

/**
 * Service Worker management
 * AI-OPTIMIZED: Service worker for caching and offline support
 */
const serviceWorker = {
    /**
     * Registers the service worker
     */
    register() {
        if ('serviceWorker' in navigator) {
            navigator.serviceWorker.register('/sw.js')
                .then(registration => {
                    console.log('Service Worker registered:', registration);
                    
                    // Check for updates
                    registration.addEventListener('updatefound', () => {
                        const newWorker = registration.installing;
                        newWorker.addEventListener('statechange', () => {
                            if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                                this.showUpdateAvailable();
                            }
                        });
                    });
                })
                .catch(error => {
                    console.error('Service Worker registration failed:', error);
                });
        }
    },

    /**
     * Shows offline indicator
     */
    showOffline() {
        const indicator = document.createElement('div');
        indicator.className = 'offline-indicator fixed top-4 right-4 bg-red-500 text-white px-4 py-2 rounded z-50';
        indicator.textContent = 'You are offline';
        document.body.appendChild(indicator);
    },

    /**
     * Shows update available notification
     */
    showUpdateAvailable() {
        const indicator = document.createElement('div');
        indicator.className = 'update-indicator fixed top-4 right-4 bg-blue-500 text-white px-4 py-2 rounded z-50';
        indicator.innerHTML = `
            <span>Update available</span>
            <button onclick="location.reload()" class="ml-2 underline">Reload</button>
        `;
        document.body.appendChild(indicator);
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
 * Main application initialization
 * AI-OPTIMIZED: Centralized initialization for better performance
 */
function initializeApp() {
    // Measure initialization performance
    utils.measurePerformance('app-initialization', () => {
        // Initialize all modules
        navigation.initialize();
        projectCards.initialize();
        accessibility.initialize();
        serviceWorker.register();
        
        // Log performance metrics
        perfMonitor.logMetrics();
        
        console.log('Portfolio website initialized successfully');
    });
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeApp);
} else {
    initializeApp();
} 