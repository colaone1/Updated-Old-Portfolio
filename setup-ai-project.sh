#!/bin/bash

echo "🚀 Setting up AI-optimized project..."

# Create AI documentation files
cat > AI_PROCESSING_OPTIMIZATION.md << 'EOF'
# AI Processing Optimization Guide

## 🚀 **Efficient AI Assistant Workflow**

### **1. Project Setup Optimization**

#### **File Structure Best Practices**
```
project/
├── .ai-ignore          # Files AI should skip
├── AI_PROCESSING_OPTIMIZATION.md  # This guide
├── package.json        # Dependencies and scripts
├── README.md          # Project overview
└── src/               # Main code directory
```

#### **AI-Friendly File Naming**
- Use descriptive, consistent naming: `user-profile.html`, `contact-form.js`
- Avoid generic names: `page1.html`, `script.js`
- Include file type in name when helpful: `styles-main.css`, `api-users.js`

### **2. Code Organization for AI Efficiency**

#### **Consistent Patterns**
```javascript
// Use consistent comment patterns
/**
 * Function: updateUserProfile
 * Purpose: Updates user profile data
 * Parameters: userData (Object)
 * Returns: Promise<Boolean>
 */
function updateUserProfile(userData) {
    // Implementation
}
```

#### **Clear Section Markers**
```html
<!-- ===== HEADER SECTION ===== -->
<header>
    <!-- Navigation content -->
</header>

<!-- ===== MAIN CONTENT ===== -->
<main>
    <!-- Main content -->
</main>

<!-- ===== FOOTER SECTION ===== -->
<footer>
    <!-- Footer content -->
</footer>
```

### **3. Communication Optimization**

#### **Clear Task Descriptions**
✅ **Good**: "Update all navigation links to use clean URLs without .html extensions"
❌ **Bad**: "Fix the links"

#### **Batch Related Tasks**
✅ **Good**: "Update all HTML files to use clean URLs and update sitemap"
❌ **Bad**: Multiple separate requests for related changes

#### **Provide Context**
```markdown
Task: Update contact form validation
Context: 
- Form is in contact.html
- Current validation is client-side only
- Need server-side validation added
- Must maintain existing UX
```

### **4. File Management Strategies**

#### **Bulk Operations**
```bash
# Update all HTML files at once
find . -name "*.html" -exec sed -i 's/old-pattern/new-pattern/g' {} \;

# Batch git operations
git add -A && git commit -m "Comprehensive update: [description]"
```

#### **Smart File Targeting**
```bash
# Only process relevant files
find . -name "*.html" ! -name "node_modules" -exec command {} \;

# Exclude generated files
echo "*.min.js" >> .ai-ignore
echo "dist/" >> .ai-ignore
```

### **5. Development Workflow**

#### **Pre-AI Preparation**
1. **Organize files** logically
2. **Add clear comments** to complex code
3. **Document patterns** used in the project
4. **Create .ai-ignore** for irrelevant files

#### **During AI Interaction**
1. **Provide full context** in first message
2. **Batch related requests** together
3. **Specify file locations** when relevant
4. **Mention existing patterns** to maintain consistency

#### **Post-AI Review**
1. **Test changes** immediately
2. **Review generated code** for consistency
3. **Update documentation** if patterns change
4. **Commit changes** with descriptive messages

### **6. Performance Optimization Techniques**

#### **Efficient Search Patterns**
```bash
# Find specific patterns quickly
grep -r "pattern" --include="*.js" --include="*.html"

# Find files with specific content
find . -name "*.html" -exec grep -l "pattern" {} \;
```

#### **Smart Git Operations**
```bash
# Stage all changes efficiently
git add -A

# Commit with comprehensive message
git commit -m "Feature: [description] - [files changed] - [impact]"

# Push only when ready
git push origin main
```

### **7. AI Assistant Communication**

#### **Effective Prompts**
```
Task: [Specific action needed]
Context: [Background information]
Constraints: [Limitations or requirements]
Expected Outcome: [What success looks like]
```

#### **Example Prompts**
```
Task: Implement dark mode toggle
Context: Site uses CSS custom properties, current theme is light
Constraints: Must work without page reload, maintain accessibility
Expected Outcome: Toggle button that switches between light/dark themes
```

### **8. Project-Specific Optimizations**

#### **For Web Development**
- **Use semantic HTML** for better AI understanding
- **Consistent CSS naming** (BEM, utility classes)
- **Modular JavaScript** with clear function names
- **Comprehensive comments** for complex logic

#### **For Backend Development**
- **Clear API documentation** in comments
- **Consistent error handling** patterns
- **Modular code structure** with clear separation
- **Environment-specific** configuration files

