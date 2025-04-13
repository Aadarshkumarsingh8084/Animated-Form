document.addEventListener('DOMContentLoaded', function() {
    // Form elements
    const signupForm = document.getElementById('signupForm');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirmPassword');
    const togglePasswordButtons = document.querySelectorAll('.toggle-password');
    const switchToLoginBtn = document.getElementById('switchToLogin');
    const successMessage = document.getElementById('successMessage');
    const closeSuccessBtn = document.getElementById('closeSuccess');

    // Toggle password visibility
    togglePasswordButtons.forEach(button => {
        button.addEventListener('click', function() {
            const input = this.parentElement.querySelector('input');
            const icon = this.querySelector('i');
            
            if (input.type === 'password') {
                input.type = 'text';
                icon.classList.remove('fa-eye');
                icon.classList.add('fa-eye-slash');
            } else {
                input.type = 'password';
                icon.classList.remove('fa-eye-slash');
                icon.classList.add('fa-eye');
            }
        });
    });

    // Form validation
    signupForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Validate passwords match
        if (passwordInput.value !== confirmPasswordInput.value) {
            alert('Passwords do not match!');
            return;
        }
        
        // Validate terms checkbox
        const termsCheckbox = document.getElementById('terms');
        if (!termsCheckbox.checked) {
            alert('Please agree to the terms and conditions');
            return;
        }
        
        // Show success message
        showSuccessMessage();
    });

    // Switch to login (demo functionality)
    switchToLoginBtn.addEventListener('click', function() {
        alert('This is just a demo. In a real application, this would switch to a login form.');
    });

    // Close success message
    closeSuccessBtn.addEventListener('click', function() {
        successMessage.classList.remove('active');
        // Reset form
        signupForm.reset();
    });

    // Show success message with animation
    function showSuccessMessage() {
        successMessage.classList.add('active');
    }

    // Input focus animations
    const formGroups = document.querySelectorAll('.form-group');
    formGroups.forEach(group => {
        const input = group.querySelector('input');
        
        input.addEventListener('focus', function() {
            group.querySelector('.underline').style.width = '100%';
        });
        
        input.addEventListener('blur', function() {
            if (!input.value) {
                group.querySelector('.underline').style.width = '0%';
            }
        });
    });

    // Floating circles animation
    const circles = document.querySelectorAll('.circle');
    circles.forEach(circle => {
        // Randomize initial position and animation duration
        const randomX = Math.random() * 20 - 10;
        const randomY = Math.random() * 20 - 10;
        const duration = 15 + Math.random() * 10;
        
        circle.style.transform = `translate(${randomX}px, ${randomY}px)`;
        circle.style.animationDuration = `${duration}s`;
    });

    // Social button hover effects
    const socialButtons = document.querySelectorAll('.social-btn');
    socialButtons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // Submit button hover effect
    const submitBtn = document.querySelector('.submit-btn');
    submitBtn.addEventListener('mouseenter', function() {
        this.querySelector('i').style.transform = 'translateX(5px)';
    });
    
    submitBtn.addEventListener('mouseleave', function() {
        this.querySelector('i').style.transform = 'translateX(0)';
    });
});
