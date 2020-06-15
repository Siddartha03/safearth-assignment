import React, { Component } from 'react'
import jwt_decode from 'jwt-decode'
import { task } from './UserFunctions'

class Task extends Component {
  constructor() {
    super()
    this.state = {
        email: '',
        task_name: '',
        project_name: '',
        errors: {}
    }

    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }
  onSubmit = (e) => {
    e.preventDefault()
    const token = localStorage.usertoken
    const decoded = jwt_decode(token)
    const newTask = {
      task_name: this.state.task_name,
      email: decoded.email,
      project_name: this.state.project_name,
    }

    task(newTask).then(res => {
        this.props.history.push(`/WorkPlace`)
        //window.location = '/WorkPlace';
    })
    .catch(err => {
      console.log("Error", err)
    })
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 mt-5 mx-auto">
            <form noValidate onSubmit={this.onSubmit}>
              <h1 className="h3 mb-3 font-weight-normal">Task Form</h1>
              <div className="form-group">
                <label htmlFor="name">Task name</label>
                <input
                  type="text"
                  className="form-control"
                  name="task_name"
                  placeholder="Enter your first name"
                  value={this.state.task_name}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="name">Select Project</label>
                <select name="project_name" value={this.state.project_name} onChange={this.onChange}>
                    <option value="">-- Select --</option>
                    <option value="E-Commerce">E-Commerce</option>
                    <option value="Learning Management System" >Learning Management System</option>
                    <option value="Online-Food-Delivery" >Online-Food-Delivery</option>
                    <option value="Moivie-Ticket-Booking" >Movie-Ticket-Booking</option>
                    <option value="Online Charity Management System">Online Charity Management System</option>
                    <option value="Scholl Administration System">Scholl Administration System</option>
                    <option value="Sports Event Management System">Sports Event Management System</option>
                    <option value="Online Charity Management System">Online Charity Management System</option>
                    <option value="Web Based Chat Application">Web Based Chat Application</option>
                </select>
              </div>
              <button
                type="submit"
                className="btn btn-lg btn-primary btn-block"
              >
                Start
              </button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default Task
