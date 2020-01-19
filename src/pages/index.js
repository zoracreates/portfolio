import React from "react"


import Layout from "../components/layout"
import SEO from "../components/seo"
import { WrapperLg } from "../components/wrappers"
import ClientLogos from "../content/clientLogos"
import Writing from "../content/writing"
import Speaking from "../content/speaking"
import CTA from "../content/cta"
import Airtable from "../content/airtable"


const IndexPage = () => (
  <Layout active={'home'}>
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

          <Writing styleName={'card col'} />

          <Speaking styleName={'card col'} />

          <CTA styleName={'card col'} />
        </div>
      </WrapperLg>
    </div>

      <ClientLogos />

      <Airtable />
    </main>
  </Layout>
)

export default IndexPage