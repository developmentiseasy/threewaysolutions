import React, { Component } from 'react'

import { map } from 'lodash'

import NavTabItem from './NavigationTabItem/NavTabItem'


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
      <div className="Navigation w-100">
        <div className="container">
          {this.getNavigationTabs()}
        </div>
      </div>
    )
  }
}

Navigation.PropTypes = {}
