// ============================================
// PAGE LOAD ANIMATION
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    // Add loaded class for smooth fade-in
    document.body.classList.add('loaded');
    
    // Initialize based on current page
    const currentPage = window.location.pathname.split('/').pop();
    
    if (currentPage === 'index.html' || currentPage === '') {
        initIndexPage();
    } else if (currentPage === 'letter.html') {
        initLetterPage();
    }
});

// ============================================
// INDEX PAGE - DAY SELECTION LOGIC
// ============================================
function initIndexPage() {
    const dayOptions = document.querySelectorAll('.day-option');
    const submitBtn = document.getElementById('submitBtn');
    const wrongMessage = document.getElementById('wrongMessage');
    const successAnimation = document.getElementById('successAnimation');
    let selectedDay = null;

    // Handle day option selection
    dayOptions.forEach(option => {
        option.addEventListener('click', function() {
            // Remove previous selection
            dayOptions.forEach(opt => opt.classList.remove('selected'));
            
            // Add selected class to clicked option
            this.classList.add('selected');
            
            // Store selected day
            selectedDay = this.getAttribute('data-day');
            
            // Hide wrong message if visible
            wrongMessage.classList.remove('show');
        });
    });

    // Handle submit button click
    submitBtn.addEventListener('click', function() {
        // Check if a day is selected
        if (!selectedDay) {
            showWrongMessage();
            return;
        }

        // Check if correct day is selected
        if (selectedDay === 'propose-day') {
            // Show success animation
            showSuccessAnimation();
            
            // Redirect to letter page after 1.5 seconds
            setTimeout(function() {
                window.location.href = 'letter.html';
            }, 1500);
        } else {
            // Show wrong message (stays visible until correct answer is selected)
            showWrongMessage();
        }
    });

    // Function to show wrong message
    function showWrongMessage() {
        wrongMessage.classList.add('show');
        
        // Message stays visible until correct answer is selected or user clicks another option
    }

    // Function to show success animation
    function showSuccessAnimation() {
        successAnimation.classList.add('show');
    }

    // Add keyboard support (Enter key to submit)
    document.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            submitBtn.click();
        }
    });
}

// ============================================
// LETTER PAGE INITIALIZATION
// ============================================
function initLetterPage() {
    // Add entrance animation
    const letterCard = document.querySelector('.letter-card');
    
    if (letterCard) {
        // Initially hide the card
        letterCard.style.opacity = '0';
        letterCard.style.transform = 'scale(0.9)';
        
        // Animate in after a short delay
        setTimeout(function() {
            letterCard.style.transition = 'all 1s ease';
            letterCard.style.opacity = '1';
            letterCard.style.transform = 'scale(1)';
        }, 300);
    }

    // Add sparkle effect on hover (optional enhancement)
    if (letterCard) {
        letterCard.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.02)';
        });

        letterCard.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    }

    // Initialize proposal buttons
    initProposalButtons();
}

// ============================================
// PROPOSAL BUTTONS FUNCTIONALITY
// ============================================
function initProposalButtons() {
    const btnYes = document.getElementById('btnYes');
    const btnNo = document.getElementById('btnNo');
    const popupOverlay = document.getElementById('popupOverlay');
    const popupClose = document.getElementById('popupClose');
    const proposalSong = document.getElementById('proposalSong');

    // Handle "Yes" button click
    if (btnYes) {
        btnYes.addEventListener('click', function() {
            // Play the romantic song
            if (proposalSong) {
                proposalSong.play().catch(function(error) {
                    console.log('Audio playback failed:', error);
                    // Fallback: show message that song would play
                    alert('🎵 Playing: Hum Tere Pyaar Mein... 💕');
                });
            }

            // Show success animation
            this.textContent = 'Yay! 💖✨';
            this.style.transform = 'scale(1.2)';
            this.style.background = 'linear-gradient(135deg, #FF1493, #FF69B4)';
            
            // Create celebration effect
            createCelebration();
            
            // Disable both buttons
            btnYes.disabled = true;
            btnNo.disabled = true;
        });
    }

    // Handle "No" button click
    if (btnNo) {
        btnNo.addEventListener('click', function() {
            // Show popup
            if (popupOverlay) {
                popupOverlay.classList.add('show');
            }
        });
    }

    // Handle popup close button
    if (popupClose) {
        popupClose.addEventListener('click', function() {
            // Hide popup
            popupOverlay.classList.remove('show');
            
            // Automatically trigger "Yes" button
            setTimeout(function() {
                btnYes.click();
            }, 300);
        });
    }

    // Close popup on overlay click
    if (popupOverlay) {
        popupOverlay.addEventListener('click', function(e) {
            if (e.target === popupOverlay) {
                popupOverlay.classList.remove('show');
            }
        });
    }
}

