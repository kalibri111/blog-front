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
import {GridRowsProp} from "@mui/x-data-grid-pro";
import {GridColDef} from "@mui/x-data-grid-pro";

function Test() {
    // const apiRef = useGridApiRef();
    //
    // const [coordinates, setCoordinates] = React.useState({
    //     rowIndex: 0,
    //     colIndex: 0,
    // });
    //
    // const { data } = useDemoData({
    //     dataSet: '',
    //     rowLength: 100,
    // });

    // React.useEffect(() => {
    //     const { rowIndex, colIndex } = coordinates;
    //     apiRef.current.scrollToIndexes(coordinates);
    //     const id = gridExpandedSortedRowIdsSelector(apiRef)[rowIndex];
    //     const column = gridVisibleColumnDefinitionsSelector(apiRef)[colIndex];
    //     apiRef.current.setCellFocus(id, column.field);
    // }, [apiRef, coordinates]);


    // const handleCellClick = (params: GridCellParams) => {
    //     const rowIndex = gridExpandedSortedRowIdsSelector(apiRef).findIndex(
    //         (id) => id === params.id,
    //     );
    //     const colIndex = gridVisibleColumnDefinitionsSelector(apiRef).findIndex(
    //         (column) => column.field === params.field,
    //     );
    //     setCoordinates({ rowIndex, colIndex });
    // };

    const rows: GridRowsProp = [
        { id: 1, col1: 'Hello', col2: 'World', width: '100%', height: '100%' },
        { id: 2, col1: 'DataGridPro', col2: 'is Awesome' },
        { id: 3, col1: 'MUI', col2: 'is Amazing' },
        { id: 4, col1: 'Hello', col2: 'World' },
        { id: 5, col1: 'DataGridPro', col2: 'is Awesome' },
        { id: 6, col1: 'MUI', col2: 'is Amazing' },
        { id: 7, col1: 'Hello', col2: 'World' },
        { id: 8, col1: 'DataGridPro', col2: 'is Awesome' },
        { id: 9, col1: 'MUI', col2: 'is Amazing' },
    ];

    const columns: GridColDef[] = [
        { field: 'col1', headerName: 'Column 1', width: '100%', height: '100%' },
        { field: 'col2', headerName: 'Column 2', width: '100%', height: '100%' },
    ];

    return (
        <Box sx={{ width: '100%', height: '100%'}}>
            {/*<Box sx={{ height: '50%', width: '50%' }}>*/}
                {/*<DataGrid AutoGenerateColumns="True"*/}
                {/*          CanContentScroll="True"*/}
                {/*          VerticalScrollBarVisibility="Auto"*/}
                {/*          HorizontalScrollBarVisibility="Auto"*/}
                {/*          columns={}*/}
                {/*          rows={}>*/}
                {/*</DataGrid>*/}
                <DataGrid
                    rows={rows}
                    columns={columns}
                />
            {/*</Box>*/}
        </Box>
    );
}

export default Test;
