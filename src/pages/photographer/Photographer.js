import React from 'react';
import './Photographer.css';
import "react-dom"
// import {useNavigate} from "react-router-dom";
import MyCard from "../../components/Card/MyCard";
import MyPage from "../../page-style/PageStyle";
import HeaderAppBar from "../../components/HeaderAppBar/HeaderAppBar";
import {Stack} from "@mui/material";
import PhotoCard from "../../components/PhotoCard/PhotoCard";

function PhotographerPage() {
    // const navigate = useNavigate();
    const content= [
            <Stack className="content-holder">
                {PhotoCard("name", "name", "name", "name")}
            </Stack>
            // <div className="articles-scroll-wrapper">
            //     {PhotoCard("name", "name", "name", "name")}
            // </div>
            ]
    return (
        <Stack className="full-display" spacing={3}>
            <HeaderAppBar/>
            {content}
        </Stack>
    )
}


export default PhotographerPage;