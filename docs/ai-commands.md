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