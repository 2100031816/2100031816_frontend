import React, { createContext, useState } from 'react';

// Function to generate a random salary
const generateRandomSalary = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

export const EmployeeContext = createContext();

export const EmployeeProvider = ({ children }) => {
  // Initialize employees with random salaries
  const [employees, setEmployees] = useState([
    {
      id: 1,
      firstName: 'Sam',
      lastName: 'Adam',
      age: 45,
      department: 'IT',
      salary: generateRandomSalary(50000, 150000), // Random salary
    },
    {
      id: 2,
      firstName: 'John',
      lastName: 'Jacob',
      age: 35,
      department: 'Sales',
      salary: generateRandomSalary(50000, 150000), // Random salary
    },
  ]);

  const addEmployee = (employee) => {
    employee.salary = generateRandomSalary(50000, 150000); // Assign random salary when adding a new employee
    setEmployees([...employees, employee]);
  };

  const editEmployee = (updatedEmployee) => {
    const updatedEmployees = employees.map((employee) =>
      employee.id === updatedEmployee.id ? updatedEmployee : employee
    );
    setEmployees(updatedEmployees);
  };

  const deleteEmployee = (id) => {
    setEmployees(employees.filter((employee) => employee.id !== id));
  };

  return (
    <EmployeeContext.Provider
      value={{ employees, addEmployee, editEmployee, deleteEmployee }}
    >
      {children}
    </EmployeeContext.Provider>
  );
};
