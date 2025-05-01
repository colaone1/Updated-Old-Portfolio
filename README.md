# Portfolio Website

## Testing Documentation

### How to Test the Website

#### 1. Testing JavaScript Functionality
Open your browser's developer tools (F12 or right-click -> Inspect) and test the following in the Console:

1. **Navigation Functionality**
   - Scroll up and down the page to verify the navigation bar hides/shows appropriately
   - Test different scroll speeds to ensure smooth transitions

2. **Project Cards**
   - Hover over project cards to verify the hover effect
   - Click on project links to ensure they work
   - Use keyboard navigation (Tab key) to verify focus states

3. **Skip Link**
   - Click the "Skip to main content" link
   - Verify focus moves to the main content
   - Test with keyboard navigation

4. **Reduced Motion**
   - In Chrome DevTools, go to Rendering tab
   - Enable "prefers-reduced-motion" to test accessibility features
   - Verify animations are disabled when reduced motion is preferred

#### 2. UI Testing
Test each page manually:

1. **Homepage (index.html)**
   - Verify all navigation links work
   - Check that the hero section displays correctly
   - Ensure project cards are visible and interactive
   - Test social media links

2. **Projects Page (projects.html)**
   - Verify all projects are displayed
   - Test project links and buttons
   - Check image loading

3. **About Page (about-page.html)**
   - Verify content displays correctly
   - Test all links
   - Check image loading

4. **Contact Page (contact-us.html)**
   - Test form elements
   - Verify form validation
   - Test the submit button

#### 3. Cross-browser Testing
Test the website in different browsers:
- Google Chrome
- Mozilla Firefox
- Microsoft Edge
- Safari (if available)

#### 4. Responsive Testing
Use browser's device emulation (F12 -> Toggle device toolbar) to test at different breakpoints:
- Mobile (320px)
- Tablet (768px)
- Desktop (1024px)
- Large Desktop (1440px)

#### 5. Accessibility Testing
1. Use browser's built-in accessibility tools
2. Verify:
   - All images have alt text
   - Color contrast meets standards
   - Keyboard navigation works
   - Skip link functions properly

#### 6. Performance Testing
Use Chrome DevTools:
1. Open Performance tab
2. Record page load
3. Verify:
   - Page loads under 3 seconds
   - No console errors
   - Smooth animations
   - Optimized images

### Testing Results
Document your testing results with:
- Date of testing
- Browser/device used
- Any issues found
- Steps to reproduce issues
- Solutions implemented
