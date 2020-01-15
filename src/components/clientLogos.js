import React from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import { CenterTextBand } from "../components/wrappers"

const getImageFiles = graphql`
    query {
      CenterForArtisticActivism: file(relativePath: { eq: "logos/c4aa.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      HarvardUniversity: file(relativePath: { eq: "logos/harvard.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      UbelVelezLaw: file(relativePath: { eq: "logos/uvl.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      ValoreBooks: file(relativePath: { eq: "logos/vb.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }

    }
`

const ClientLogos = () => {
    const data = useStaticQuery(getImageFiles);
    let images = [];
    for (var key in data) {
        let image = {};
        let object = data[key]
        let alt = key.replace(/([A-Z])/g, ' $1').trim();
        if (object) {
            image.fluid = object.childImageSharp.fluid;
            image.alt = `${alt} logo`;
            images.push(image);
        }
        else {
            return images = null;
        }

    }

    return (
        <div className={`dark-gray`}>
            {images &&
                <CenterTextBand sectionTitle="Trusted By">
                    <div className={`cols-2-4`}>
                        {
                            images.map((image, id) => {
                                return (
                                    <div key={id} className={`col`}>
                                        <Img fluid={image.fluid} alt={image.alt} />
                                    </div>
                                )
                            })
                        }
                    </div>
                </CenterTextBand>
            }
        </div>
    )
}

export default ClientLogos;