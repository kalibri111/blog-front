import React from 'react';
import './Article.css';
import "react-dom"
import {useNavigate} from "react-router-dom";

export interface Article {
    discription: string,
    text: string
}

function Article(props: Article) {
    return (
        <div className="article-wrapper">

            <div className="description-wrapper">
                {props.discription}
            </div>

            <div className="text-wrapper">
                {props.text}
            </div>
        </div>
    )
}


export default Article;