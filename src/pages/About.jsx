import React from 'react';
import './css/about.css';
import Calender from '../images/about-calender.png';
import Headphones from '../images/about-headphones.png';
import Mglass from '../images/about-mglass.png';
import Microphones from '../images/about-microphone.png';

//All styling is in the about.css

const About = () => {
    return (
        <div className="about-container container">
            <br></br>
            <div className="container-fluid">
                <ul>
                    <li>
                        <h4 className="center abouttitle2"><b>Search</b> your artists</h4><br/>
                            <p className="text-justify media abouttxt"><img className="aboutimg" src={Microphones} alt="About-1"/>Search your favourite artist and refresh your love for their work with Pitchfork'd!</p>
                    </li><br/>
                    <li>
                        <h4 className="center abouttitle2"><b>Find</b> new artists</h4><br/>
                            <p className="text-justify media abouttxt">Pitchfork'd makes it easy searching for new Artists too, for example we are suggesting similar artists when searching!<img className="aboutimg" src={Mglass} alt="About-1"/></p>
                    </li><br/>
                    <li>
                        <h4 className="center abouttitle2"><b>Explore</b> new events</h4><br/>
                            <p className="text-justify media abouttxt"><img className="aboutimg" src={Calender} alt="About-1"/>Pitchfork'd is helping you finding all events in your area for your favourite artists too!</p>
                    </li><br/>
                    <li>
                        <h4 className="center abouttitle2"><b>Listen</b> to music</h4><br/>
                            <p className="text-justify media abouttxt">Pitchfork'd also allows you to listen to the newest songs out there!<img className="aboutimg" src={Headphones} alt="About-1"/></p>
                    </li><br/>
                </ul>
                <br/>
                <br/>
            </div>
        </div>
    )
}


export default About;