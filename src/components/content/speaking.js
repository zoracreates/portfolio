import React from "react"
import PropTypes from "prop-types"

const Speaking = ({ styleName }) => {
  return (
    <section id={`speaking`} className={`${styleName ? styleName : ''} cols-20-80`}>
      <h2 className={`col`}>Hear Me Speak</h2>

      <div className={`col`}>

        <div className={`post-list col cols-50-50`}>

          <div className={`col`}>
            <h3 className={`u-header`}>Videos</h3>
            <div className={`card no-hover-effect`}>
              <div className={`video-container`}>
                <iframe title={`video of justify-yourself: space-between, with Katie Langerman`} width="560" height="315" src="https://www.youtube.com/embed/AtYyOGmOZkc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <h4>justify-yourself: space-between, with Katie Langerman</h4>
              </div>
            </div>

          </div>



          <div className={`col`}>
          <h3 className={`u-header`}>More Past Talks</h3>

          <ul className={`post-list card no-hover-effect`}>
            <li>
              <h4>UI/UX Careers Panel</h4>
              <p className={`u-small`}><span className={`label`}>Date:</span> <time dateTime="2019-06-19"> June 19, 2019</time> </p>
              <p className={`u-small`}><span className={`label`}>Host:</span> Inclusive Tech Lab Boston at Launch Academy</p>
            </li>

            <li>
              <h4>Qualitative UX Research for Beginners</h4>
              <p className={`u-small`}><span className={`label`}>Date:</span> <time dateTime="2019-06-03"> Jun 3, 2019</time></p>
              <p className={`u-small`}><span className={`label`}>Host:</span> Inclusive Tech Lab Boston at KAYAK</p>
            </li>
          </ul>
          </div>
        </div>

      </div>
    </section >
  )
}

Speaking.prototypes = {
  styleName: PropTypes.string
}

export default Speaking