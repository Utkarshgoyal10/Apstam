const scriptURL = 'https://script.google.com/macros/s/AKfycbzDJL35AltIkgQZCu37BxIx8QrnaaWFjW16Iscv2FHpQC4o8ffEsEGs6ujN7qH9FPOn/exec';
const form = document.forms['google-sheet'];

form.addEventListener('submit', (e) => {
  e.preventDefault();


  const firstName = document.getElementById("f_name").value;
  const lastName = document.getElementById("l_name").value;
  const phoneNumber = document.getElementById("number").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  const formData = new FormData();
  formData.append('f_name', firstName);
  formData.append('l_name', lastName);
  formData.append('number', phoneNumber);
  formData.append('email', email);
  formData.append('message', message);

  // Send data to Google Apps Script web app
  fetch(scriptURL, { 
    method: 'POST',
    body: formData
  })
  .then(response => {
    alert("Thanks for Contacting us..! We Will Contact You Soon...");
    form.reset(); // Reset the form after submission
  })
  .catch(error => console.error('Error!', error.message));
});

document.addEventListener('DOMContentLoaded', () => {
  const hamburgerBtn = document.getElementById('hamburger-btn');
  const mobileMenu = document.getElementById('mobile-menu');
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
});




