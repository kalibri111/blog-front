import React from 'react';
import './Photographer.css';
import "react-dom"
// import {useNavigate} from "react-router-dom";
import Card from "../../components/Card/Card";
import MyPage from "../../page-style/PageStyle";

function PhotographerPage() {
    // const navigate = useNavigate();
    const content= [
            <div className="articles-scroll-wrapper">
                {Card("name", "name", "name", "name")}
                {Card("name", "name", "name", "name")}
                {Card("name", "name", "name", "name")}
            </div>
            ]
    return (
        <MyPage content={content}/>
    )
}


export default PhotographerPage;