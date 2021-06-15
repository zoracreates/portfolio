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
                <iframe title={`video of justify-yourself: space-between, with Katie Langerman`} width="560" height="315" src="https://www.youtube.com/embed/AtYyOGmOZkc" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                <h4>justify-yourself: space-between, with Katie Langerman</h4>
              </div>
            </div>

          </div>

          <div className={`col`}>
          <h3 className={`u-header`}>Audio</h3>
            <div className={`card no-hover-effect`}>
            <div className={`video-container`}>
            <iframe title={`Spanish podcast recording of Ser UX Researcher en Harvard University, interview by Píldoras UX`} width="560" height="315" src="https://www.youtube.com/embed/ydAzSlfgKqo" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            <h4>Ser UX Researcher en Harvard University, interview by Píldoras UX</h4>
            </div>
            <p className={`u-small`}><span className={`label`}>Language:</span> Spanish</p>
            </div>
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