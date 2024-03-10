import * as React from 'react';
import { useState, useEffect } from 'react';
import "./ManageBrand.css"
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { Box, Button, Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Modal from '@mui/material/Modal';
import AddUserAppInstalled from './AddBrand';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4
};

interface clothesResponseList {
    clothesID: number,
    nameOfProduct: string,
    typeOfClothes: string,
    shape: string,
    description: string,
    rating: number,
    materials: string,
    reactPerClothes: number
}

interface ManageBrand {
    brandID: number,
    clothesResponseList: clothesResponseList
}

const ManageBrand: React.FC = () => {
    const [open, setOpen] = useState(false);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [data, setData] = useState<ManageBrand[]>([]);
    const [row, setRows] = useState<ManageBrand[]>([]);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleChangePage = (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    const fillData = (dataFilter: ManageBrand | null) => {
        if (dataFilter) {
            setData([dataFilter]);
        } else {
            setData(row);
        }
    }

    useEffect(() => {
        const apiUrl = `https://tam.mavericks-tttm.studio/api/v1/brand/get-hot-brand`;
        fetch(apiUrl)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((data) => {
                if (data && Array.isArray(data.data)) {
                    setData(data.data);
                    setRows(data.data);
                    console.log("Data received:", data.data);

                } else {
                    console.error('Invalid data format:', data);
                }
            })
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <div>
            <Paper sx={{ overflow: 'hidden' }}>
                <Typography
                    gutterBottom
                    variant='h5'
                    component='div'
                    sx={{ padding: "10px", fontWeight: "bolder" }}
                >
                    Manage Brand
                </Typography>
                <div style={{ display: "flex" }}>
                    {/* Search Bar */}
                    <div>
                        <Autocomplete
                            className='select-country'
                            onChange={(e, v) => { fillData(v as ManageBrand) }}
                            disablePortal
                            options={data}
                            sx={{ width: 200 }}
                            getOptionLabel={(data) => data.clothesResponseList.typeOfClothes || ""}
                            renderInput={(params) => <TextField {...params} label="Select Country" />}
                        />
                    </div>
                    <Button onClick={handleOpen}>Add</Button>
                    <Modal
                        open={open}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <Box sx={style}>
                            <AddUserAppInstalled closeCard={handleClose} />
                        </Box>
                    </Modal>
                </div>
                <TableContainer sx={{ maxHeight: 440 }}>
                    <Table stickyHeader aria-label="sticky table">
                        <TableHead>
                            <TableRow>
                                <TableCell
                                    align='left'
                                    style={{ minWidth: "100px", fontWeight: "bolder" }}
                                >
                                    brandID
                                </TableCell>
                                <TableCell
                                    align='left'
                                    style={{ minWidth: "100px", fontWeight: "bolder" }}
                                >
                                    clothesID
                                </TableCell>
                                <TableCell
                                    align='left'
                                    style={{ minWidth: "100px", fontWeight: "bolder" }}
                                >
                                    description
                                </TableCell>
                                <TableCell
                                    align='left'
                                    style={{ minWidth: "100px", fontWeight: "bolder" }}
                                >
                                    materials
                                </TableCell>
                                <TableCell
                                    align='left'
                                    style={{ minWidth: "100px", fontWeight: "bolder" }}
                                >
                                    nameOfProduct
                                </TableCell>

                                <TableCell
                                    align='left'
                                    style={{ minWidth: "100px", fontWeight: "bolder" }}
                                >
                                    rating
                                </TableCell>

                                <TableCell
                                    align='left'
                                    style={{ minWidth: "100px", fontWeight: "bolder" }}
                                >
                                    reactPerClothes
                                </TableCell>

                                <TableCell
                                    align='left'
                                    style={{ minWidth: "100px", fontWeight: "bolder" }}
                                >
                                    shape
                                </TableCell>

                                <TableCell
                                    align='left'
                                    style={{ minWidth: "100px", fontWeight: "bolder" }}
                                >
                                    typeOfClothes
                                </TableCell>

                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {Array.isArray(data) && data
                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((row) => {
                                    return (
                                        <TableRow hover role="checkbox" tabIndex={-1} key={row.brandID}>
                                            <TableCell key={row.brandID} align='left'>
                                                {row.brandID}
                                            </TableCell>
                                            <TableCell align='left'>
                                                {row.clothesResponseList.clothesID}
                                            </TableCell>
                                            <TableCell align='left'>
                                                {row.clothesResponseList.description}
                                            </TableCell>
                                            <TableCell align='left'>
                                                {row.clothesResponseList.materials}
                                            </TableCell>
                                            <TableCell align='left'>
                                                {row.clothesResponseList.nameOfProduct}
                                            </TableCell>
                                            <TableCell align='left'>
                                                {row.clothesResponseList.rating}
                                            </TableCell>
                                            <TableCell align='left'>
                                                {row.clothesResponseList.reactPerClothes}
                                            </TableCell>
                                            <TableCell align='left'>
                                                {row.clothesResponseList.shape}
                                            </TableCell>
                                            <TableCell align='left'>
                                                {row.clothesResponseList.typeOfClothes}
                                            </TableCell>
                                        </TableRow>
                                    );
                                })}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[5, 10, 50]}
                    component="div"
                    count={data.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Paper>
        </div>
    );
}

export default ManageBrand;
