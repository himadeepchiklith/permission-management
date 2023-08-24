// registration.js
document.addEventListener('DOMContentLoaded', () => {
    const signupForm = document.querySelector('#signup-form');
  
    signupForm.addEventListener('submit', event => {
      event.preventDefault();
  
      const formData = new FormData(signupForm);
      const userData = {
        name: formData.get('name'),
        email: formData.get('email'),
        password: formData.get('password'),
        role: formData.get('role')
      };
  
      // Here, you can implement your logic to store user data
      // For this example, let's assume you have an API to handle user registration
      fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
      })
      .then(response => response.json())
      .then(responseData => {
        console.log('User registered successfully:', responseData);
        // Redirect to login page after successful registration
        window.location.href = 'index.html';
      })
      .catch(error => {
        console.error('Error registering user:', error);
      });
    });
  });
  