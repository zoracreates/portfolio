import PropTypes from "prop-types"
import React from "react"

export const WrapperLg= ({children}) =>{ 
    return (
          <div className={`wrapper-lg`}>
            {children}
        </div>
      )
}

export const CenterTextBand = ({children,sectionTitle}) =>{ 
    return (
        <section className={`${`text-block-center band`}`}>
            <h2>{sectionTitle}</h2>
            {children}
        </section>
      )
}

CenterTextBand.propTypes = {
    sectionTitle: PropTypes.string,
  }
  
CenterTextBand.defaultProps = {
    sectionTitle: ``,
}
