import {List, ListItemText, Paper} from "@mui/material";
import "./TableOfContent.css"

export interface Headers {
    headers: JSX.Element[]
}

function TableOfContent(props: Headers) {
    return (
        <Paper>
            <List>
                {props.headers}
            </List>
        </Paper>

    )
}

export default TableOfContent