import * as React from 'react';
import { useState, useEffect } from 'react';
import "./ManageClothes.css"
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { Box, Button, IconButton, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Swal from 'sweetalert2'
import Modal from '@mui/material/Modal';
import EditForm from './EditClothes';
import CsvDownloader from 'react-csv-downloader';
import DownloadIcon from '@mui/icons-material/Download';
import AddUserAppInstalled from './AddClothes';
import AddIcon from '@mui/icons-material/Add';

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

interface ManageClothes {
    clothesID: number,
    nameOfProduct: string,
    typeOfClothes: string,
    shape: string,
    clothesSeasons: string[],
    description: string,
    rating: number,
    materials: string,
    clothesSizes: string[],
    clothesColors: string[],
    clothesImages: string[],
    clothesGender: string[],
}

const ManageClothes: React.FC = () => {
    const [open, setOpen] = useState(false);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [data, setData] = useState<ManageClothes[]>([]);
    const [row, setRows] = useState<ManageClothes[]>([]);
    const [editopen, setEditOpen] = useState(false);
    const [formid, setFormId] = useState<ManageClothes | null>(null);
    const handleEditOpen = () => setEditOpen(true);
    const handleEditClose = () => setEditOpen(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleChangePage = (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    const fillData = (dataFilter: ManageClothes | null) => {
        if (dataFilter) {
            const filteredData = row.filter(item => item.clothesID === dataFilter.clothesID);
            setData(filteredData);
        } else {
            setData(row);
        }
    }

    const TOKEN = localStorage.getItem("accessToken")

    useEffect(() => {
        const apiUrl = 'https://host.whearapp.tech/api/v1/clothes/get-all-clothes';
        const headers = {
            "Authorization": `Bearer ${TOKEN}`,
        };
        fetch(apiUrl, { headers })
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


    const deleteUser = async (id: number) => {
        try {
            const response = await fetch(`https://host.whearapp.tech/api/v1/clothes/delete-clothes?clothes_id=${id}`, {
                method: 'DELETE',
                headers: {
                    "Accept": "*/*",
                    "Content-Type": "application/json",
                    "X-Requested-With": "XMLHttpRequest",
                    "Cache-Control": "no-cache",
                },
                mode: 'cors'
            });
            if (!response.ok) {
                throw new Error('Error deleting user');
            }
            const data = await response.json();
            return data;
        } catch (error) {
            throw error;
        }
    };

    const confirmDelete = async (id: number) => {
        try {
            const result = await Swal.fire({
                title: 'Confirm Delete',
                text: "Are you sure you want to delete permanently.  You can’t undo this action.",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, I want to delete it!'
            });
            if (result.isConfirmed) {
                await deleteUser(id);
                Swal.fire(
                    'Deleted Clothes Success!',
                    'Your Clothes has been deleted!!!',
                    'success'
                );
                setTimeout(() => {
                    window.location.reload();
                }, 1000);
            } else {
                Swal.fire(
                    'Cancel The Deleted Process',
                    'You cancelled the deleted proccess!!!',
                    'error'
                );
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const editData = (
        clothesID: number,
        nameOfProduct: string,
        typeOfClothes: string,
        shape: string,
        clothesSeasons: string[],
        description: string,
        rating: number,
        materials: string,
        clothesSizes: string[],
        clothesColors: string[],
        clothesImages: string[],
        clothesGender: string[]) => {
        const dataEmployee: ManageClothes = {
            clothesID: clothesID,
            nameOfProduct: nameOfProduct,
            typeOfClothes: typeOfClothes,
            shape: shape,
            clothesSeasons: clothesSeasons,
            description: description,
            rating: rating,
            materials: materials,
            clothesSizes: clothesSizes,
            clothesColors: clothesColors,
            clothesImages: clothesImages,
            clothesGender: clothesGender
        }
        console.log(dataEmployee);
        setFormId(dataEmployee);
        handleEditOpen();
    }

    const csvData = data.map((data) => ({
        clothesID: data.clothesID.toString(),
        nameOfProduct: data.nameOfProduct,
        typeOfClothes: data.typeOfClothes,
        shape: data.shape,
        clothesSeasons: data.clothesSeasons,
        description: data.description,
        rating: data.rating,
        materials: data.materials,
        clothesSizes: data.clothesSizes,
        clothesColors: data.clothesColors,
        clothesImages: data.clothesImages
    }));

    const formattedData = csvData.map(item => Object.values(item).map(value => String(value)));

    return (
        <div>
            <Paper sx={{ overflow: 'hidden' }}>
                <Typography
                    gutterBottom
                    variant='h5'
                    component='div'
                    sx={{ padding: "10px", fontWeight: "bolder" }}
                >
                    Manage Clothes
                </Typography>
                <div style={{ display: "flex" }}>
                    {/* Search Bar */}
                    <div>
                        <Autocomplete
                            className='select-country'
                            onChange={(e, v) => { fillData(v as ManageClothes) }}
                            disablePortal
                            options={data}
                            sx={{ width: 200 }}
                            getOptionLabel={(data) => data.nameOfProduct || ""}
                            renderInput={(params) => <TextField {...params} label="Select name" />}
                        />
                    </div>

                    <CsvDownloader
                        datas={formattedData}
                        text='CSV'
                        filename={`userdata_` + new Date().toLocaleString()}
                        extension='csv'
                        className='btn-success'
                    >
                        <DownloadIcon style={{ color: "white" }} />
                    </CsvDownloader>

                    <IconButton onClick={handleOpen} color="primary" aria-label="add" style={{ marginBottom: "4%" }}>
                        <AddIcon />
                    </IconButton>
                    <Modal
                        open={open}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <Box sx={style}>
                            <AddUserAppInstalled closeCard={handleClose} />
                        </Box>
                    </Modal>
                    {/* Open EDIT popup */}
                    <Modal
                        open={editopen}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <Box sx={style}>
                            {formid !== null && (
                                <EditForm
                                    editClose={handleEditClose}
                                    fid={formid}
                                />
                            )}
                        </Box>
                    </Modal>
                </div>
                <TableContainer sx={{ maxHeight: 440, maxWidth: 1200 }}>
                    <Table stickyHeader aria-label="sticky table">
                        <TableHead>
                            <TableRow>
                                <TableCell
                                    align='left'
                                    style={{ minWidth: "100px", fontWeight: "bolder" }}
                                >
                                    NAME
                                </TableCell>
                                <TableCell
                                    align='left'
                                    style={{ minWidth: "100px", fontWeight: "bolder" }}
                                >
                                    TYPE
                                </TableCell>
                                <TableCell
                                    align='left'
                                    style={{ minWidth: "100px", fontWeight: "bolder" }}
                                >
                                    SHAPE
                                </TableCell>
                                <TableCell
                                    align='left'
                                    style={{ minWidth: "100px", fontWeight: "bolder" }}
                                >
                                    SEASONS
                                </TableCell>
                                <TableCell
                                    align='left'
                                    style={{ minWidth: "100px", fontWeight: "bolder" }}
                                >
                                    DESCRIPTION
                                </TableCell>
                                <TableCell
                                    align='left'
                                    style={{ minWidth: "100px", fontWeight: "bolder" }}
                                >
                                    RATING
                                </TableCell>
                                <TableCell
                                    align='left'
                                    style={{ minWidth: "100px", fontWeight: "bolder" }}
                                >
                                    MATERIALS
                                </TableCell>
                                <TableCell
                                    align='left'
                                    style={{ minWidth: "100px", fontWeight: "bolder" }}
                                >
                                    GENDER
                                </TableCell>
                                <TableCell
                                    align='left'
                                    style={{ minWidth: "100px", fontWeight: "bolder" }}
                                >
                                    SIZES
                                </TableCell>
                                <TableCell
                                    align='left'
                                    style={{ minWidth: "100px", fontWeight: "bolder" }}
                                >
                                    COLORS
                                </TableCell>
                                <TableCell
                                    align='left'
                                    style={{ minWidth: "100px", fontWeight: "bolder" }}
                                >
                                    ACTION
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {data
                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((row) => {
                                    return (
                                        <TableRow hover role="checkbox" tabIndex={-1} key={row.clothesID}>
                                            <TableCell key={row.clothesID} align='left'>
                                                {row.nameOfProduct}
                                            </TableCell>
                                            <TableCell align='left'>
                                                {row.typeOfClothes}
                                            </TableCell>
                                            <TableCell align='left'>
                                                {row.shape}
                                            </TableCell>
                                            <TableCell align='left'>{row.clothesSeasons.length > 1 ? row.clothesSeasons.slice(0, 1) : row.clothesSeasons}</TableCell>
                                            <TableCell align='left'>
                                                {row.description.length > 30 ? row.description.slice(0, 30) + ' ...' : row.description}
                                            </TableCell>
                                            <TableCell align='left'>
                                                {row.rating}
                                            </TableCell>
                                            <TableCell align='left'>
                                                {row.materials}
                                            </TableCell>
                                            <TableCell align='left'>{row.clothesGender.length > 1 ? row.clothesGender.slice(0, 1) : row.clothesGender}</TableCell>
                                            <TableCell align='left'>{row.clothesSizes.length > 1 ? row.clothesSizes.slice(0, 1) : row.clothesSizes}</TableCell>
                                            <TableCell align='left'>{row.clothesColors.length > 1 ? row.clothesColors.slice(0, 1) : row.clothesColors}</TableCell>
                                            <TableCell align='left'>
                                                <div style={{ display: "flex" }}>
                                                    <EditIcon style={{ color: "blue", cursor: "pointer" }} onClick={() => editData(row.clothesID, row.nameOfProduct, row.typeOfClothes, row.shape, row.clothesSeasons, row.description, row.rating, row.materials, row.clothesSizes, row.clothesColors, row.clothesImages, row.clothesGender)} />
                                                    <DeleteIcon style={{ color: "red", cursor: "pointer" }} onClick={() => confirmDelete(row.clothesID)} />
                                                </div>
                                            </TableCell>
                                        </TableRow>
                                    );
                                })}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[5, 10, 100, 200, 300, 400, 500]}
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

export default ManageClothes;
