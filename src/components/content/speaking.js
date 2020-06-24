import React from "react"
import PropTypes from "prop-types"

const Speaking = ({styleName}) => {
    return (
        <section id={`speaking`} className={`${styleName} cols-20-80`}>
            <h2 className={`col`}>Speaking</h2>
            <ul className={`post-list col cols-50-50`}>
              <li className={`col card`}>
               <h4><a target={`_blank`} href="https://youtu.be/AtYyOGmOZkc"><i>justify-yourself: space-between</i>, with Katie Langerman</a> [video]</h4>
               <p className={`u-small`}><span className={`label`}>Date:</span><time dateTime="2019-11-06"> Nov 6, 2019</time> </p>
               <p className={`u-small`}><span className={`label`}>Host:</span> Boston CSS at Thoughtbot</p>
              </li>

              <li className={`col card no-hover-effect`}>
                <h4><i>UI/UX Careers Panel</i></h4>
                <p className={`u-small`}><span className={`label`}>Date:</span> <time dateTime="2019-06-19"> June 19, 2019</time> </p>
               <p className={`u-small`}><span className={`label`}>Host:</span> Inclusive Tech Lab Boston at Launch Academy</p>
              </li>

              <li className={`col card no-hover-effect`}>
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