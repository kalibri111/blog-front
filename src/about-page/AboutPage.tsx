import React from 'react';
import './AboutPage.css';
import "react-dom"
import {useNavigate} from "react-router-dom";
import Card from "../components/card/Card";
import MyPage from "../page-style/PageStyle";

function AboutPage() {
    const navigate = useNavigate();
    return (
        <MyPage
            content={[

            ]}
        />
    )
}


export default AboutPage;