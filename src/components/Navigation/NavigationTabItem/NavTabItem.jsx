import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './NavTabItem.css'

export default class NavTabItem extends Component {
  render() {
    const { title } = this.props
    return (
      <div className="NavTabItem">
        {title}
      </div>
    )
  }
}

NavTabItem.PropTypes = {
  title: PropTypes.string.isRequired,
  classNameTitle: PropTypes.string.isRequired,
}