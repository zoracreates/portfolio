import PropTypes from "prop-types"
import React from "react"

export const WrapperLg = ({ children, styleName }) => {
    return (
        <div className={`wrapper-lg ${styleName ? styleName : ''}`}>
            {children}
        </div>
    )
}

export const BlogPostWrapper = ({ children, styleName }) => {
    return (
        <div>
            <article className={`wrapper-sm block-center ${styleName ? styleName : ''}`}>
                {children}
            </article>
        </div>
    )
}


WrapperLg.propTypes = {
    styleName: PropTypes.string
}

BlogPostWrapper.propTypes = {
    styleName: PropTypes.string
}