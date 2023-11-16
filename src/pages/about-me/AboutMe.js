import React from 'react';
import './AboutMe.css';
import "react-dom"
import {useNavigate} from "react-router-dom";
// import MyCard from "../../components/MyCard/MyCard";
import MyPage from "../../page-style/PageStyle";
import {me} from "../../img/me.png"
import {Avatar, Stack, SvgIcon} from "@mui/material";
import HeaderAppBar from "../../components/HeaderAppBar/HeaderAppBar";
import FooterFAB from "../../components/footer-fabs/FooterFAB";

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

            <FooterFAB/>
        </div>
    return (
        <Stack className="full-display">
            <HeaderAppBar/>
            {content}
        </Stack>

    )
}


export default AboutMe;