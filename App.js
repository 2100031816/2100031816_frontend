import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Correct import
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Employees from './Components/Employees';
import AddEmployee from './Components/AddEmployee';
import editEmployee from './Components/editEmployee';
import EmployeeDetails from './Components/EmployeeDetails';
import { EmployeeProvider } from './contexts/EmployeeContext';

import './App.css';

const App = () => {
  return (
    <EmployeeProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/employees" element={<Employees />} />
          <Route path="/add-employee" element={<AddEmployee />} />
          <Route path="/edit-employee/:id" element={<editEmployee />} />
          <Route path="/employee-details/:id" element={<EmployeeDetails />} />
          <Route path="*" element={<h1>Page Not Found</h1>} />
        </Routes>
      </Router>
    </EmployeeProvider>
  );
};

export default App;
