// Responsive Menu Toggle
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('menu-btn').addEventListener('click', function () {
      var menu = document.getElementById('menu');
      if (menu.classList.contains('hidden')) {
        menu.classList.remove('hidden');
      } else {
        menu.classList.add('hidden');
      }
    });
  });
  
  // Form Validation (if you have a form)
  function validateForm() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    if (name === '') {
      alert('Name is required');
      return false;
    }
    if (email === '' || !emailPattern.test(email)) {
      alert('Please enter a valid email address');
      return false;
    }
    if (message === '') {
      alert('Message is required');
      return false;
    }
    return true;
  }
  
  if (document.getElementById('contactForm')) {
    document.getElementById('contactForm').onsubmit = validateForm;
  }
  