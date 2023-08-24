// api/data.js
const employees = [
    { id: 1, name: 'Employee 1', email: 'emp1@gmail.com', phone: '123-456-7890' },
    { id: 2, name: 'Employee 2', email: 'emp2@gmail.com', phone: '987-654-3210' }
  ];
  
  const requests = [
    { id: 1, employeeId: 1, permission: false, fileLink: 'link1' },
    { id: 2, employeeId: 2, permission: true, fileLink: 'link2' }
  ];
  
  module.exports = {
    employees,
    requests
  };
  