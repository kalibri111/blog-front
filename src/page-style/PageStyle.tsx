import React from 'react';
import './PageStyle.css';
import "react-dom"
import {useNavigate} from "react-router-dom";
import Card from "../components/card/Card";

export interface MyPage {
    content: JSX.Element[]
}

function MyPage(props: MyPage) {
    const navigate = useNavigate();
    return (
        <div className="photographer-page">

            <div className="panel-wrapper">
                <div className="name-wrapper">
                    Имя
                </div>
                <input className="search-wrapper">
                    input text
                </input>
                <div className="button-wrapper">
                    <button className="button">
                        Обо мне
                    </button>

                    <button className="button">
                        Разработка
                    </button>

                    <button className="button">
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