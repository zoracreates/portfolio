import React from "react"


import Layout from "../components/layout"
import SEO from "../components/seo"
import { WrapperLg } from "../components/wrappers"
import ClientLogos from "../components/content/clientLogos"
import Writing from "../components/content/writing"
import Speaking from "../components/content/speaking"
import CTA from "../components/content/cta"
// import Me from "../images/me.png"
import Bio from "../components/content/bio"


const IndexPage = () => (
  <Layout active={'home'}>
    <SEO title="Home" />
    <main>
      <div className={`hero-band hero-band`}>
        <WrapperLg>
          <h1>I'm Zoraida, <br /> UX Designer &amp; Researcher</h1>
          <p className={`hero-text`}>
            I’m currently  working at Harvard University,
            conducting research, facilitating design workshops, establishing visual guidelines for websites,
            and theming with CSS and a sprinkle of JavaScript.
          </p>
        </WrapperLg>
      </div>

      <div>
        <WrapperLg>
          <div className={`${`cols-1-3 band`}`}>

            <Writing styleName={'col'} />

            <Speaking styleName={'col'} />

            <CTA styleName={'raised-card col'} />
          </div>
        </WrapperLg>
      </div>

      <ClientLogos />

      <Bio />
      
    </main>
  </Layout>
)

export default IndexPage