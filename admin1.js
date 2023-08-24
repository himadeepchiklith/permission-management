// admin1.js
document.addEventListener('DOMContentLoaded', () => {
    const requestsTable = document.querySelector('#requests-table tbody');
    const employeeDetailsDiv = document.querySelector('#employee-details');
    const employeeTable = document.querySelector('#employee-table tbody');
  
    // Fetch requests data from the API
    fetch('/api/requests')
      .then(response => response.json())
      .then(requests => {
        requestsTable.innerHTML = requests.map(request => `
          <tr>
            <td>${request.id}</td>
            <td>Employee ${request.employeeId}</td>
            <td>
              <button class="accept-btn">Accept</button>
              <button class="reject-btn">Reject</button>
            </td>
            <td><a href="${request.fileLink}" target="_blank">View File</a></td>
          </tr>
        `).join('');
      });
  
    // Fetch employee details from the API
    fetch('/api/employees')
      .then(response => response.json())
      .then(employees => {
        const adminDetails = employees.find(employee => employee.email === 'admin1@gmail.com');
        employeeDetailsDiv.innerHTML = `
          <p>Name: ${adminDetails.name}</p>
          <p>Email: ${adminDetails.email}</p>
          <p>Phone Number: ${adminDetails.phone}</p>
        `;
  
        employeeTable.innerHTML = employees.map(employee => `
          <tr>
            <td>${employee.name}</td>
            <td>${employee.email}</td>
            <td>${employee.phone}</td>
          </tr>
        `).join('');
      });
  });
  