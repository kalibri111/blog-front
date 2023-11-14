// import React from 'react';
import './Card.css';
import "react-dom"
// import {useNavigate} from "react-router-dom";

// export interface Card {
//     cameraName: string,
//     lensName: string,
//     dateName: string,
//     placeName: string
// }

function Card(cameraName: string, lensName: string, dateName: string, placeName: string) {
    return (
        <div className="card-wrapper">

            <div className="img-wrapper">
                <img src="../../img/me.png" alt=""/>
            </div>

            <div className="description-wrapper">
                <div className="field-wrapper">
                    {cameraName}
                </div>
                <div className="field-wrapper">
                    {lensName}
                </div>
                <div className="field-wrapper">
                    {dateName}
                </div>
                <div className="field-wrapper">
                    {placeName}
                </div>
            </div>
        </div>
    )
}


export default Card;