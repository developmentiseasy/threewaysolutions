import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Page extends Component {

  onYearBtnClick = (y) => {
    this.props.getPhotos(y.target.textContent)
    this.props.getPhotos(+y.target.textContent)
  }

  render() {

    const { photos, year, fetching } = this.props
    return (
      <div className="Page">
        <p>
          <button onClick={this.onYearBtnClick}>2016</button>{' '}
          <button onClick={this.onYearBtnClick}>2015</button>{' '}
          <button onClick={this.onYearBtnClick}>2014</button>
        </p>
        <p>Year {year}</p>
        {
          fetching ? <p>Loading...</p> : <p>You have {photos.length} photos</p>
        }
        <div className="w-100">
          <h3>TEST</h3>
        </div>
      </div>
    )
  }
}

Page.PropTypes = {
  year: PropTypes.number.isRequired,
  photos: PropTypes.array.isRequired,
  getPhotos: PropTypes.func.isRequired
}