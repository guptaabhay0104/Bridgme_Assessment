const mongoose = require('mongoose');

const EmployeeSchema = new mongoose.Schema({
  name: String,
  department: String,
  role: String
});

module.exports = mongoose.model('Employee', EmployeeSchema);
