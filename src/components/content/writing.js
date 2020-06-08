import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const Writing = ({ styleName, children }) => {
  return (
    <section className={styleName}>
      
      <h2>Writing</h2>

        {children}
 
      <h3>Selected Publications</h3>
      <ul className={`wrapper-md post-list`}>
        <li>
        <h4> <a href="https://uxdesign.cc/the-rainbow-sheet-a-visual-method-for-research-analysis-a7e7d2011058">
            "The rainbow sheet: a visual method for research analysis," <i>UX Collective</i></a></h4>
          <p className={`u-small`}><span className={`label`}>Published:</span><time dateTime="2019-02-16"> Feb 16, 2019</time></p>
          <p className={`u-med`}>Type scales can be difficult to maintain, but CSS Custom Properties can help.</p>
        </li>
        <li>
        <h4><a href="https://medium.com/hackernoon/modular-and-dynamic-type-scales-with-plain-css-41f86197bdf0">
            "Modular and Dynamic Type Scales with Plain CSS," <i>Hacker Noon</i></a></h4>
          <p className={`u-small`}><span className={`label`}>Published:</span><time dateTime="2019-06-05"> Jun 5, 2019</time></p>
          <p className={`u-med`}>How the rainbow spreadsheet helped evaluate Harvard’s new visualizations-based course-selection tool.</p>
        </li>
      </ul>
    </section>
  )
}

Writing.prototypes = {
  styleName: PropTypes.string
}

export default Writing