#### **For Full-Stack Projects**
- **Shared naming conventions** across frontend/backend
- **Consistent data structures** between layers
- **Clear API contracts** with examples
- **Unified error handling** strategies

### **9. Quality Assurance**

#### **Before AI Changes**
- **Backup current state**: `git commit -m "Backup before AI changes"`
- **Document current patterns** for reference
- **Identify critical files** that need special attention

#### **After AI Changes**
- **Test functionality** immediately
- **Review code consistency** with existing patterns
- **Update documentation** if new patterns introduced
- **Commit with clear messages** for future reference

### **10. Advanced Techniques**

#### **Pattern Recognition**
```bash
# Find all navigation links
grep -r "nav.*href" --include="*.html"

# Find all form elements
grep -r "form.*action" --include="*.html"

# Find all JavaScript functions
grep -r "function.*(" --include="*.js"
```

#### **Bulk Refactoring**
```bash
# Rename all instances of old pattern to new pattern
find . -type f -name "*.html" -exec sed -i 's/old-pattern/new-pattern/g' {} \;

# Update all import statements
find . -type f -name "*.js" -exec sed -i 's/import.*old-module/import.*new-module/g' {} \;
```

### **11. Maintenance**

#### **Regular Reviews**
- **Weekly**: Review AI-generated code for consistency
- **Monthly**: Update this optimization guide based on learnings
- **Quarterly**: Refactor code patterns for better AI understanding

#### **Continuous Improvement**
- **Document successful patterns** for future use
- **Identify pain points** in AI interactions
- **Optimize file structure** based on AI needs
- **Update .ai-ignore** as project evolves

---

## **Quick Reference Commands**

### **Efficient Git Operations**
```bash
# Stage and commit all changes
git add -A && git commit -m "Feature: [description]"

# Push when ready
git push origin main

# Revert if needed
git reset --hard HEAD~1
```

### **Bulk File Operations**
```bash
# Update all HTML files
find . -name "*.html" -exec sed -i 's/pattern/replacement/g' {} \;

# Find files with specific content
grep -r "pattern" --include="*.html"

# Rename files in bulk
for file in *.html; do mv "$file" "${file%.html}.new"; done
```

### **AI Communication Templates**
```
Task: [Specific action]
Files: [Relevant file paths]
Context: [Background info]
Expected: [Desired outcome]
```

---

*This guide should be updated regularly based on project-specific learnings and AI interaction patterns.*
EOF

cat > .ai-ignore << 'EOF'
# AI Processing Ignore File
# Files and directories that AI assistants should skip

# Dependencies and build files
node_modules/
package-lock.json
*.min.js
*.min.css
dist/
build/

# Generated files
*.log
*.tmp
*.cache

# Large binary files
*.pdf
*.zip
*.tar.gz
*.mp4
*.mp3

# Configuration files (usually don't need AI changes)
.env
.env.local
.env.production
.gitignore
.git/
.husky/

# Documentation (usually reference only)
README.md
*.md
LICENSE

# IDE and editor files
.vscode/
.idea/
*.swp
*.swo
*~

# OS generated files
.DS_Store
Thumbs.db

# Test files (unless specifically working on tests)
__tests__/
*.test.js
*.spec.js
test/

# Backup files
*.bak
*.backup
*~
EOF

cat > project-structure.md << 'EOF'
# Project Structure Documentation

## 📁 **File Organization**

### **Core Pages**
- `index.html` - Homepage (root URL: `/`)
- `about.html` - About page (URL: `/about`)
- `projects.html` - Projects showcase (URL: `/projects`)
- `contact.html` - Contact page (URL: `/contact`)

### **Individual Project Pages**
- `text-game.html` - Text Adventure Game (URL: `/text-game`)
- `star-wars-quiz.html` - Star Wars Quiz (URL: `/star-wars-quiz`)
- `cipher.html` - Cipher Tool (URL: `/cipher`)
- `weather-app.html` - Weather Application (URL: `/weather-app`)
- `testing-setup.html` - Testing Setup Guide (URL: `/testing-setup`)
- `movies-api.html` - Movies API (URL: `/movies-api`)
- `game-review.html` - Game Review (URL: `/game-review`)
- `friendbay.html` - FriendBay Project (URL: `/friendbay`)
- `event-app.html` - Event Application (URL: `/event-app`)
- `backend-api.html` - Backend API (URL: `/backend-api`)

### **Assets**
- `styles.css` - Main stylesheet
- `scripts.js` - Main JavaScript file
- `fonts.css` - Font definitions
- `sw.js` - Service worker (caching disabled)

