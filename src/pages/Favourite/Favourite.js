import {useState} from "react";
import Clent, {ResourceState} from "../../requests/Client";
import ChampionshipList from "../../components/List/ChampionshipList";
import {Stack} from "@mui/material";
import HeaderAppBar from "../../components/HeaderAppBar/HeaderAppBar";
import ChampionshipTable from "../../components/Table/ChampionshipTable";
import Button from "@mui/material/Button";

export default function Favourite() {
    const [isLoaded, setIsLoaded] = useState(ResourceState.REQUEST)
    const [tableId, setTableId] = useState(-1)
    const [data, setData] = useState([])

    let initialId

    if (isLoaded === ResourceState.REQUEST) {
        setIsLoaded(ResourceState.FETCHING)

        Clent.getFavouriteTables()
            .then(value => value.json())
            .then(value => {
                console.log(`favourites: ${value}`)
                const data = value["data"]
                setData(data)
                setIsLoaded(ResourceState.LOADED)
            })
    }

    if (isLoaded === ResourceState.LOADED) {
        let championships = []
        data.forEach((dat) => {
            championships.push({
                Name: dat.ChampionshipName + " " + dat.Season,
                set: setTableId,
                ID: dat.ID
            })

            initialId = dat.ID
        })

        const listClickable = ChampionshipList(championships)

        let findById
        if (tableId === -1) {
            findById = initialId
        } else {
            findById = tableId
        }

        const teams = data.filter((d) => {return d.ID === findById})


        return (
            <Stack className="full-display" spacing={3}>
                <HeaderAppBar/>
                {listClickable}
            </Stack>
        )
    }

}