import React, { Component } from 'react'
import PropTypes from 'prop-types'

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