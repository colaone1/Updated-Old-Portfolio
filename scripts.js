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

/**
 * Implements skip link functionality for keyboard navigation
 * Allows users to skip directly to main content
 */
function initializeSkipLink() {
    const skipLink = document.querySelector('.skip-link');
    const mainContent = document.querySelector('main');
    
    if (skipLink && mainContent) {
        skipLink.addEventListener('click', (e) => {
            e.preventDefault();
            mainContent.focus();
        });
    }
}

// Performance monitoring
const performanceMetrics = {
    startTime: performance.now(),
    resources: [],
    errors: [],
    navigation: null,
    paint: null,
    firstContentfulPaint: null,
    largestContentfulPaint: null,
    firstInputDelay: null
};

// Enhanced error boundary with more detailed logging
window.onerror = function(msg, url, lineNo, columnNo, error) {
    const errorDetails = {
        message: msg,
        url: url,
        line: lineNo,
        column: columnNo,
        error: error,
        timestamp: new Date().toISOString(),
        userAgent: navigator.userAgent
    };
    
    performanceMetrics.errors.push(errorDetails);
    console.error('Error:', errorDetails);
    return false;
};

// Performance observer with more detailed metrics
const observer = new PerformanceObserver((list) => {
    for (const entry of list.getEntries()) {
        switch(entry.entryType) {
            case 'navigation':
                performanceMetrics.navigation = entry;
                performanceMetrics.firstContentfulPaint = entry.domContentLoadedEventEnd - entry.startTime;
                break;
            case 'paint':
                if (entry.name === 'first-paint') {
                    performanceMetrics.paint = entry;
                }
                break;
            case 'largest-contentful-paint':
                performanceMetrics.largestContentfulPaint = entry;
                break;
            default:
                performanceMetrics.resources.push(entry);
        }
    }
});

// Observe more performance metrics
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
        performanceMetrics.firstInputDelay = performance.now() - performanceMetrics.startTime;
        firstInput = false;
    }
}, { once: true });

// Enhanced service worker registration with better error tracking
function registerServiceWorker() {
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

// Log performance metrics with more detail
function logPerformanceMetrics() {
    const loadTime = performance.now() - performanceMetrics.startTime;
    const metrics = {
        totalLoadTime: loadTime,
        firstContentfulPaint: performanceMetrics.firstContentfulPaint,
        largestContentfulPaint: performanceMetrics.largestContentfulPaint?.startTime,
        firstInputDelay: performanceMetrics.firstInputDelay,
        resourceCount: performanceMetrics.resources.length,
        errorCount: performanceMetrics.errors.length
    };
    
    console.log('Performance Metrics:', metrics);
    
    // Send metrics to analytics if configured
    if (typeof gtag === 'function') {
        gtag('event', 'performance_metrics', metrics);
    }
}

// Dark Mode Toggle
function initializeDarkMode() {
    const themeToggle = document.getElementById('theme-toggle');
    if (!themeToggle) return;

    themeToggle.addEventListener('click', () => {
        const isDark = document.documentElement.classList.toggle('dark');
        localStorage.theme = isDark ? 'dark' : 'light';
    });
}

// Search Functionality
function initializeSearch() {
    const searchForm = document.querySelector('form[role="search"]');
    if (!searchForm) return;

    searchForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const searchTerm = e.target.querySelector('input[type="search"]').value.trim();
        if (!searchTerm) return;

        // Search through page content
        const searchableContent = document.querySelectorAll('main h2, main h3, main p, main article');
        const results = Array.from(searchableContent)
            .filter(element => {
                const text = element.textContent.toLowerCase();
                return text.includes(searchTerm.toLowerCase());
            });

        if (results.length > 0) {
            // Highlight and scroll to first result
            results[0].scrollIntoView({ behavior: 'smooth', block: 'center' });
            results[0].classList.add('highlight');
            setTimeout(() => results[0].classList.remove('highlight'), 2000);
        } else {
            // Show no results message
            const noResults = document.createElement('div');
            noResults.className = 'text-center text-red-500 mt-4';
            noResults.textContent = 'No results found';
            searchForm.appendChild(noResults);
            setTimeout(() => noResults.remove(), 3000);
        }
    });
}

// Language Switching
function initializeLanguageSwitcher() {
    const languageButtons = document.querySelectorAll('[data-lang]');
    if (!languageButtons.length) return;

    const translations = {
        en: {
            'home': 'Home',
            'projects': 'Projects',
            'about': 'About',
            'contact': 'Contact',
            'search': 'Search the site...',
            'view-work': 'View My Work',
            'code-future': 'Code the Future',
            'design-experience': 'Design the Experience',
            'shape-world': 'Shape the World'
        },
        fr: {
            'home': 'Accueil',
            'projects': 'Projets',
            'about': 'À propos',
            'contact': 'Contact',
            'search': 'Rechercher sur le site...',
            'view-work': 'Voir mon travail',
            'code-future': 'Coder le futur',
            'design-experience': 'Concevoir l\'expérience',
            'shape-world': 'Façonner le monde'
        }
    };

    languageButtons.forEach(button => {
        button.addEventListener('click', () => {
            const lang = button.dataset.lang;
            document.documentElement.lang = lang;
            localStorage.setItem('preferredLanguage', lang);

            // Update text content
            Object.entries(translations[lang]).forEach(([key, value]) => {
                const elements = document.querySelectorAll(`[data-translate="${key}"]`);
                elements.forEach(element => {
                    element.textContent = value;
                });
            });
        });
    });
}

// Back to Top Button
function initializeBackToTop() {
    const backToTopButton = document.getElementById('back-to-top');
    if (!backToTopButton) return;

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTopButton.classList.remove('opacity-0', 'invisible');
        } else {
            backToTopButton.classList.add('opacity-0', 'invisible');
        }
    });

    backToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Performance Monitoring
function initializePerformanceMonitoring() {
    if ('performance' in window) {
        window.addEventListener('load', () => {
            const timing = performance.timing;
            const loadTime = timing.loadEventEnd - timing.navigationStart;
            console.log(`Page load time: ${loadTime}ms`);

            // Log Core Web Vitals
            if ('web-vitals' in window) {
                webVitals.getCLS(console.log);
                webVitals.getFID(console.log);
                webVitals.getLCP(console.log);
            }
        });
    }
}

/**
 * Initializes all application functionality
 * Sets up event listeners and initial states
 */
function initializeApp() {
    // Initialize essential components
    initializeNavigation();
    initializeProjectCards();
    initializeSkipLink();
    registerServiceWorker();
    
    // Initialize other components
    handleReducedMotion();
    
    // Initialize new features
    initializeDarkMode();
    initializeSearch();
    initializeLanguageSwitcher();
    initializeBackToTop();
    initializePerformanceMonitoring();
    
    // Log performance metrics after page load
    window.addEventListener('load', () => {
        logPerformanceMetrics();
    });
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', initializeApp); 