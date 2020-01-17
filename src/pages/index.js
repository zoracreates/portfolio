import React from "react"

import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { WrapperLg, CenterTextBand } from "../components/wrappers"
import ClientLogos from "../components/clientLogos"


const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <main>
      <div className={`gradient-band hero-band`}>
        <WrapperLg>
          <h1>I'm Zoraida, <br/> UX Designer + Researcher</h1>
          <p className={`hero-text`}>
            I’m currently  working at Harvard University, 
            doing quantitative and qualitative research, 
            ideating layouts and flows with clients, and theming websites with CSS and a sprinkle of JavaScript.
          </p>
        </WrapperLg>
      </div>

    <div className={`sunflower`}> 
      <WrapperLg>
        <div className={`${`cols-1-3 band`}`}>
          <section className={`card col`}>
            <h2>Read My Thoughts</h2>
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

          <section className={`card col`}>
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

          <section className={`${`card col`}`}>
            <h2>Get in Touch</h2>
            <p>
              I'm actively seeking writing and speaking opportunities, and am open to meeting some fellow techies and designers.
            <a className="btn" href={`mailto:zmcabrera@gmail.com`}> email zmcabrera@gmail.com</a>
            </p>
          </section>
        </div>
      </WrapperLg>
      </div>

      <ClientLogos />

      <CenterTextBand sectionTitle="Because Sharing is Caring...">
        <p>I use Airtable to organize my design, research, and programming resources.
        If you find it helpful, <a href={`https://twitter.com/zoracreates/`}>tweet @zoracreates</a>, I'd love to know!</p>
        <h3>Master List of Design, Research, and Programming Resources</h3>
        <div style={{ width: `100%`, display: `flex`, justifyContent: `center` }}>
          <iframe title={`resources airtable`} className={`${`airtable-embed raised-card`}`} src={`https://airtable.com/embed/shroxqk4NT2Px7uad?backgroundColor=red&viewControls=on`}
            frameBorder="0"
            width={`100%`} height={`450px`} style={{ background: `transparent`, border: `none` }}></iframe>
        </div>
      </CenterTextBand>
    </main>
  </Layout>
)

export default IndexPage