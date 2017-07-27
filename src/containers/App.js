import React, { Component } from 'react'

import Navigation from '../components/Navigation/Navigation'
import ParticlesHeader from '../components/ParticlesHeader/ParticlesHeader'

import './App.css'

class App extends Component {

  render() {
    return (
      <div className="App">
        <Navigation/>
        <ParticlesHeader/>
      </div>
    )
  }
}

export default App