
import React from "react"
import Me from "../../images/me.png"

const Bio = () => {
    return (
        <section className={`cols-1-2 band about-band wrapper-lg`}>
            <div className={`col`}>
                <h2>My Story</h2>

                <p>
                    After a few years of working as a Museum Educator and an e-commerce Customer Support Representative,
                    I became passionate about customer advocacy and technology in education. 
                    My tech career started with a focus on visual design and CSS and JavaScript,
                    but later expanded into design research and workshop facilitation. 
                    Currently I am a UX Designer/Researcher for 
                    Harvard University, and a Digital Media Design Masters candidate at the Harvard Extension School.
                </p> 
            </div>

            <div className={`col img`}>
                <img src={Me} alt={`Zoraida Cabrera-Mieles`} />
            </div>
        </section>
    )
}

export default Bio



