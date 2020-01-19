import React from "react"
import PropTypes from "prop-types"

const CTA = ({styleName}) => {
    return (
        <section className={styleName}>
            <h2>Get in Touch</h2>
            <p>
              I'm actively seeking writing and speaking opportunities, and am open to meeting some fellow techies and designers.
            <a className="btn" href={`mailto:zmcabrera@gmail.com`}> email zmcabrera@gmail.com</a>
            </p>
        </section>
    )
}

CTA.prototypes = {
    styleName: PropTypes.string
}

export default CTA