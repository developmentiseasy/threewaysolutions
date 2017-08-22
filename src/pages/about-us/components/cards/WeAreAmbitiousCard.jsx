import React, { Component } from 'react'

import './WeAreAmbitiousCard.css'

export default class WeAreAmbitiousCard extends Component {
  render() {
    return (
      <div className="WeAreAmbitiousCard description-card col-md-4">
        <p className="card-context">
          <span className="The-text-of-the-second-card"> Lorem </span>
          ipsum dolor sit amet, consectetur adipisicing elit. Dolor eveniet exercitationem modi neque
          pariatur quidem reiciendis. Consectetur eius facilis placeat sequi ut? Architecto autem, beatae
          cupiditate fugit illo in incidunt ipsum itaque laboriosam magni quam, reprehenderit, similique tempora
          velit voluptate.</p>
        <div className="cardTitle">
          <h3 className="subtitle-bold"> we are </h3>
          <h3 className="title-thin">AMBITIOUS</h3>
        </div>
      </div>
    )
  }
}