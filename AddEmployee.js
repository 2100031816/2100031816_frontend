import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { EmployeeContext } from '../contexts/EmployeeContext';
import './AddEmployee.css'; // Import the CSS for centering

const AddEmployee = () => {
  const navigate = useNavigate(); // Initialize the navigate hook
  const { addEmployee } = useContext(EmployeeContext); // Context to add employee
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    gender: '',
    age: '',
    department: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission

    // Ensure all fields are filled
    if (
      form.firstName &&
      form.lastName &&
      form.gender &&
      form.age &&
      form.department
    ) {
      const newEmployee = {
        id: Date.now(), // Assign a unique ID
        firstName: form.firstName,
        lastName: form.lastName,
        gender: form.gender,
        age: parseInt(form.age),
        department: form.department,
      };

      addEmployee(newEmployee); // Add employee to the context
      navigate('/employees'); // Navigate to the employees list
    } else {
      alert('Please fill in all fields'); // Validation alert
    }
  };

  return (
    <div className="add-employee-container"> {/* Centering container */}
      <h1>Add Employee</h1>
      <form onSubmit={handleSubmit} className="add-employee-form"> {/* Centered form */}
        <div>
          <label>First Name</label>
          <input
            type="text"
            name="firstName"
            value={form.firstName}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Last Name</label>
          <input
            type="text"
            name="lastName"
            value={form.lastName}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Gender</label>
          <select
            name="gender"
            value={form.gender}
            onChange={handleChange}
            required
          >
            <option value="">Select</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>
        <div>
          <label>Age</label>
          <input
            type="number"
            name="age"
            value={form.age}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Department</label>
          <input
            type="text"
            name="department"
            value={form.department}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Add Employee</button>
      </form>
    </div>
  );
};

export default AddEmployee;
