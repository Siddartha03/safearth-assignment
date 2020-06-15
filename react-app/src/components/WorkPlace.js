import React, { Component } from 'react'
import jwt_decode from 'jwt-decode'
import { Link } from 'react-router-dom'
import '../styles/style.scss'

class WorkPlace extends Component {
  constructor() {
    super()
    this.state = {
      task_name: '',
      project_name: '',
      email: '',
      errors: {},
        curTime : new Date().toLocaleString()
    }
  }

    componentDidMount() {
    const token = localStorage.usertoken
    const decoded = jwt_decode(token)
    setInterval( () => {
        this.setState({
            email: decoded.email,
            curTime : new Date().toLocaleString()
        })
    },1000)
  }

  render() {
    return (
      <div className="container">
          <b><p style={{textAlign: "right", color: "red"}}>Time : {this.state.curTime}</p></b>
          <b><p style={{textAlign: "right", color: "blue"}}>{this.state.email}</p></b>
        <div className="jumbotron mt-2">
          <div className="col-sm-8 mx-auto" style={{marginTop: "-60px"}}>
            <h1 className="text-center">Do Task</h1>
          </div>
          <textarea rows="13" cols="124"></textarea>
        </div>
        <Link to="/" style={{textDecoration: "none"}}><button
            type="submit"
            className="btn btn-lg btn-primary btn-block"
        >
            Finish/Submit
        </button>
        </Link>
      </div>
    )
  }
}

export default WorkPlace
