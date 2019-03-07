import React from 'react';
import './about.css';
import Calender from '../images/about-calender.png';
import Headphones from '../images/about-headphones.png';
import Mglass from '../images/about-mglass.png';
import Microphones from '../images/about-microphone.png';

//All styling is in the about.css

const About = () => {
    return (
        <div className="about-container container">
            <h2 className="center abouttitle">What does Pitchfork'd offer?</h2><br/>
            <div className="container-fluid">
                <ul>
                    <li>
                        <h4 className="center abouttitle2"><b>Search</b> your artists</h4><br/>
                            <p className="text-justify media abouttxt"><img className="aboutimg" src={Microphones} alt="About-1"/>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt odit accusantium quidem perferendis repellat veritatis cupiditate et, ullam nulla beatae! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt odit accusantium quidem perferendis repellat veritatis cupiditate et, ullam nulla beatae!</p>
                    </li><br/>
                    <li>
                        <h4 className="center abouttitle2"><b>Find</b> new artists</h4><br/>
                            <p className="text-justify media abouttxt right"><img className="aboutimg" src={Mglass} alt="About-1"/>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt odit accusantium quidem perferendis repellat veritatis cupiditate et, ullam nulla beatae! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt odit accusantium quidem perferendis repellat veritatis cupiditate et, ullam nulla beatae!</p>
                    </li><br/>
                    <li>
                        <h4 className="center abouttitle2"><b>Explore</b> new events</h4><br/>
                            <p className="text-justify media abouttxt"><img className="aboutimg" src={Calender} alt="About-1"/>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt odit accusantium quidem perferendis repellat veritatis cupiditate et, ullam nulla beatae! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt odit accusantium quidem perferendis repellat veritatis cupiditate et, ullam nulla beatae!</p>
                    </li><br/>
                    <li>
                        <h4 className="center abouttitle2"><b>Listen</b> to music</h4><br/>
                            <p className="text-justify media abouttxt right"><img className="aboutimg" src={Headphones} alt="About-1"/>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt odit accusantium quidem perferendis repellat veritatis cupiditate et, ullam nulla beatae! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt odit accusantium quidem perferendis repellat veritatis cupiditate et, ullam nulla beatae!</p>
                    </li><br/>
                </ul>
                <br/>
                <br/>
            </div>
        </div>
    )
}


export default About;