import PropTypes from "prop-types"
import React from "react"

const ProjectOverview = (
    { children,
        summary,
        teamAndTimeline,
        responsabilitiesList,
        responsabilitiesSummary,
        toolsList,
        outcome }
) => {


    let createPropertyValue = (text) => {
        let lowerCaseText = text.toLowerCase();
        return lowerCaseText.replace(/\s/g, "-");
    }

    let listResponsabilites = (list) => list.map((responsability) => <li><a href={`#${createPropertyValue(responsability)}`}>{responsability}</a></li>);

    let responsabilites = responsabilitiesList ? <ul className="project-responsabilities"> {listResponsabilites(responsabilitiesList)}</ul> : <p>{responsabilitiesSummary}</p>

    let tools = toolsList.map((tool) => <li className={`tool-${createPropertyValue(tool)}`}>{tool}</li>);


    return (
        <div className={`project-overview-container`}>
            <section className={`wrapper-md block-center`}>
                <h2>Project Overview</h2>

                <h3>Summary</h3>
                <p>{summary}</p>

                <h3>Team &amp; Timeline</h3>
                <p>{teamAndTimeline}</p>

                <h3>Responsabilities</h3>
                {responsabilites}

                <h3>Tools</h3>
                <ul className="project-tools">
                    {tools}
                </ul>

                <h3>Outcome</h3>
                <p>{outcome}</p>

            </section>
        </div>
    )
}

ProjectOverview.propTypes = {
    summary: PropTypes.string,
    teamAndTimeline: PropTypes.string,
    responsabilitiesList: PropTypes.array,
    responsabilitiesSummary: PropTypes.string,
    toolsList: PropTypes.array,
    outcome: PropTypes.string
}
export default ProjectOverview