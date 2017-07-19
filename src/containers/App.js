import React, { Component } from 'react'
import { connect } from 'react-redux'

import './App.css'

import logo from '../common/logo.svg'
import User from '../components/User'
import Page from '../components/Page'
import { bindActionCreators } from 'redux'
import * as pageActions from '../actions/page/PageActions'

class App extends Component {

  render() {
    const { user, page } = this.props
    const { getPhotos } = this.props.pageActions

    return (
      <div className="App container-fluid">
        <div>
          <img className="logo" src={logo} alt="" />
        </div>
        <div>
          <User name={user.name} />
          <Page photos={page.photos} year={page.year} getPhotos={getPhotos} fetching={page.fetching}/>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    user: state.user,
    page: state.page,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    pageActions: bindActionCreators(pageActions, dispatch),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)