### **Images**
- `images/Background/` - Background images
- `images/Logos/` - Logo files
- `images/Personal Pictures/` - Personal photos
- `images/social/` - Social media assets

### **Configuration**
- `CNAME` - Custom domain configuration
- `sitemap.xml` - SEO sitemap
- `favicon.ico` - Site favicon

## 🔗 **URL Structure**

### **Clean URLs (No .html extensions)**
```
/ → index.html
/about → about.html
/projects → projects.html
/contact → contact.html
/text-game → text-game.html
/star-wars-quiz → star-wars-quiz.html
/cipher → cipher.html
/weather-app → weather-app.html
/testing-setup → testing-setup.html
/movies-api → movies-api.html
/game-review → game-review.html
/friendbay → friendbay.html
/event-app → event-app.html
/backend-api → backend-api.html
```

## 🎨 **Design Patterns**

### **HTML Structure**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <!-- Meta tags, SEO, Open Graph -->
    <!-- CSS and font links -->
</head>
<body>
    <!-- Navigation -->
    <!-- Main content -->
    <!-- Footer -->
    <!-- JavaScript -->
</body>
</html>
```

### **CSS Framework**
- **Tailwind CSS** for utility classes
- **Custom CSS** in `styles.css` for specific styling
- **Responsive design** with mobile-first approach

### **JavaScript Patterns**
- **Form handling** with validation
- **Mobile menu** toggle functionality
- **Back-to-top** button
- **Performance utilities** (throttle, debounce)

## 🔧 **Technical Details**

### **SEO Implementation**
- **Meta descriptions** for each page
- **Open Graph** tags for social sharing
- **Twitter Card** meta tags
- **Canonical URLs** pointing to `https://samconnor.uk/`
- **Structured data** for search engines

### **Performance Features**
- **Service worker** for caching (currently disabled)
- **Optimized images** and assets
- **Minimal JavaScript** for fast loading
- **CSS optimization** with Tailwind

### **Contact Information**
- **Email**: contact@samusan.uk
- **Social Media**: Integrated throughout site
- **Contact Form**: Positioned with `margin-top: 30vh`

## 📝 **Common Patterns**

### **Navigation Links**
```html
<a href="/">Home</a>
<a href="/about">About</a>
<a href="/projects">Projects</a>
<a href="/contact">Contact</a>
```

### **Project Links**
```html
<a href="/text-game">Text Game</a>
<a href="/star-wars-quiz">Star Wars Quiz</a>
<!-- etc. -->
```

### **Back to Projects Links**
```html
<a href="/projects">← Back to Projects</a>
```

### **Email Links**
```html
<a href="mailto:contact@samusan.uk">contact@samusan.uk</a>
```

## 🚀 **AI Assistant Notes**

### **Quick Commands**
```bash
# Update all navigation links
find . -name "*.html" -exec sed -i 's/href="old"/href="new"/g' {} \;

# Update all project links
find . -name "*.html" -exec sed -i 's/href="old-project"/href="new-project"/g' {} \;

# Update sitemap URLs
sed -i 's|https://old-domain.com|https://samconnor.uk|g' sitemap.xml
```

### **Common Tasks**
1. **URL Updates**: Use clean URLs without .html
2. **Navigation Consistency**: All pages use same nav structure
3. **SEO Updates**: Update meta tags and structured data
4. **Contact Info**: Standardize to contact@samusan.uk

### **File Naming Convention**
- **Pages**: `page-name.html` (URL: `/page-name`)
- **Assets**: `asset-name.extension`
- **Images**: Organized in subdirectories by type

---

*This documentation helps AI assistants understand the project structure quickly and maintain consistency across all changes.*
EOF

cat > code-patterns.md << 'EOF'
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
EOF

cat > ai-commands.md << 'EOF'
# AI Commands Quick Reference

## 🚀 **Common AI Tasks & Commands**

### **Bulk File Operations**
```bash
# Update all HTML files
find . -name "*.html" -exec sed -i 's/pattern/replacement/g' {} \;

# Update specific file types
find . -name "*.html" -o -name "*.js" -exec sed -i 's/pattern/replacement/g' {} \;

# Find files containing specific text
grep -r "pattern" --include="*.html" --include="*.js"

# Rename files in bulk
for file in *.html; do mv "$file" "${file%.html}.new"; done
```

### **Git Operations**
```bash
# Stage all changes
git add -A

# Commit with descriptive message
git commit -m "Feature: [description] - [files] - [impact]"

# Push changes
git push origin main

# Revert last commit
git reset --hard HEAD~1

# Force push (use carefully)
git push --force-with-lease origin main
```

