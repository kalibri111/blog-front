import React from 'react';
import './Developer.css';
import "react-dom"
// import {useNavigate} from "react-router-dom";
// import Card from "../../components/Card/Card";
import Article from "../../components/Article/Article";
import MyPage from "../../page-style/PageStyle";

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
// import IconButton from '@mui/material/IconButton';
// import HomeIcon from '@mui/icons-material/Home';
import {
    DataGridPro,
    useGridApiRef,
    gridExpandedRowCountSelector,
    gridVisibleColumnDefinitionsSelector,
    gridExpandedSortedRowIdsSelector,
    GridCellParams,
} from '@mui/x-data-grid-pro';
// import { useDemoData } from '@mui/x-data-grid-generator';


export interface Content {
    articles: JSX.Element[]
}

// function MyContent(props: Content) {
//     return (
//         <div className="cards-scroll-wrapper">
//             {/*<div className="cards-rows">*/}
//                 {props.articles.map((input: any)=>input)}
//             {/*</div>*/}
//         </div>
//     );
// }

function MyContent(props: Content) {
    return (
        <Box sx={{ height: 400 }}>
            <DataGridPro
            />
        </Box>
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