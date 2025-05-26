# Frontend Mentor - Product preview card component solution

This is a solution to the [Product preview card component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/product-preview-card-component-GO7UmttRfa). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout depending on their device's screen size
- See hover and focus states for interactive elements

### Screenshot
- for Desktop
![Product Preview Card for desktop](./design/desktop-design.jpg)

- for Mobile

![Product Preview Card for mobile](./design/mobile-design.jpg)

### Links

- Solution URL: [GitHub Repository](https://github.com/seyedahmaddv/Product-preview-card-component-)
- Live Site URL: [Live Demo](https://product-preview-card-component-101.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties (CSS Variables)
- CSS Grid
- Flexbox
- Mobile-first responsive design
- Google Fonts (Montserrat & Fraunces)
- Vanilla JavaScript for interactivity
- CSS animations and transitions
- 3D transforms and parallax effects

### What I learned

Working on this project helped me strengthen several key concepts:

**CSS Grid Layout**: Used CSS Grid to create a responsive two-column layout that automatically stacks on mobile devices.

```css
.card {
  display: grid;
  grid-template-columns: 1fr;
}

@media (min-width: 640px) {
  .card {
    grid-template-columns: 1fr 1fr;
  }
}
```

**CSS Custom Properties**: Implemented CSS variables for consistent color theming throughout the project.

```css
:root {
  --green-500: hsl(158, 36%, 37%);
  --green-700: hsl(158, 42%, 18%);
  --black: hsl(212, 21%, 14%);
  --grey: hsl(228, 12%, 48%);
  --cream: hsl(30, 38%, 92%);
  --white: hsl(0, 0%, 100%);
}
```

**Interactive JavaScript**: Added engaging user interactions including button feedback and 3D parallax effects.

```js
function addToCart() {
  const button = document.querySelector('.add-to-cart-btn');
  button.innerHTML = `
    <svg class="cart-icon" viewBox="0 0 24 24">
      <polyline points="20,6 9,17 4,12"></polyline>
    </svg>
    Added!
  `;
}
```

### Continued development

Areas I want to focus on in future projects:

- **Advanced CSS animations**: Exploring more complex keyframe animations and CSS transitions
- **JavaScript performance optimization**: Learning about efficient DOM manipulation techniques
- **Accessibility improvements**: Implementing better keyboard navigation and screen reader support
- **CSS architecture**: Exploring methodologies like BEM or CSS modules for larger projects

### Useful resources

- [CSS Grid Guide](https://css-tricks.com/snippets/css/complete-guide-grid/) - Comprehensive guide that helped me understand CSS Grid layout
- [Google Fonts](https://fonts.google.com/) - Great resource for web fonts with easy implementation
- [MDN Web Docs](https://developer.mozilla.org/) - Essential reference for CSS properties and JavaScript methods
- [Can I Use](https://caniuse.com/) - Helped check browser compatibility for CSS features

## Author

- Website - [Seyed Ahmad](https://www.linkedin.com/in/seyedahmaddv/)
- Frontend Mentor - [@Seyedahmaddv](https://www.frontendmentor.io/profile/Seyedahmaddv)
- GitHub - [@Seyedahmaddv](https://github.com/Seyedahmaddv)