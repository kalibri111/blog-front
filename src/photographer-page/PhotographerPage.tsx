import React from 'react';
import './PhotographerPage.css';
import "react-dom"
import {useNavigate} from "react-router-dom";
import Card from "../components/card/Card";
import MyPage from "../page-style/PageStyle";

function PhotographerPage() {
    const navigate = useNavigate();
    return (
        <MyPage
            content={[
                <div className="articles-scroll-wrapper">
                    <Card
                        cameraName="name"
                        lensName="name"
                        dateName="name"
                        placeName="name"
                    />
                    <Card
                        cameraName="name"
                        lensName="name"
                        dateName="name"
                        placeName="name"
                    />
                    <Card
                        cameraName="name"
                        lensName="name"
                        dateName="name"
                        placeName="name"
                    />
                </div>
            ]}
        />
    )
}


export default PhotographerPage;