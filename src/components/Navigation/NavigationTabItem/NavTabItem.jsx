import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './NavTabItem.css'

export default class NavTabItem extends Component {
  render() {
    const { title, onClick } = this.props
    return (
      <div
        className="NavTabItem"
        onClick={onClick}
      >
        {title}
      </div>
    )
  }
}

NavTabItem.PropTypes = {
  onClick: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  classNameTitle: PropTypes.string.isRequired,
}