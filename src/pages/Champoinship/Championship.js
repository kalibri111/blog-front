import Clent, {ResourceState} from "../../requests/Client";
import {useState} from "react";
import ChampionshipTable from "../../components/Table/ChampionshipTable";
import {Stack} from "@mui/material";
import HeaderAppBar from "../../components/HeaderAppBar/HeaderAppBar";
import ChampionshipList from "../../components/List/ChampionshipList";
import Button from "@mui/material/Button";
import Client from "../../requests/Client";

export default function Championship() {
    const [isLoaded, setIsLoaded] = useState(ResourceState.REQUEST)
    const [tableId, setTableId] = useState(-1)
    const [data, setData] = useState([])

    let initialId

    if (isLoaded === ResourceState.REQUEST) {
        setIsLoaded(ResourceState.FETCHING)

        Clent.getAllTables()
            .then(value => value.json())
            .then(value => {
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
                <ChampionshipTable data={teams[0].Teams}/>
                <Button onClick={() => {
                    Client.markTableAsFavourite(findById)
                        .then(r => console.log(`marked favourite: ${JSON.stringify(r.json())}`))
                }}> Add to favourite</Button>
            </Stack>
        )
    }

}