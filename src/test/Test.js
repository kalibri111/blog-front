import * as React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import HomeIcon from '@mui/icons-material/Home';
import {
    DataGridPro,
    useGridApiRef,
    gridExpandedRowCountSelector,
    gridVisibleColumnDefinitionsSelector,
    gridExpandedSortedRowIdsSelector,
    GridCellParams,
} from '@mui/x-data-grid-pro';
import { useDemoData } from '@mui/x-data-grid-generator';
import {DataGrid} from "@mui/x-data-grid";

function Test() {
    const apiRef = useGridApiRef();

    const [coordinates, setCoordinates] = React.useState({
        rowIndex: 0,
        colIndex: 0,
    });

    const { data } = useDemoData({
        dataSet: '',
        rowLength: 100,
    });

    React.useEffect(() => {
        const { rowIndex, colIndex } = coordinates;
        apiRef.current.scrollToIndexes(coordinates);
        const id = gridExpandedSortedRowIdsSelector(apiRef)[rowIndex];
        const column = gridVisibleColumnDefinitionsSelector(apiRef)[colIndex];
        apiRef.current.setCellFocus(id, column.field);
    }, [apiRef, coordinates]);


    const handleCellClick = (params: GridCellParams) => {
        const rowIndex = gridExpandedSortedRowIdsSelector(apiRef).findIndex(
            (id) => id === params.id,
        );
        const colIndex = gridVisibleColumnDefinitionsSelector(apiRef).findIndex(
            (column) => column.field === params.field,
        );
        setCoordinates({ rowIndex, colIndex });
    };



    return (
        <Box sx={{ width: '50%', height: '100%'}}>
        {/*//     <Box sx={{ width: 300, margin: '0 auto 16px' }}>*/}
        {/*//         <Grid container justifyContent="center">*/}
        {/*//             <Grid item>*/}
        {/*//                 <Button onClick={handleClick('top')}>top</Button>*/}
        {/*//             </Grid>*/}
        {/*//         </Grid>*/}
        {/*//         <Grid container textAlign="center">*/}
        {/*//             <Grid item xs={4}>*/}
        {/*//                 <Button onClick={handleClick('left')}>left</Button>*/}
        {/*//             </Grid>*/}
        {/*//             <Grid item xs={4}>*/}
        {/*//                 <IconButton*/}
        {/*//                     color="primary"*/}
        {/*//                     aria-label="home"*/}
        {/*//                     onClick={handleClick('home')}*/}
        {/*//                 >*/}
        {/*//                     <HomeIcon />*/}
        {/*//                 </IconButton>*/}
        {/*//             </Grid>*/}
        {/*//             <Grid item xs={4}>*/}
        {/*//                 <Button onClick={handleClick('right')}>right</Button>*/}
        {/*//             </Grid>*/}
        {/*//         </Grid>*/}
        {/*//         <Grid container justifyContent="center">*/}
        {/*//             <Grid item>*/}
        {/*//                 <Button onClick={handleClick('bottom')}>bottom</Button>*/}
        {/*//             </Grid>*/}
        {/*//         </Grid>*/}
        {/*//     </Box>*/}
            <Box sx={{ height: '50%', width: '50%' }}>
                {/*<DataGrid AutoGenerateColumns="True"*/}
                {/*          CanContentScroll="True"*/}
                {/*          VerticalScrollBarVisibility="Auto"*/}
                {/*          HorizontalScrollBarVisibility="Auto"*/}
                {/*          columns={}*/}
                {/*          rows={}>*/}
                {/*</DataGrid>*/}
                <DataGridPro
                    apiRef={apiRef}
                    onCellClick={handleCellClick}
                    hideFooter
                    {...data}
                />
            </Box>
        </Box>
    );
}

export default Test;
