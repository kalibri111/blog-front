import React from 'react';
import './Article.css';
import "react-dom"
import {useNavigate} from "react-router-dom";
import Card from "../components/card/Card";
import Article from "../components/article/Article";
import MyPage from "../page-style/PageStyle";


function Developer() {
    return (
        <MyPage
            content={[
                <div className="cards-scroll-wrapper">
                    <Article
                        discription="описание"
                        text="текст статьи"
                    />
                    <Article
                        discription="описание"
                        text="текст статьи"
                    />
                    <Article
                        discription="описание"
                        text="текст статьи"
                    />
                </div>
            ]}
        />
    )
}



export default Developer;