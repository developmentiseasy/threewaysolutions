import React, { Component } from 'react'

import './App.css'

import logo from './common/logo.svg'

class App extends Component {

  render() {
    return (
      <div className="App container-fluid">
        <img className="logo" src={logo} alt="" />
      </div>
    )
  }
}

export default App
