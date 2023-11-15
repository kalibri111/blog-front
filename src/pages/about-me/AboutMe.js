import React from 'react';
import './AboutMe.css';
import "react-dom"
import {useNavigate} from "react-router-dom";
// import Card from "../../components/Card/Card";
import MyPage from "../../page-style/PageStyle";
import {me} from "../../img/me.png"
import {Avatar, SvgIcon} from "@mui/material";

function AboutMe() {
    const navigate = useNavigate();
    const content =
        <div className="wrapper">
            <div className="about-me-wrapper">
                <div className="wrapper">
                    <div className="about-me-img-wrapper">
                        {/*<Avatar src="../../img/me.png" alt="Example Alt"/>*/}
                    </div>

                    <div className="about-me-summary-wrapper">
                        summary
                    </div>
                </div>

                <div style={{height: '90%', width: 5, backgroundColor: "var(--secondary-main)"}}></div>

                <div className="about-me-resume-wrapper">
                    резюме
                </div>
            </div>

            <div className="about-me-panel-wrapper">
                <button className="about-me-button" style={{backgroundImage: 'url("../../img/camera.jpg")'}}>
                </button>
                <button className="about-me-button" style={{backgroundImage: 'url("../../img/email.jpg")'}}>
                </button>
                <button className="about-me-button" style={{backgroundImage: 'url("../../img/plane.jpg")'}}>

                </button>
            </div>
        </div>
    return (
        <MyPage content={content}/>
    )
}


export default AboutMe;