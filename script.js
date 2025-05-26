function addToCart() {
      const button = document.querySelector('.add-to-cart-btn');
      const originalText = button.innerHTML;
      
      // Add animation effect
      button.style.transform = 'scale(0.95)';
      button.innerHTML = `
        <svg class="cart-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <polyline points="20,6 9,17 4,12"></polyline>
        </svg>
        Added!
      `;
      
      setTimeout(() => {
        button.style.transform = 'scale(1)';
        button.innerHTML = originalText;
      }, 1500);
    }

    // Add some interactive enhancements
    document.addEventListener('DOMContentLoaded', function() {
      const card = document.querySelector('.card');
      
      // Add subtle parallax effect on mouse move
      card.addEventListener('mousemove', function(e) {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 10;
        const rotateY = (centerX - x) / 10;
        
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-5px)`;
      });
      
      card.addEventListener('mouseleave', function() {
        card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)';
      });
    });