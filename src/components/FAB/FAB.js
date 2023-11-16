import {Fab} from "@mui/material";

import "./FAB.css"
import {ReactComponentElement} from "react";

export interface IFAB {
    icon: JSX.Element;
}

function FAB(props: IFAB) {
    return (
        <Fab className="FabCustomized" size="large">
            {props.icon}
        </Fab>
    )
}

export default FAB