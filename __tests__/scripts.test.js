import '@testing-library/jest-dom';

// Mock the DOM
document.body.innerHTML = `
  <nav class="nav-container"></nav>
  <div class="projects-section">
    <article>
      <a href="#">Test Link</a>
      <button>Test Button</button>
    </article>
  </div>
  <a href="#main-content">Skip to main content</a>
  <main id="main-content">Main content</main>
`;

// Import the functions to test
const {
  handleReducedMotion,
  initializeNavigation,
  initializeProjectCards,
  initializeSkipLink,
  throttle
} = require('../scripts.js');

describe('Navigation Functionality', () => {
  test('throttle function limits execution', () => {
    const mockFn = jest.fn();
    const throttledFn = throttle(mockFn, 100);
    
    // Call multiple times
    throttledFn();
    throttledFn();
    throttledFn();
    
    // Should only execute once
    expect(mockFn).toHaveBeenCalledTimes(1);
  });

  test('navigation hides on scroll down', () => {
    const nav = document.querySelector('.nav-container');
    initializeNavigation();
    
    // Simulate scroll down
    window.pageYOffset = 100;
    window.dispatchEvent(new Event('scroll'));
    
    expect(nav.classList.contains('nav-hidden')).toBe(true);
  });
});

describe('Project Cards', () => {
  test('card hover effect is applied', () => {
    const card = document.querySelector('.projects-section article');
    initializeProjectCards();
    
    // Simulate hover
    card.dispatchEvent(new Event('mouseenter'));
    expect(card.style.transform).toBe('translateY(-5px)');
    
    // Simulate mouse leave
    card.dispatchEvent(new Event('mouseleave'));
    expect(card.style.transform).toBe('translateY(0)');
  });

  test('focus states are handled correctly', () => {
    const card = document.querySelector('.projects-section article');
    const link = card.querySelector('a');
    initializeProjectCards();
    
    // Simulate focus
    link.dispatchEvent(new Event('focus'));
    expect(card.classList.contains('card-focused')).toBe(true);
    
    // Simulate blur
    link.dispatchEvent(new Event('blur'));
    expect(card.classList.contains('card-focused')).toBe(false);
  });
});

describe('Skip Link', () => {
  test('skip link focuses main content', () => {
    const skipLink = document.querySelector('a[href="#main-content"]');
    const mainContent = document.getElementById('main-content');
    initializeSkipLink();
    
    // Mock focus method
    mainContent.focus = jest.fn();
    
    // Simulate click
    skipLink.dispatchEvent(new Event('click'));
    
    expect(mainContent.focus).toHaveBeenCalled();
  });
});

describe('Reduced Motion', () => {
  test('handles reduced motion preference', () => {
    // Mock matchMedia
    window.matchMedia = jest.fn().mockImplementation(query => ({
      matches: true,
      media: query,
    }));
    
    // Add animated element
    document.body.innerHTML += '<div class="animate-fadeInUp"></div>';
    
    handleReducedMotion();
    
    const animatedElement = document.querySelector('.animate-fadeInUp');
    expect(animatedElement.style.animation).toBe('none');
    expect(animatedElement.style.opacity).toBe('1');
  });
}); 