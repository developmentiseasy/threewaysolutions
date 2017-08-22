import React, { Component } from 'react'

import WeAreCreativeCard from './components/cards/WeAreCreativeCard'
import WeAreInitiativeCard from './components/cards/WeAreInitiativeCard'
import WeAreAmbitiousCard from './components/cards/WeAreAmbitiousCard'

import './AboutUs.css'

export default class AboutUs extends Component {

  render() {
    return (
      <div className="AboutUs container">
        <div className="about-us-title">
          <div className="title-about">About</div>
          <div className="title-us">Us</div>
        </div>
        <div className="col-md-12 cards">
          <div className="row cards-row">
            <WeAreCreativeCard/>
            <WeAreAmbitiousCard/>
            <WeAreInitiativeCard/>
          </div>
          <div className="row cards-row">
            <WeAreCreativeCard/>
            <WeAreInitiativeCard/>
            <WeAreAmbitiousCard/>
          </div>
        </div>
      </div>
    )
  }
}