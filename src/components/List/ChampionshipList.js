import {List, ListItem, ListItemButton, ListItemText, Stack} from "@mui/material";
import HeaderAppBar from "../HeaderAppBar/HeaderAppBar";

export interface ChampNames {
    Name: String,
    set: any,
    ID: Number
}

const rows = [
    {Name: "asdfad"},
    {Name: "adgafdc"}
]

export default function ChampionshipList(props: ChampNames[]) {
    return (
        <List>
            {props.map(
                (row) => (
                    <ListItem>
                        <ListItemButton onClick={() => {
                            row.set(row.ID)
                        }}>
                            <ListItemText primary={row.Name}/>
                        </ListItemButton>
                    </ListItem>
                )
            )}
        </List>
    )
}