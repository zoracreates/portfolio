import React from "react"
import PropTypes from "prop-types"

const Writing = ({ styleName, children}) => {
  return (
    <section id={`writing`} className={`${styleName ? styleName : ''} cols-20-80`}>

      <h2 className={`col`}>Read Some Thoughts</h2>
      <div className={`col`}>
      {children}
        <h3 className={`u-header`}>Written Elsewhere</h3>
        <ul className={`post-list cols-50-50`}>
          <li className={`col card`}>
            <h4> <a target={`_blank`} href="https://uxdesign.cc/the-rainbow-sheet-a-visual-method-for-research-analysis-a7e7d2011058">
              "The rainbow sheet: a visual method for research analysis," <i>UX Collective</i></a></h4>
            <p className={`u-small`}><span className={`label`}>Published:</span><time dateTime="2019-02-16"> February 16, 2019</time></p>
            <p className={`u-med`}>How the rainbow spreadsheet helped evaluate Harvard’s new visualizations-based course-selection tool.</p>
          </li>
        </ul>
        </div>
    </section>
  )
}

Writing.prototypes = {
  styleName: PropTypes.string
}

export default Writing