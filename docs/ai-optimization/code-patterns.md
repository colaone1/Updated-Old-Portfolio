# Code Patterns & Conventions

## 🎯 **HTML Patterns**

### **Page Structure Template**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <!-- SEO Meta Tags -->
    <title>Page Title - Samuel Connor</title>
    <meta name="description" content="Page description">
    <meta name="keywords" content="relevant, keywords">
    
    <!-- Open Graph -->
    <meta property="og:title" content="Page Title">
    <meta property="og:description" content="Page description">
    <meta property="og:url" content="https://samconnor.uk/page">
    <meta property="og:type" content="website">
    
    <!-- Twitter Card -->
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="Page Title">
    <meta name="twitter:description" content="Page description">
    
    <!-- Canonical URL -->
    <link rel="canonical" href="https://samconnor.uk/page">
    
    <!-- CSS -->
    <link rel="stylesheet" href="/styles.css">
    <link rel="stylesheet" href="/fonts.css">
    
    <!-- Favicon -->
    <link rel="icon" type="image/x-icon" href="/favicon.ico">
</head>
<body>
    <!-- Navigation -->
    <nav class="navbar">
        <div class="nav-container">
            <a href="/" class="nav-logo">Samuel Connor</a>
            <ul class="nav-menu">
                <li><a href="/" class="nav-link">Home</a></li>
                <li><a href="/about" class="nav-link">About</a></li>
                <li><a href="/projects" class="nav-link">Projects</a></li>
                <li><a href="/contact" class="nav-link">Contact</a></li>
            </ul>
            <div class="hamburger">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    </nav>

    <!-- Main Content -->
    <main>
        <!-- Page specific content -->
    </main>

    <!-- Footer -->
    <footer>
        <div class="footer-content">
            <p>&copy; 2025 Samuel Connor. All rights reserved.</p>
            <a href="mailto:contact@samusan.uk">contact@samusan.uk</a>
        </div>
    </footer>

    <!-- JavaScript -->
    <script src="/scripts.js"></script>
</body>
</html>
```

### **Navigation Pattern**
```html
<!-- Always use clean URLs (no .html) -->
<a href="/">Home</a>
<a href="/about">About</a>
<a href="/projects">Projects</a>
<a href="/contact">Contact</a>

<!-- Project links -->
<a href="/text-game">Text Game</a>
<a href="/star-wars-quiz">Star Wars Quiz</a>
```

### **Contact Information Pattern**
```html
<!-- Email links -->
<a href="mailto:contact@samusan.uk">contact@samusan.uk</a>

<!-- Contact form positioning -->
<div class="contact-form" style="margin-top: 30vh;">
    <!-- Form content -->
</div>
```

## 🎨 **CSS Patterns**

### **Tailwind CSS Classes**
```html
<!-- Common utility classes used -->
<div class="container mx-auto px-4">
<div class="flex flex-col md:flex-row">
<div class="text-center md:text-left">
<div class="bg-gray-100 dark:bg-gray-800">
<div class="hover:scale-105 transition-transform">
```

### **Custom CSS Classes**
```css
/* Navigation */
.navbar { /* styles */ }
.nav-container { /* styles */ }
.nav-logo { /* styles */ }
.nav-menu { /* styles */ }
.nav-link { /* styles */ }
.hamburger { /* styles */ }

/* Layout */
.container { /* styles */ }
.section { /* styles */ }
.card { /* styles */ }

/* Utilities */
.text-gradient { /* styles */ }
.back-to-top { /* styles */ }
```

## ⚡ **JavaScript Patterns**

### **Form Handling**
```javascript
// Form submission pattern
document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            // Form processing logic
        });
    }
});
```

### **Mobile Menu Toggle**
```javascript
// Mobile menu functionality
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});
```

### **Back to Top Button**
```javascript
// Back to top functionality
const backToTop = document.querySelector('.back-to-top');
if (backToTop) {
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 100) {
            backToTop.style.display = 'block';
        } else {
            backToTop.style.display = 'none';
        }
    });
}
```

### **Performance Utilities**
```javascript
// Throttle function
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
    }
}

// Debounce function
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}
```

## 🔧 **SEO Patterns**

### **Meta Tags Structure**
```html
<!-- Essential SEO -->
<title>Page Title - Samuel Connor</title>
<meta name="description" content="Comprehensive description of the page content">
<meta name="keywords" content="relevant, keywords, for, search, engines">

<!-- Open Graph -->
<meta property="og:title" content="Page Title">
<meta property="og:description" content="Page description">
<meta property="og:url" content="https://samconnor.uk/page">
<meta property="og:type" content="website">

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Page Title">
<meta name="twitter:description" content="Page description">

<!-- Canonical -->
<link rel="canonical" href="https://samconnor.uk/page">
```

### **Structured Data**
```html
<script type="application/ld+json">
{
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Samuel Connor",
    "url": "https://samconnor.uk/",
    "email": "contact@samusan.uk",
    "jobTitle": "Web Developer",
    "description": "Full-stack web developer specializing in modern web technologies"
}
</script>
```

## 📱 **Responsive Design Patterns**

### **Mobile-First Approach**
```css
/* Base styles (mobile) */
.element {
    width: 100%;
    padding: 1rem;
}

/* Tablet and up */
@media (min-width: 768px) {
    .element {
        width: 50%;
        padding: 2rem;
    }
}

/* Desktop and up */
@media (min-width: 1024px) {
    .element {
        width: 33.333%;
        padding: 3rem;
    }
}
```

### **Flexbox Layouts**
```css
/* Common layout patterns */
.container {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

@media (min-width: 768px) {
    .container {
        flex-direction: row;
        gap: 2rem;
    }
}
```

## 🚀 **Performance Patterns**

### **Image Optimization**
```html
<!-- Responsive images -->
<img src="image.jpg" alt="Description" loading="lazy">

<!-- Picture element for different sizes -->
<picture>
    <source media="(min-width: 768px)" srcset="image-large.jpg">
    <source media="(min-width: 480px)" srcset="image-medium.jpg">
    <img src="image-small.jpg" alt="Description">
</picture>
```

### **CSS Loading**
```html
<!-- Critical CSS inline -->
<style>
    /* Critical styles here */
</style>

<!-- Non-critical CSS -->
<link rel="stylesheet" href="/styles.css" media="print" onload="this.media='all'">
```

## 🔄 **Common Update Patterns**

### **Bulk URL Updates**
```bash
# Update all navigation links
find . -name "*.html" -exec sed -i 's/href="old-url"/href="new-url"/g' {} \;

# Update all project links
find . -name "*.html" -exec sed -i 's/href="old-project"/href="new-project"/g' {} \;

# Update email addresses
find . -name "*.html" -exec sed -i 's/old@email.com/contact@samusan.uk/g' {} \;
```

### **Sitemap Updates**
```bash
# Update domain in sitemap
sed -i 's|https://old-domain.com|https://samconnor.uk|g' sitemap.xml

# Update lastmod dates
sed -i 's|<lastmod>.*</lastmod>|<lastmod>2025-01-29</lastmod>|g' sitemap.xml
```

---

*These patterns ensure consistency across all files and help AI assistants maintain the same coding standards throughout the project.* 