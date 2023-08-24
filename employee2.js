// employee2.js
document.addEventListener('DOMContentLoaded', () => {
    const requestsTable = document.querySelector('#requests-table tbody');
    const employeeDetailsDiv = document.querySelector('#employee-details');
  
    // Fetch requests data from the API
    fetch('/api/requests')
      .then(response => response.json())
      .then(requests => {
        requestsTable.innerHTML = requests
          .filter(request => request.employeeId === 2)
          .map(request => `
            <tr>
              <td>${request.id}</td>
              <td>${request.item}</td>
              <td>${request.permission ? 'Confirmed' : 'Pending'}</td>
              <td><a href="${request.fileLink}" target="_blank">View File</a></td>
            </tr>
          `).join('');
      });
  
    // Fetch employee details from the API
    fetch('/api/employees')
      .then(response => response.json())
      .then(employees => {
        const employeeDetails = employees.find(employee => employee.email === 'emp2@gmail.com');
        employeeDetailsDiv.innerHTML = `
          <p>Name: ${employeeDetails.name}</p>
          <p>Email: ${employeeDetails.email}</p>
          <p>Phone Number: ${employeeDetails.phone}</p>
        `;
      });
  });
  