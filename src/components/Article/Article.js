// import React from 'react';
import './Article.css';
import "react-dom"
import {List, ListItemText, Paper, Stack, Typography} from "@mui/material";
import Grid from "@mui/material/Grid";
import Markdown from "react-markdown";
import remarkGfm from 'remark-gfm'
// import {useNavigate} from "react-router-dom";

function Article(description, text) {
    return (
        <Paper sx={{ p: 2 }}>
            <Stack direction="column" spacing={2}>

                <Typography variant="body1" gutterBottom>
                    <Markdown remarkPlugins={[remarkGfm]}>{text}</Markdown>
                </Typography>


            </Stack>
        </Paper>
    )
}


export default Article;