import React, {useEffect, useState} from 'react';
import './Photographer.css';
import "react-dom"
// import {useNavigate} from "react-router-dom";
import MyCard from "../../components/Card/MyCard";
import MyPage from "../../page-style/PageStyle";
import HeaderAppBar from "../../components/HeaderAppBar/HeaderAppBar";
import {ListItemText, Stack} from "@mui/material";
import PhotoCard from "../../components/PhotoCard/PhotoCard";
import Client, {ResourceState} from "../../requests/Client";

function PhotographerPage() {

    const [photoCards, setPhotoCards] = useState([])
    const [isLoaded, setIsLoaded] = useState(ResourceState.REQUEST)

    if (isLoaded === ResourceState.REQUEST) {

        setIsLoaded(ResourceState.FETCHING)

        Client.getAllPhotos()
            .then(value => value.json())
            .then(value => {
                console.log(value)

                const photoCnt = value.length

                let loaded = 0;

                value.map((value) => {

                    Client.getPhotoDownload(value.ID)
                        .then(response => response.blob())
                        .then(photo => {
                            console.log(`pushed photo with id: ${value.ID}`)
                            setPhotoCards(
                                oldArray => [...oldArray, PhotoCard(URL.createObjectURL(photo), value.Camera, value.Lens, value.Date)]
                            )
                            loaded += 1
                            console.log(`loaded: ${loaded}`)

                            if (photoCnt === loaded) {
                                setIsLoaded(ResourceState.LOADED)
                            }
                        })

                })
            })
    }


    if(isLoaded === ResourceState.LOADED) {

        const content = [
            <Stack className="content-holder">
                {photoCards}
                {/*{PhotoCard("name", "name", "name", "name")}*/}
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

}


export default PhotographerPage;