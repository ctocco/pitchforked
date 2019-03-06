import React from 'react';
import './about.css';
import About1 from '../../images/about.png';

//All styling is in the about.css

const About = (props) => {
    return (
        <div className="about-container container">
            <h2 className="center abouttitle">What does Pitchfork'd offer?</h2><br/>
            <div className="container-fluid">
                <ul>
                    <li>
                        <h4 className="center"><b>Search</b> your artists</h4><br/>
                            <p className="text-justify media abouttxt"><img className="aboutimg" src={About1} alt="About-1"/>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt odit accusantium quidem perferendis repellat veritatis cupiditate et, ullam nulla beatae! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt odit accusantium quidem perferendis repellat veritatis cupiditate et, ullam nulla beatae!</p>
                    </li><br/>
                    <li>
                        <h4 className="center"><b>Find</b> new artists</h4><br/>
                            <p className="text-justify media abouttxt right"><img className="aboutimg" src={About1} alt="About-1"/>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt odit accusantium quidem perferendis repellat veritatis cupiditate et, ullam nulla beatae! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt odit accusantium quidem perferendis repellat veritatis cupiditate et, ullam nulla beatae!</p>
                    </li><br/>
                    <li>
                        <h4 className="center"><b>Explore</b> new events</h4><br/>
                            <p className="text-justify media abouttxt"><img className="aboutimg" src={About1} alt="About-1"/>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt odit accusantium quidem perferendis repellat veritatis cupiditate et, ullam nulla beatae! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt odit accusantium quidem perferendis repellat veritatis cupiditate et, ullam nulla beatae!</p>
                    </li><br/>
                    <li>
                        <h4 className="center"><b>Listen</b> to music</h4><br/>
                            <p className="text-justify media abouttxt right"><img className="aboutimg" src={About1} alt="About-1"/>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt odit accusantium quidem perferendis repellat veritatis cupiditate et, ullam nulla beatae! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt odit accusantium quidem perferendis repellat veritatis cupiditate et, ullam nulla beatae!</p>
                    </li><br/>
                </ul>

            </div>
        </div>
    )
}


export default About;