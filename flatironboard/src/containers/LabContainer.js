import React, { Component } from 'react'
import { currentUser } from '../services/flatironapi'



class LabContainer extends Component {
  
  state = {
    labs: []
  }
  componentDidMount() {
    
    currentUser() 
      .then((user) => {
        console.log(user)
        this.setState({
          labs: user.labs
        })
      })
  }
  render() {
    console.log(this.state.labs)
    const labItems = this.state.labs.map((lab) => <li>{lab.title}</li>)
    return (
      <div>
        <ul>
          {labItems}
        </ul>
      </div>
    )
  }
}


export default LabContainer