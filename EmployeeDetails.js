import React, { useContext, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { EmployeeContext } from '../contexts/EmployeeContext';
import { capitalize } from '../utils/capitalize';
import './EmployeeDetails.css'; // Import CSS for styling

const EmployeeDetails = () => {
  const { id } = useParams(); // Get employee ID from URL parameters
  const navigate = useNavigate(); // For navigation
  const { employees } = useContext(EmployeeContext); // Get employees from context

  const [employee, setEmployee] = useState(null);

  useEffect(() => {
    const foundEmployee = employees.find((e) => e.id === parseInt(id)); // Find the employee
    if (foundEmployee) {
      setEmployee(foundEmployee); // Set the employee
    } else {
      navigate('/employees'); // Navigate back if employee not found
    }
  }, [id, employees, navigate]); // Dependency array to watch

  if (!employee) {
    return <p>Loading...</p>; // Display a loading message while fetching data
  }

  return (
    <div className="employee-details-container"> {/* Apply container styling */}
      <h1>Employee Details</h1>
      <p><strong>ID:</strong> {employee.id}</p>
      <p>
        <strong>Name:</strong> {capitalize(employee.firstName)} {capitalize(employee.lastName)}
      </p>
      <p><strong>Age:</strong> {employee.age}</p>
      <p><strong>Gender:</strong> {employee.gender === 'Female' ? 'F' : 'M'}</p>
      <p><strong>Department:</strong> {employee.department}</p>
      <p><strong>Salary:</strong> {`$${employee.salary.toLocaleString()}`}</p> {/* Display salary */}
      <button onClick={() => navigate('/employees')}>Back to Employees</button> {/* Back button */}
    </div>
  );
};

export default EmployeeDetails;
