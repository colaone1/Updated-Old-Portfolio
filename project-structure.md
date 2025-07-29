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