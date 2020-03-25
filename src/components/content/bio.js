
import React from "react"
import Me from "../../images/me.png"

const Bio = () => {
    return (
        <section className={`cols-1-2 band about-band wrapper-lg`}>
            <div className={`col`}>
                <h2>My Story</h2>

                <p>
                    I am a driven creative who enjoys learning new skills and working in collaborative teams.
                    I love being involved in the entire design process, from research, to sketching and wireframing,
                    to prototyping in different fidelities. Currently I am a UX Designer/Researcher for 
                    Harvard University Information Technology, where my work helps improve university life and productivity.
                </p>

                <p>
                    I became a designer after a few years of working as a Museum Educator and as an
                    e-commerce Customer Support Representative. These experiences made me passionate about 
                    customer advocacy and technology in education. I began my design journey by teaching myself to design and code. 
                    Later I formalized my learning by pursuing a Digital Media Design Masters at Harvard University's Extension School.
                </p>
            </div>

            <div className={`col img`}>
                <img src={Me} alt={`Zoraida Cabrera-Mieles`} />
            </div>
        </section>
    )
}

export default Bio



