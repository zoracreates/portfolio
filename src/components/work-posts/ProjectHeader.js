import PropTypes from "prop-types"
import React from "react"
import Img from "gatsby-image"

const ProjectHeader= (
    { 
    title, 
    imgSrc, 
    imgAlt }
    ) => {
    return (
        <div className={`project-header-container`}>
            <div className={`cols-40-60 wrapper-lg`}>
                <div className={`col`}>
                    <Img className="featured-image" fluid={imgSrc.childImageSharp.fluid} alt={imgAlt.featuredImageAlt} />
                </div>

                <div className={`col`}>
                    <h1>{title}</h1>
                 </div>
            </div>
        </div>
    )
}

ProjectHeader.propTypes = {
    imgSrc: PropTypes.object,
    imgAlt: PropTypes.string,
    title: PropTypes.string,
}

export default ProjectHeader