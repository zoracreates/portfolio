import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const Writing = ({styleName}) => {
    return (
        <section className={styleName}>
            <h2>Read Some Thoughts</h2>
            <ul>
              <li>
                <Link to="/blog">Check out my blog!</Link>
              </li>
              <li>
                <a href="https://uxdesign.cc/the-rainbow-sheet-a-visual-method-for-research-analysis-a7e7d2011058">
                  "The rainbow sheet: a visual method for research analysis"</a>, <i>UX Collective</i>,
                <time dateTime="2019-02-16"> Feb 16, 2019</time>
              </li>
              <li>
                <a href="https://medium.com/hackernoon/modular-and-dynamic-type-scales-with-plain-css-41f86197bdf0">
                  "Modular and Dynamic Type Scales with Plain CSS"</a>, <i>Hacker Noon</i>,
            <time dateTime="2019-06-05"> Jun 5, 2019</time>
              </li>
            </ul>
          </section>
    )
}

Writing.prototypes = {
    styleName: PropTypes.string
}

export default Writing