const scriptURL = 'https://script.google.com/macros/s/AKfycbzDJL35AltIkgQZCu37BxIx8QrnaaWFjW16Iscv2FHpQC4o8ffEsEGs6ujN7qH9FPOn/exec';
const form = document.forms['google-sheet'];

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const street = document.getElementById("street").value;
    const city = document.getElementById("city").value;
    const pincode = document.getElementById("pincode").value;
    const phone = document.getElementById("phone").value;
    const email = document.getElementById("email").value;

    const formData = new FormData();
    formData.append('name', name);
    formData.append('street', street);
    formData.append('city', city);
    formData.append('pincode', pincode);
    formData.append('phone', phone);
    formData.append('email', email);

    // Send data to Google Apps Script web app
    fetch(scriptURL, { 
        method: 'POST',
        body: formData
    })
    .then(response => {
        if (response.ok) {
            alert("Thanks for contacting us! We will get back to you soon.");
            form.reset(); // Reset the form after submission
        } else {
            throw new Error('Network response was not ok');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert("There was an error submitting your form. Please try again.");
    });
});

// Mobile menu functionality (if needed)
document.addEventListener('DOMContentLoaded', () => {
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (hamburgerBtn && mobileMenu) {
        const mobileLinks = document.querySelectorAll('.mobile-link');

        // Toggle the menu visibility
        hamburgerBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });

        // Hide the menu when any link is clicked
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
            });
        });
    }
});