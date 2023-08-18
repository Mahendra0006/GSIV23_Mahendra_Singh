import React from 'react'
import './style.css'

const SpinnerLoader = () => {
  return (
    <>
      <div className="container">
        <div className="ring"></div>
        <div className="ring"></div>
        <div className="ring"></div>

        <span className="loading">Loading ...</span>
      </div>
    </>
  )
}

export default SpinnerLoader
