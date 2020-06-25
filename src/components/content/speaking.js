import React from "react"
import PropTypes from "prop-types"

const Speaking = ({ styleName }) => {
  return (
    <section id={`speaking`} className={`${styleName ? styleName : ''} cols-20-80`}>
      <h2 className={`col`}>Speaking</h2>

      <div className={`col`}>

      <div className={`post-list col cols-50-50`}>

        <div className={`col`}>
          <h3>Videos</h3>
          <div className={`card no-hover-effect`}>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/AtYyOGmOZkc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <h4>justify-yourself: space-between, with Katie Langerman</h4>
          </div>
        </div>

        <div className={`col`}>
          <h3>Upcoming Talks</h3>
          <div className={`card no-hover-effect`}>
            <h4>Looking for a speaker?</h4>
            <p>I’m actively looking for speaking opportunities.
              If you’d like to have me talk in your event let’s get in touch!</p>
              <a className={`btn`} href="mailto:zmcabrera@gmail.com">Email Me</a>
          </div>
        </div>
        </div>


        <h3>Other Past Talks</h3>

        <ul className={`post-list col cols-50-50`}>
          <li className={`col card no-hover-effect`}>
            <h4>UI/UX Careers Panel</h4>
            <p className={`u-small`}><span className={`label`}>Date:</span> <time dateTime="2019-06-19"> June 19, 2019</time> </p>
            <p className={`u-small`}><span className={`label`}>Host:</span> Inclusive Tech Lab Boston at Launch Academy</p>
          </li>

          <li className={`col card no-hover-effect`}>
            <h4>Qualitative UX Research for Beginners</h4>
            <p className={`u-small`}><span className={`label`}>Date:</span> <time dateTime="2019-06-03"> Jun 3, 2019</time></p>
            <p className={`u-small`}><span className={`label`}>Host:</span> Inclusive Tech Lab Boston at KAYAK</p>
          </li>
        </ul>
      </div>
    </section>
  )
}

Speaking.prototypes = {
  styleName: PropTypes.string
}

export default Speaking