### **URL Updates**
```bash
# Update navigation links
find . -name "*.html" -exec sed -i 's/href="old"/href="new"/g' {} \;

# Update project links
find . -name "*.html" -exec sed -i 's/href="old-project"/href="new-project"/g' {} \;

# Update sitemap URLs
sed -i 's|https://old-domain.com|https://samconnor.uk|g' sitemap.xml
```

### **SEO Updates**
```bash
# Update meta descriptions
find . -name "*.html" -exec sed -i 's/<meta name="description" content=".*"/<meta name="description" content="New description"/g' {} \;

# Update canonical URLs
find . -name "*.html" -exec sed -i 's|<link rel="canonical" href=".*"|<link rel="canonical" href="https://samconnor.uk/page"|g' {} \;

# Update Open Graph URLs
find . -name "*.html" -exec sed -i 's|<meta property="og:url" content=".*"|<meta property="og:url" content="https://samconnor.uk/page"|g' {} \;
```

## 📝 **AI Communication Templates**

### **Task Request Template**
```
Task: [Specific action needed]
Files: [Relevant file paths]
Context: [Background information]
Constraints: [Limitations or requirements]
Expected: [Desired outcome]
```

### **Example Requests**
```
Task: Update all navigation links to use clean URLs
Files: All HTML files in root directory
Context: Currently using .html extensions, need clean URLs
Constraints: Must maintain functionality, update sitemap
Expected: All links work without .html extensions
```

```
Task: Add dark mode toggle functionality
Files: styles.css, scripts.js, all HTML files
Context: Site currently light theme only
Constraints: Must work without page reload, maintain accessibility
Expected: Toggle button that switches themes smoothly
```

## 🔧 **Project-Specific Commands**

### **Portfolio Site Commands**
```bash
# Update all contact emails
find . -name "*.html" -exec sed -i 's/old@email.com/contact@samusan.uk/g' {} \;

# Update all project links
find . -name "*.html" -exec sed -i 's/href="project-name.html"/href="\/project-name"/g' {} \;

# Update all navigation links
find . -name "*.html" -exec sed -i 's/href="page-name.html"/href="\/page-name"/g' {} \;

# Update sitemap lastmod dates
sed -i 's|<lastmod>.*</lastmod>|<lastmod>2025-01-29</lastmod>|g' sitemap.xml
```

### **File Renaming Commands**
```bash
# Rename HTML files to clean URLs
git mv about-page.html about.html
git mv contact-us.html contact.html

# Update all references after renaming
find . -name "*.html" -exec sed -i 's/href="about-page"/href="about"/g' {} \;
find . -name "*.html" -exec sed -i 's/href="contact-us"/href="contact"/g' {} \;
```

## ⚡ **Performance Commands**

### **File Size Optimization**
```bash
# Find large files
find . -type f -size +1M

# Count lines in files
find . -name "*.html" -exec wc -l {} \;

# Find duplicate content
find . -name "*.html" -exec grep -l "pattern" {} \;
```

### **Code Quality Checks**
```bash
# Find broken links
grep -r "href=" --include="*.html" | grep -v "http" | grep -v "mailto"

# Find missing alt attributes
grep -r "<img" --include="*.html" | grep -v "alt="

# Find unclosed tags
grep -r "<div" --include="*.html" | wc -l
grep -r "</div" --include="*.html" | wc -l
```

## 🎯 **Common Patterns**

### **HTML Structure Pattern**
```html
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
    </div>
</nav>
```

### **CSS Class Pattern**
```css
/* Navigation */
.navbar { /* styles */ }
.nav-container { /* styles */ }
.nav-logo { /* styles */ }
.nav-menu { /* styles */ }
.nav-link { /* styles */ }

/* Layout */
.container { /* styles */ }
.section { /* styles */ }
.card { /* styles */ }
```

### **JavaScript Pattern**
```javascript
// Form handling
document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            // Form processing
        });
    }
});
```

## 🔄 **Update Workflow**

### **Standard Update Process**
1. **Backup**: `git commit -m "Backup before changes"`
2. **Make Changes**: Use bulk commands for efficiency
3. **Test**: Verify functionality
4. **Commit**: `git commit -m "Feature: [description]"`
5. **Push**: `git push origin main`

### **Emergency Revert**
```bash
# Revert last commit
git reset --hard HEAD~1

# Force push to remote
git push --force-with-lease origin main
```

---

*Use these commands and patterns for consistent, efficient AI assistance across all projects.*
EOF

echo "✅ AI optimization files created!"
echo "📝 Update project-specific details in each file"
echo ""
echo "🚀 Next steps:"
echo "1. Review and customize the generated files"
echo "2. Update project-specific information"
echo "3. Test the AI optimization workflow"
echo "4. Share with your team for consistency" 