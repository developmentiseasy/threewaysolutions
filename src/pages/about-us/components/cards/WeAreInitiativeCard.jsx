import React, { Component } from 'react'

import './WeAreInitiativeCard.css'

export default class WeAreInitiativeCard extends Component {
  render() {
    return (
      <div className="WeAreInitiativeCard description-card col-md-4">
        <div className="cardTitle">
          <h3 className="title-thin"> WE ARE </h3>
          <span className="subtitle-bold">initiative</span>
        </div>
        <div className="gray-boarder">
          <p className=" card-context">Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Ab alias aliquam blanditiis dolores et,
            fugiat ipsum iste maiores possimus quis quod sit tempore tenetur
            totam voluptate? Ad dicta excepturi illo, minima natus pariatur
            quidem repellat sequi tempora unde.
            <span className="his"> his </span></p>
        </div>
      </div>

    )
  }
}