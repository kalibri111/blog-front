import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";


export interface ChampionshipData {
    TeamName: String,
    Wins: Number,
    Draws: Number,
    Loses: Number,
    GoalsFor: Number,
    GoalsAgainst: Number,
    GoalsDiff: Number,
    Points: Number
}

const rows = [
    {
        TeamName: "team",
        Wins: 1,
        Draws: 3,
        Loses: 4,
        GoalsFor: 5,
        GoalsAgainst: 3,
        GoalsDiff: 4,
        Points: 123
    },
    {
        TeamName: "team1",
        Wins: 1,
        Draws: 3,
        Loses: 4,
        GoalsFor: 5,
        GoalsAgainst: 3,
        GoalsDiff: 4,
        Points: 123
    },
    {
        TeamName: "team3",
        Wins: 1,
        Draws: 3,
        Loses: 4,
        GoalsFor: 5,
        GoalsAgainst: 3,
        GoalsDiff: 4,
        Points: 123
    },
];
export default function ChampionshipTable(props) {
    const data = props.data
    return(
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Команда</TableCell>
                        <TableCell>W</TableCell>
                        <TableCell>D</TableCell>
                        <TableCell>L</TableCell>
                        <TableCell>GF</TableCell>
                        <TableCell>GA</TableCell>
                        <TableCell>GD</TableCell>
                        <TableCell>Очки</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((row) => (
                        <TableRow
                            key={row.TeamName}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {row.TeamName}
                            </TableCell>
                            <TableCell align="left">{row.Wins}</TableCell>
                            <TableCell align="left">{row.Draws}</TableCell>
                            <TableCell align="left">{row.Loses}</TableCell>
                            <TableCell align="left">{row.GoalsFor}</TableCell>
                            <TableCell align="left">{row.GoalsAgainst}</TableCell>
                            <TableCell align="left">{row.GoalsDiff}</TableCell>
                            <TableCell align="left">{row.Points}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

