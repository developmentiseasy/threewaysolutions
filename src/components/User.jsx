import React, { PropTypes, Component } from 'react'

export default class User extends Component {
  render() {
    const { name } = this.props
    return (
      <div className="User">
        <p>Hello, {name}!</p>
      </div>
    )
  }
}

User.propTypes = {
  name: PropTypes.string.isRequired,
}