// import React from 'react';
import './PageStyle.css';
import "react-dom"
import "../colors.css"
import {useNavigate} from "react-router-dom";
// import {useNavigate} from "react-router-dom";

export interface Page {
    content: JSX.Element
}

function MyPage(props: Page) {
    const navigate = useNavigate();
    return (
        <div className="page">

            <div className="panel-wrapper">
                <div className="name-wrapper">
                    Имя
                </div>
                <input className="search-wrapper" placeholder="input text">
                </input>
                <div className="buttons-wrapper">
                    <button className="button" onClick={() => navigate("/about-me")}>
                        Обо мне
                    </button>

                    <button className="button" onClick={() => navigate("/developer")}>
                        Разработка
                    </button>

                    <button className="button" onClick={() => navigate("/photographer")}>
                        Фотография
                    </button>
                </div>
            </div>

            <div className="content-wrapper">
                {props.content}
            </div>

        </div>
    )
}


export default MyPage;