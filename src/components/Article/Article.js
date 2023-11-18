// import React from 'react';
import './Article.css';
import "react-dom"
import {List, ListItemText, Paper, Stack, Typography} from "@mui/material";
import Grid from "@mui/material/Grid";
// import {useNavigate} from "react-router-dom";

function Article(description, text) {
    return (
        <Paper>
            <Stack direction="column" spacing={2}>
                <Typography variant="h5" gutterBottom>
                    {description}
                </Typography>

                <Typography variant="body1" gutterBottom>
                    {text}
                </Typography>


            </Stack>
        </Paper>
    )
}


export default Article;