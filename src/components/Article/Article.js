// import React from 'react';
import './Article.css';
import "react-dom"
// import {useNavigate} from "react-router-dom";

function Article(description, text) {
    return (
        <div className="article-wrapper">

            <div className="description-wrapper">
                {description}
            </div>

            <div className="text-wrapper">
                {text}
            </div>
        </div>
    )
}


export default Article;