import React from 'react';
import './PhotographerPage.css';
import "react-dom"
import {useNavigate} from "react-router-dom";

export interface Card {
    cameraName: string,
    lensName: string,
    dateName: string,
    placeName: string
}

function Card(props: Card) {
    return (
        <div className="card-wrapper">

            <div className="img-wrapper">
            </div>

            <div className="description-wrapper">
                <div className="field-wrapper">
                    {props.cameraName}
                </div>
                <div className="field-wrapper">
                    {props.lensName}
                </div>
                <div className="field-wrapper">
                    {props.dateName}
                </div>
                <div className="field-wrapper">
                    {props.placeName}
                </div>
            </div>
        </div>
    )
}


export default Card;