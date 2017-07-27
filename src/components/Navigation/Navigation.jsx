import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { map } from 'lodash'

import NavTabItem from './NavigationTabItem/NavTabItem'

import logo from '../../common/logo.svg'

import { NAVIGATION_MENU_CONSTANTS } from '../../constants/NavigationConsts/NavigationConsts'

import './Navigation.css'

export default class Navigation extends Component {

  getNavigationTabs = () => {
    return map(NAVIGATION_MENU_CONSTANTS, (navTab) => {
      return (
        <NavTabItem
          title={ (navTab.title).toUpperCase() }
        />
      )
    })
  }

  render() {
    return (
      <div className="Navigation">
        {this.getNavigationTabs()}
      </div>
    )
  }
}

Navigation.PropTypes = {}
