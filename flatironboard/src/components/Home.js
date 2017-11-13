import React from 'react'


class Home extends React.Component {
  
  
  handleClick = () => {
    this.props.onLogOut()
    
  }
  render() {
    return (
      <div>
        <p>Hello From Home</p>
        <button onClick={this.handleClick}>Logout</button>
      </div>
    )
  }
}

export default Home