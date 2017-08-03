import React, { Component } from 'react'

import Navigation from '../components/Navigation/Navigation'
import ParticlesHeader from '../components/ParticlesHeader/ParticlesHeader'
import AboutUs from '../pages/about-us/AboutUs'

import './App.css'

class App extends Component {

  render() {
    return (
      <div className="App">
        <Navigation/>
        <ParticlesHeader/>
        <AboutUs/>
      </div>
    )
  }
}

export default App