// signin.js
document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.querySelector('#login-form');
  
    loginForm.addEventListener('submit', event => {
      event.preventDefault();
  
      const formData = new FormData(loginForm);
      const credentials = {
        email: formData.get('email'),
        password: formData.get('password')
      };
  
      // Here, you can implement your logic to verify user credentials
      // For this example, let's assume you have an API to handle user login
      fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
      })
      .then(response => response.json())
      .then(responseData => {
        console.log('User logged in:', responseData);
  
        // Redirect to appropriate dashboard based on role
        if (responseData.role === 'admin') {
          window.location.href = 'admin1.html'; // Change this based on admin's role
        } else if (responseData.role === 'employee') {
          window.location.href = 'employee1.html'; // Change this based on employee's role
        }
      })
      .catch(error => {
        console.error('Error logging in:', error);
      });
    });
  });
  