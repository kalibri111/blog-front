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
                <div className="">
                    <div className="">

                    </div>
                    <div className="">

                    </div>
                </div>,
                <div className="">
                    <button className="">

                    </button>
                    <button className="">

                    </button>
                    <button className="">

                    </button>
                </div>
            ]}
        />
    )
}


export default AboutPage;