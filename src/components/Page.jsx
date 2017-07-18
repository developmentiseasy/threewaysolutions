import React, { Component, PropTypes } from 'react'

export default class Page extends Component {

  onYearBtnClick(e) {
    this.props.setYear(+e.target.innerText)
  }

  render() {

    const { photos, year } = this.props

    return (
      <div>
        <p>
          <button onClick={this.onYearBtnClick}>2016</button>
          <button onClick={this.onYearBtnClick}>2015</button>
          <button onClick={this.onYearBtnClick}>2014</button>
        </p>
        <p>Year {year}</p>
        <p>You have {photos.length} photos</p>
      </div>
    )
  }
}

Page.propTypes = {
  year: PropTypes.number.isRequired,
  photos: PropTypes.array.isRequired,
  setYear: PropTypes.func.isRequired,
}