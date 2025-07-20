import React from 'react';
import EmployeeForm from './components/EmployeeForm';
import EmployeeList from './components/EmployeeList';

const App = () => {
  return (
    <div className="container p-4">
      <h1 className="text-2xl font-bold mb-4">Employee Management System</h1>
      <EmployeeForm />
      <EmployeeList />
    </div>
  );
};

export default App;