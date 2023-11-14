import React from 'react';
import './Developer.css';
import "react-dom"
import Article from "../../components/Article/Article";
import MyPage from "../../page-style/PageStyle";


export interface Content {
    articles: JSX.Element[]
}

function MyContent(props: Content) {
    return (
        <div className="cards-scroll-wrapper">
            {props.articles.map((input: any)=>input)}
        </div>
    );
}


function Developer()  {
    const content=
        <MyContent
            articles={[
                Article("описание", "текст статьи"),
                Article("описание", "текст статьи"),
                Article("описание", "текст статьи"),
                Article("описание", "текст статьи"),
                Article("описание", "текст статьи"),
                Article("описание", "текст статьи"),
                Article("описание", "текст статьи"),
                Article("описание", "текст статьи"),
                Article("описание", "текст статьи"),
                Article("описание", "текст статьи"),
                Article("описание", "текст статьи"),
                Article("описание", "текст статьи")
            ]}
        />

    return (
        <MyPage content={content}/>
    )
}



export default Developer;