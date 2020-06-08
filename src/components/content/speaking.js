import React from "react"
import PropTypes from "prop-types"

const Speaking = ({styleName}) => {
    return (
        <section className={`${styleName}`}>
            <h2>Hear Me Speak</h2>
            <ul className={`post-list`}>
              <li>
               <a href="https://youtu.be/AtYyOGmOZkc"><h4><i>justify-yourself: space-between</i>, with Katie Langerman</h4></a>
               <p className={`u-small`}><span className={`label`}>Date:</span><time dateTime="2019-11-06"> Nov 6, 2019</time> </p>
               <p className={`u-small`}><span className={`label`}>Host:</span> Boston CSS at Thoughtbot</p>
              </li>

              <li>
                <h4><i>UI/UX Careers Panel</i></h4>
                <p className={`u-small`}><span className={`label`}>Date:</span> <time dateTime="2019-06-19"> June 19, 2019</time> </p>
               <p className={`u-small`}><span className={`label`}>Host:</span> Inclusive Tech Lab Boston at Launch Academy</p>
              
              
              </li>

              <li>
              <h4><i>Qualitative UX Research for Beginners</i></h4>
              <p className={`u-small`}><span className={`label`}>Date:</span> <time dateTime="2019-06-03"> Jun 3, 2019</time></p>
               <p className={`u-small`}><span className={`label`}>Host:</span> Inclusive Tech Lab Boston at KAYAK</p>
              
               
              </li>
            </ul>
          </section>
    )
}

Speaking.prototypes = {
    styleName: PropTypes.string
}

export default Speaking