import React from 'react';
import './Developer.css';
import "react-dom"
import Article from "../../components/Article/Article";
import MyPage from "../../page-style/PageStyle";
import HeaderAppBar from "../../components/HeaderAppBar/HeaderAppBar";
import {List, ListItemText, Stack} from "@mui/material";
import Grid from "@mui/material/Grid";
import TableOfContent from "../../components/TableOfContent/TableOfContent";


export interface Content {
    articles: JSX.Element[]
}

function MyContent(props: Content) {
    return (
        <Grid container spacing={2}>
            <Grid item xs={3}>
                <TableOfContent/>
            </Grid>

            <Grid item xs={9}>
                <Stack direction="column" spacing={3}>
                    {props.articles.map((input: any)=>input)}
                </Stack>
            </Grid>
        </Grid>
        // <div className="cards-scroll-wrapper">
        //
        // </div>
    );
}


function Developer()  {
    const content=
        <MyContent
            articles={[
                Article("описание", "текст статьи"),
                Article("описание", "текст статьи"),
                Article("описание", "текст статьи")
            ]}
        />

    return (
        <Stack className="full-display" spacing={3}>
            <HeaderAppBar/>
            {content}
        </Stack>
    )
}



export default Developer;