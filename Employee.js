const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
  name: String,
  email: String,
  role: String,
  department: String,
});

module.exports = mongoose.model('Employee', employeeSchema);