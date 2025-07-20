import React, { useEffect, useState } from 'react';
import api from '../api';

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);

  const fetchEmployees = async () => {
    const res = await api.get('/employees');
    setEmployees(res.data);
  };

  const deleteEmployee = async id => {
    await api.delete(`/employees/${id}`);
    fetchEmployees();
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  return (
    <div>
      <h2>All Employees</h2>
      <ul>
        {employees.map(emp => (
          <li key={emp._id}>
            {emp.name} - {emp.email} - {emp.role} - {emp.department}
            <button onClick={() => deleteEmployee(emp._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EmployeeList;