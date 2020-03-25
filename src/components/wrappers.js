import PropTypes from "prop-types"
import React from "react"

export const WrapperLg= ({children, styleName}) =>{ 
    return (
          <div className={`wrapper-lg ${styleName}`}>
            {children}
        </div>
      )
}

export const CenterTextBand = ({children,sectionTitle, styleName}) =>{ 
    return (
        <section className={`text-center block-center wrapper-md band ${styleName}`}>
            <h2>{sectionTitle}</h2>
            {children}
        </section>
      )
}

export const BlogPostWrapper = ({children, styleName}) =>{ 
    return (
        <article className={`wrapper-sm block-center`}>
            {children}
        </article>
      )
}

CenterTextBand.propTypes = {
    sectionTitle: PropTypes.string.isRequired,
    styleName: PropTypes.string
  }

WrapperLg.propTypes = {
    styleName: PropTypes.string
}

  
CenterTextBand.defaultProps = {
    sectionTitle: ``,
}
