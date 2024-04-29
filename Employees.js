import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { EmployeeContext } from '../contexts/EmployeeContext';
import './EmployeesTable.css'; // Import CSS for styling

const Employees = () => {
  const navigate = useNavigate();
  const { employees, deleteEmployee } = React.useContext(EmployeeContext);

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this employee?')) {
      deleteEmployee(id);
    }
  };

  return (
    <div className="employees-container">
      <h1>Employees</h1>
      <button onClick={() => navigate('/add-employee')}>Add Employee</button>
      <table className="centered-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Department</th>
            <th>Salary</th> 
            <th>Actions</th> 
          </tr>
        </thead>
        <tbody>
          {employees.map((employee, index) => (
            <tr key={employee.id} className={index % 2 === 0 ? 'even-row' : 'odd-row'}>
              <td>
                <Link to={`/employee-details/${employee.id}`}>{employee.id}</Link>
              </td>
              <td>
                {employee.firstName} {employee.lastName}
              </td>
              <td>{employee.age}</td>
              <td>{employee.gender === 'Female' ? 'F' : 'M'}</td>
              <td>{employee.department}</td>
              <td>{`$${employee.salary.toLocaleString()}`}</td>
              <td>
                <button onClick={() => navigate(`/edit-employee/${employee.id}`)}>Edit</button>
                <button
                  className="delete-button" /* Apply red color for Delete button */
                  onClick={() => handleDelete(employee.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Employees;
