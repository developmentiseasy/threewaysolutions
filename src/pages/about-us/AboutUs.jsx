import React, { Component } from 'react'

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
            <div className="background-block"></div>
            <div className="description-card col-md-4">
              <div className="card-title">
                <h3 className="title-thin"> WE ARE </h3>
                <span className="subtitle-bold">creative</span>
              </div>
              <p className="card-context">Lorem ipsum dolor sit amet,
                consectetur adipisicing elit. A architecto culpa dicta distinctio doloremque,
                earum error esse est ex expedita fuga fugiat illum ipsum magni molestiae nulla
                odio odit officia placeat quo quod repudiandae soluta, tempore veniam
                <span className="his">his</span></p>
            </div>
            <div className="description-card col-md-4">2</div>
            <div className="description-card col-md-4">3</div>
          </div>
          <div className="row cards-row">
            <div className="description-card col-md-4">4</div>
            <div className="description-card col-md-4">5</div>
            <div className="description-card col-md-4">6</div>
          </div>
        </div>
      </div>
    )
  }
}