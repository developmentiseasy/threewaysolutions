import React, { Component } from 'react'

import './AboutUs.css'

export default class AboutUs extends Component {

  sameFunc = () => {

  }

  render() {
    return (
      <div className="AboutUs container">
        <div className="card-title">
          <div className="title-about">About</div>
          <div className="title-us">Us</div>
        </div>
        <div className="col-md-12 about-us-cards">
          <div className="row cards">
            <div className="block-of-cards col-md-4">
              <h3 className="we_are"> WE ARE </h3>
              <span className="creative">creative</span>
              <p className="text_lorem">Lorem ipsum dolor sit amet,
                consectetur adipisicing elit. A architecto culpa dicta distinctio doloremque,
                earum error esse est ex expedita fuga fugiat illum ipsum magni molestiae nulla
                odio odit officia placeat quo quod repudiandae soluta, tempore veniam.
                <span className="his">his</span></p>
            </div>
            <div className="block-of-cards col-md-4">We are ambitions</div>
            <div className="block-of-cards col-md-4">We are ambitions.</div>
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