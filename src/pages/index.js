import React from "react"


import Layout from "../components/layout"
import SEO from "../components/seo"
import { WrapperLg } from "../components/wrappers"
import ClientLogos from "../components/content/clientLogos"
import Writing from "../components/content/writing"
import Speaking from "../components/content/speaking"
import CTA from "../components/content/cta"
import Me from "../images/me.png"


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
      <WrapperLg  styleName={`cols-1-2 band about-band`}>
       <div className={`col`}>
        <h2>My Story</h2>
        <p>I am a driven creative who enjoys learning new skills and working in collaborative teams.
          I love being involved in the entire design process, from research, to sketching and wireframing,
  to prototyping in different fidelities. Currently I am a UX Designer/Researcher for Harvard University Information Technology, where my work helps improve university life and productivity.</p>
        <p>I became a designer after a few years of working as a Museum Educator and as an e-commerce Customer Support Representative. These experiences made me passionate about customer advocacy and technology in education. I began my design journey by teaching myself to design and code. Later I formalized my learning by pursuing a Digital Media Design Masters at Harvard University's Extension School.</p>
        </div>
        <div className={`col img`}>
          <img src={Me} />

        
        </div>
      </WrapperLg>
    </main>
  </Layout>
)

export default IndexPage