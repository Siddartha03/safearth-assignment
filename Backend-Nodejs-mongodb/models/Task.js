const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Create Schema
const TaskSchema = new Schema({
  task_name: {
    type: String
  },
  email: {
    type: String,
    required: true
  },
  project_name: {
    type: String,
    required: true
  },
  start_date: {
    type: Date,
    default: Date.now
  },
  end_date: {
    type: Date,
    default: Date.now
  }
})

module.exports = Task = mongoose.model('tasks', TaskSchema)