// ============================================
// CELEBRATION ANIMATION
// ============================================
function createCelebration() {
    // Create multiple hearts falling from top
    for (let i = 0; i < 30; i++) {
        setTimeout(function() {
            const heart = document.createElement('div');
            heart.classList.add('celebration-heart');
            heart.textContent = ['❤️', '💕', '💖', '💗', '💘'][Math.floor(Math.random() * 5)];
            heart.style.left = Math.random() * 100 + '%';
            heart.style.animationDelay = Math.random() * 2 + 's';
            heart.style.fontSize = (Math.random() * 20 + 20) + 'px';
            document.body.appendChild(heart);
            
            // Remove after animation
            setTimeout(function() {
                heart.remove();
            }, 4000);
        }, i * 100);
    }
}

// ============================================
// FLOATING HEARTS ENHANCEMENT
// ============================================
// Make hearts more dynamic
document.addEventListener('DOMContentLoaded', function() {
    const hearts = document.querySelectorAll('.heart');
    
    hearts.forEach((heart, index) => {
        // Randomize heart appearance
        const heartSymbols = ['❤️', '💕', '💖', '💗', '💘', '💝'];
        const randomSymbol = heartSymbols[Math.floor(Math.random() * heartSymbols.length)];
        heart.textContent = randomSymbol;
        
        // Add random horizontal movement
        const randomX = Math.random() * 200 - 100; // -100 to 100
        heart.style.setProperty('--random-x', randomX + 'px');
    });
});

// Update heart animation with random movement
const style = document.createElement('style');
style.textContent = `
    @keyframes floatHeartRandom {
        0% {
            bottom: -10%;
            opacity: 0;
            transform: translateX(0) rotate(0deg);
        }
        10% {
            opacity: 0.6;
        }
        50% {
            transform: translateX(var(--random-x, 50px)) rotate(180deg);
        }
        90% {
            opacity: 0.6;
        }
        100% {
            bottom: 110%;
            opacity: 0;
            transform: translateX(var(--random-x, 100px)) rotate(360deg);
        }
    }
`;
document.head.appendChild(style);

// ============================================
// SMOOTH PAGE TRANSITIONS
// ============================================
// Add loading state before navigation
window.addEventListener('beforeunload', function() {
    document.body.classList.remove('loaded');
    document.body.classList.add('loading');
});

// ============================================
// RESPONSIVE TOUCH INTERACTIONS
// ============================================
// Enhance touch interactions for mobile
if ('ontouchstart' in window) {
    const dayOptions = document.querySelectorAll('.day-option');
    
    dayOptions.forEach(option => {
        option.addEventListener('touchstart', function() {
            this.style.transform = 'scale(0.95)';
        });
        
        option.addEventListener('touchend', function() {
            this.style.transform = '';
        });
    });
}

// ============================================
// PREVENT DOUBLE SUBMISSION
// ============================================
let isSubmitting = false;

document.addEventListener('DOMContentLoaded', function() {
    const submitBtn = document.getElementById('submitBtn');
    
    if (submitBtn) {
        const originalClickHandler = submitBtn.onclick;
        
        submitBtn.addEventListener('click', function(e) {
            if (isSubmitting) {
                e.preventDefault();
                return false;
            }
            
            isSubmitting = true;
            
            // Reset after 2 seconds
            setTimeout(function() {
                isSubmitting = false;
            }, 2000);
        });
    }
});

// ============================================
// PHOTO BORDER ERROR HANDLING
// ============================================
// Handle missing images gracefully
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.photo-frame img');
    
    images.forEach(img => {
        img.addEventListener('error', function() {
            // Image failed to load, placeholder SVG will show
            console.log('Image placeholder shown - add your photos to assets/images/');
        });
    });
});

// ============================================
// CONSOLE MESSAGE
// ============================================
console.log('%c💕 Made with Love for Propose Day 💕', 'color: #FF69B4; font-size: 20px; font-weight: bold;');
console.log('%cFebruary 8, 2026', 'color: #9370DB; font-size: 14px;');
