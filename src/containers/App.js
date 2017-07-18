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
    const { ussser, pageee } = this.props
    const { setYear } = this.props.pageActions

    return (
      <div className="App container-fluid">
        <div>
          <img className="logo" src={logo} alt="" />
        </div>
        <div>
          <User name={ussser.name} />
          <Page year={pageee.year} photos={pageee.photos} setYear={setYear} />
        </div>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    pageActions: bindActionCreators(pageActions, dispatch),
  }
}

function mapStateToProps(state) {
  return {
    ussser: state.user,
    pageee: state.page,
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App)
