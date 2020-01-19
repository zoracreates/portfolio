import React from "react"
import PropTypes from "prop-types"

const Speaking = ({styleName}) => {
    return (
        <section className={styleName}>
            <h2>Hear Me Speak</h2>
            <ul>
              <li>
                <i>justify-yourself: space-between</i>, with <a href="https://www.langermank.com/">Katie Langerman</a>, at Boston CSS,
              <time dateTime="2019-11-06"> Nov 6, 2019</time>
              </li>
              <li>
                <i>UI/UX Careers Panel</i>, at Launch Academy, Inclusive Tech Lab Boston,
              <time dateTime="2019-06-19"> June 19, 2019</time>
              </li>
              <li>
                <i>Qualitative UX Research for Beginners</i>, at KAYAK, Inclusive Tech Lab Boston,
              <time dateTime="2019-06-03"> Jun 3, 2019</time>
              </li>
            </ul>
          </section>
    )
}

Speaking.prototypes = {
    styleName: PropTypes.string
}

export default Speaking