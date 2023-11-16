import React from 'react';
import './Photographer.css';
import "react-dom"
// import {useNavigate} from "react-router-dom";
import MyCard from "../../components/Card/MyCard";
import MyPage from "../../page-style/PageStyle";

function PhotographerPage() {
    // const navigate = useNavigate();
    const content= [
            <div className="articles-scroll-wrapper">
                {MyCard("name", "name", "name", "name")}
                {MyCard("name", "name", "name", "name")}
                {MyCard("name", "name", "name", "name")}
            </div>
            ]
    return (
        <MyPage content={content}/>
    )
}


export default PhotographerPage;