import React from "react"
import Gitbub from "../images/social/github.png"
import Twiter from "../images/social/twitter.png"
import LinkedIn from "../images/social/linkedin.png"
import Medium from "../images/social/medium.png"


const SocialIcons = () => {
    return (
        <>
            <ul className={`social`}>
                <li>
                    <a href={`https://github.com/zoracreates`}>
                        <img src={Gitbub} alt={`Github icon`} />
                        <span>Zoraida's Github</span>
                    </a>
                </li>
                <li>
                    <a href={`https://twitter.com/zoracreates/`}>
                        <img src={Twiter} alt={`Twitter icon`} />
                        <span>Zoraida's Twitter</span>
                    </a>
                </li>
                <li>
                    <a href={`https://www.linkedin.com/in/zoracabrera/`}>
                        <img src={LinkedIn} alt={`LinkedIn icon`} />
                        <span>Zoraida's LinkedIn</span>
                    </a>
                </li>
                <li>
                    <a href={`https://medium.com/@zoracreates`}>
                        <img src={Medium} alt={`Medium icon`} />
                        <span>Zoraida's Medium</span>
                    </a>
                </li>
            </ul>
        </>)
}
export default SocialIcons;