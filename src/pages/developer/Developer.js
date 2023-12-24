import React, {useState} from 'react';
import './Developer.css';
import "react-dom"
import Article from "../../components/Article/Article";
import MyPage from "../../page-style/PageStyle";
import HeaderAppBar from "../../components/HeaderAppBar/HeaderAppBar";
import {List, ListItemText, Stack} from "@mui/material";
import Grid from "@mui/material/Grid";
import TableOfContent from "../../components/TableOfContent/TableOfContent";
import Client, {ResourceState} from "../../requests/Client";
import Markdown from 'react-markdown'


export interface Content {
    articles: JSX.Element[],
    headers: JSX.Element[]
}

function MyContent(props: Content) {
    return (
        <Grid container spacing={2} sx={{mx: 'auto'}}>
            <Grid item xs={3}>
                <TableOfContent headers={props.headers.map((input: any) => input)}/>
            </Grid>

            <Grid item xs={9}>
                <Stack direction="column" spacing={3}>
                    {props.articles}
                </Stack>
            </Grid>
        </Grid>
    );
}


function Developer() {
    console.log("called")
    const [articles, setArticles] = useState([])
    const [headers, setHeaders] = useState([])
    const [isLoaded, setIsLoaded] = useState(ResourceState.REQUEST)

    if (isLoaded === ResourceState.REQUEST) {
        setIsLoaded(ResourceState.FETCHING)

        Client.getAllArticles()
            .then(value => value.json())
            .then(value => {
                const articlesCnt = value.length
                let loadedArticlesCnt = 0
                console.log(`all articles: ${value}`)
                value.map((entry) => {
                    setHeaders(
                        oldArray => [...oldArray, <ListItemText primary={entry.Header}/>]
                    )

                    Client.getArticleText(entry.ID)
                        .then(value1 => value1.text())
                        .then(value1 => {
                            setArticles(
                                oldArray => [...oldArray, Article("описание", value1)]
                            )
                            loadedArticlesCnt += 1

                            if (articlesCnt === loadedArticlesCnt) {
                                setIsLoaded(ResourceState.LOADED)
                            }
                        })
                })
            })
    }

    if (isLoaded) {
        console.log(`loaded headers: ${headers}`)
        return (
            <Stack className="full-display" spacing={3}>
                <HeaderAppBar/>
                <MyContent
                    articles={articles}
                    headers={headers}
                />
            </Stack>
        )
    }

}


export default Developer;