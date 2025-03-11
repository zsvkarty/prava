// Mobile menu functionality
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuButton = document.querySelector('button.md\\:hidden');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileMenuOverlay = document.getElementById('mobile-menu-overlay');
    
    if (mobileMenuButton && mobileMenu && mobileMenuOverlay) {
        mobileMenuButton.addEventListener('click', function() {
            mobileMenu.classList.remove('-right-full');
            mobileMenu.classList.add('right-0');
            mobileMenuOverlay.classList.remove('hidden');
            document.body.classList.add('overflow-hidden');
        });
        
        document.querySelectorAll('#mobile-menu button, #mobile-menu-overlay').forEach(element => {
            element.addEventListener('click', function() {
                mobileMenu.classList.remove('right-0');
                mobileMenu.classList.add('-right-full');
                mobileMenuOverlay.classList.add('hidden');
                document.body.classList.remove('overflow-hidden');
            });
        });
    }
});

// Infinite carousel functionality
document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.querySelector('.review-carousel');
    
    // Clone the first set of cards and append to the end for seamless looping
    function setupCarousel() {
        const cards = document.querySelectorAll('.review-card');
        const cardsToClone = Math.min(cards.length, 4); // Clone first 4 cards or all if less
        
        for (let i = 0; i < cardsToClone; i++) {
            const clone = cards[i].cloneNode(true);
            carousel.appendChild(clone);
        }
    }
    
    // Reset animation when it completes
    carousel.addEventListener('animationiteration', function() {
        // This keeps the animation smooth by not actually resetting position
        // The cloned cards create the illusion of an infinite loop
    });
    
    setupCarousel();
});
