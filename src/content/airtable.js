import React from "react"
import PropTypes from "prop-types"
import {CenterTextBand } from "../components/wrappers"

const Airtable = ({styleName}) => {
    return (
        <CenterTextBand sectionTitle="Because Sharing is Caring..." className={styleName} >
        <p>I use Airtable to organize my design, research, and programming resources.
        If you find it helpful, <a href={`https://twitter.com/zoracreates/`}>tweet @zoracreates</a>, I'd love to know!</p>
        <h3>Master List of Design, Research, and Programming Resources</h3>
        <div style={{ width: `100%`, display: `flex`, justifyContent: `center` }}>
          <iframe title={`resources airtable`} className={`${`airtable-embed raised-card`}`} src={`https://airtable.com/embed/shroxqk4NT2Px7uad?backgroundColor=red&viewControls=on`}
            frameBorder="0"
            width={`100%`} height={`450px`} style={{ background: `transparent`, border: `none` }}></iframe>
        </div>
      </CenterTextBand>
    )
}

Airtable.prototypes = {
    styleName: PropTypes.string
}

export default Airtable