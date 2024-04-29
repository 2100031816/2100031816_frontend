import React from 'react';
import './Home.css'; // Import CSS for styling

const Home = () => {
  return (
    <div className="home-container"> {/* Centered container */}
      <h1 className="home-title">Welcome to the Employee Management System</h1> {/* Main title */}
      <p className="home-intro">
        This application allows you to manage and maintain employee data in a structured and user-friendly manner. Here's what you can do with this system:
      </p>
      <ul className="home-features">
        <li>
          <strong>View Employees:</strong> Easily view a list of all employees with basic details such as ID, name, age, gender, department, and position.
        </li>
        <li>
          <strong>Add Employees:</strong> Add new employees by providing essential information like first name, last name, age, gender, department, and more.
        </li>
        <li>
          <strong>Edit Employee Information:</strong> Edit existing employee details by clicking the "Edit" button next to an employee's name.
        </li>
        <li>
          <strong>Delete Employees:</strong> Delete employees from the system if needed. This requires confirmation to prevent accidental deletions.
        </li>
        <li>
          <strong>View Employee Details:</strong> Click on an employee's ID or use a "View" button to see detailed information about a specific employee.
        </li>
        <li>
          <strong>Salary Calculation:</strong> The system automatically calculates employee salaries based on certain conditions, simplifying salary management.
        </li>
        <li>
          <strong>Interactive Features:</strong> The application provides interactive elements, such as text highlighting on hover, to improve the user experience.
        </li>
      </ul>
    </div>
  );
};

export default Home;
