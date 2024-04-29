import React, { useContext, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom'; // Replace useHistory with useNavigate
import { EmployeeContext } from '../contexts/EmployeeContext'; // Context for employees

const EditEmployee = () => {
  const { id } = useParams(); // Get the ID from the URL
  const navigate = useNavigate(); // Initialize navigate hook
  const { employees, editEmployee } = useContext(EmployeeContext); // Get context data

  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    gender: '',
    age: '',
    department: '',
  });

  // Fetch the employee by ID
  useEffect(() => {
    const employee = employees.find((e) => e.id === parseInt(id));
    if (employee) {
      setForm({
        firstName: employee.firstName,
        lastName: employee.lastName,
        gender: employee.gender,
        age: employee.age,
        department: employee.department,
      });
    } else {
      navigate('/employees'); // Redirect if employee not found
    }
  }, [id, employees, navigate]); // Include navigate in dependency array

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form behavior

    if (
      form.firstName &&
      form.lastName &&
      form.gender &&
      form.age &&
      form.department
    ) {
      const updatedEmployee = {
        id: parseInt(id), // Ensure it's a number
        firstName: form.firstName,
        lastName: form.lastName,
        gender: form.gender,
        age: parseInt(form.age),
        department: form.department,
      };

      editEmployee(updatedEmployee); // Update employee in context
      navigate('/employees'); // Navigate back to employee list
    } else {
      alert('Please fill in all fields'); // Validation message
    }
  };

  return (
    <div>
      <h1>Edit Employee</h1>
      <form onSubmit={handleSubmit}>
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
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
};

export default EditEmployee;
