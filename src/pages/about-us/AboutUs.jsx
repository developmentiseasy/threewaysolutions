import React, { Component } from 'react'

import './AboutUs.css'

export default class AboutUs extends Component {
  render() {
    return (
      <div className="AboutUs container">
        <div className="card-title">
          <div className="title-about">About</div>
          <div className="title-us">Us</div>
        </div>
        <div className="col-md-12 about-us-cards">
          <div className="row cards">
            <div className="block-of-cards col-md-4">We are creative</div>
            <div className="block-of-cards col-md-4">We are ambitions</div>
            <div className="block-of-cards col-md-4">We are ambitions</div>
          </div>
          <div className="row cards">
            <div className="block-of-cards col-md-4">4</div>
            <div className="block-of-cards col-md-4">5</div>
            <div className="block-of-cards col-md-4">6</div>
          </div>
        </div>
      </div>
    )
  }
}