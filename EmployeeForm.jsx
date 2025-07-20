import React, { useState } from 'react';
import api from '../api';

const EmployeeForm = () => {
  const [formData, setFormData] = useState({
    name: '', email: '', role: '', department: ''
  });

  const handleChange = e => {
    setFormData({...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    await api.post('/employees', formData);
    setFormData({ name: '', email: '', role: '', department: '' });
    window.location.reload();
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input name="name" placeholder="Name" value={formData.name} onChange={handleChange} />
      <input name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
      <input name="role" placeholder="Role" value={formData.role} onChange={handleChange} />
      <input name="department" placeholder="Department" value={formData.department} onChange={handleChange} />
      <button type="submit">Add Employee</button>
    </form>
  );
};

export default EmployeeForm;