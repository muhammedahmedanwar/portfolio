import React from 'react'
import Works from './Works'
import './work.css'

const Work = () => {
  return (
    <section className="work section" id="portfolio">
        <h2 className="section__title">Portfolio</h2>
        <span className="section__subtitle">Most recent works</span>
        <span className="section__subtitle">I have successfully completed various backend projects. If you'd like to see my work, please don't hesitate to get in touch with me.</span>
        <Works />
    </section>
  )
}

export default Work
