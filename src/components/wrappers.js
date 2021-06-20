import PropTypes from "prop-types"
import React from "react"

export const WrapperXlg = ({ children, styleName }) => {
    return (
        <div className={`wrapper-xlg ${styleName ? styleName : ''}`}>
            {children}
        </div>
    )
}

export const WrapperLg = ({ children, styleName }) => {
    return (
        <div className={`wrapper-lg ${styleName ? styleName : ''}`}>
            {children}
        </div>
    )
}

export const WrapperSmCenter = ({ children, styleName }) => {
    return (
        <div className={`wrapper-sm block-center ${styleName ? styleName : ''}`}>
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

export const WorkPostWrapper = ({ children, styleName }) => {
    return (
        <div>
            <article className={`wrapper-xlg block-center ${styleName ? styleName : ''}`}>
                {children}
            </article>
        </div>
    )
}

WrapperXlg.propTypes = {
    styleName: PropTypes.string
}


WrapperLg.propTypes = {
    styleName: PropTypes.string
}

WrapperSmCenter.propTypes = {
    styleName: PropTypes.string
}

BlogPostWrapper.propTypes = {
    styleName: PropTypes.string
}

WorkPostWrapper.propTypes = {
    styleName: PropTypes.string
}