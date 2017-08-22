import React, { Component } from 'react'

import './WeAreCreativeCard.css'

export default class WeAreCreativeCard extends Component {
  render() {
    return (
      <div className="WeAreCreativeCard description-card col-md-4">
        <div className="background-block"/>
        <div className="cardTitle">

          <h3 className="title-thin"> WE ARE </h3>
          <span className="subtitle-bold">creative</span>
        </div>
        <p className="card-context">Lorem ipsum dolor sit amet,
          consectetur adipisicing elit. A architecto culpa dicta distinctio doloremque,
          earum error esse est ex expedita fuga fugiat illum ipsum magni molestiae nulla
          odio odit officia placeat quo quod repudiandae soluta, tempore veniam
          <span className="his">his</span></p>
      </div>
    )
  }
}
