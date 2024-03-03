import * as React from 'react';
import { useState, useEffect } from 'react';
import "./ManageUsers.css"
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { Box, Button, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Swal from 'sweetalert2'
import Modal from '@mui/material/Modal';
import EditForm from './EditUser';
import CsvDownloader from 'react-csv-downloader';
import DownloadIcon from '@mui/icons-material/Download';
import AddUserAppInstalled from './AddUser';

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

interface ManageUser {
    userID: number,
    username: string,
    dateOfBirth: string,
    phone: string,
    email: string,
    gender: boolean,
    role: string,
    language: string,
    status: string
}

const ManageUser: React.FC = () => {
    const [open, setOpen] = useState(false);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [data, setData] = useState<ManageUser[]>([]);
    const [row, setRows] = useState<ManageUser[]>([]);
    const [editopen, setEditOpen] = useState(false);
    const [formid, setFormId] = useState<ManageUser | null>(null);

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

    const fillData = (dataFilter: ManageUser | null) => {
        if (dataFilter) {
            setData([dataFilter]);
        } else {
            setData(row);
        }
    }

    useEffect(() => {
        const apiUrl = 'http://localhost:6969/api/v1/user/get-all-user';
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


    const deleteUser = async (id: number) => {
        console.log("id is" + id);

        try {
            const response = await fetch(`http://localhost:6969/api/v1/user/update-status-user?userid=${id}`, {
                method: 'PUT',
                // headers: {
                //     "Access-Control-Allow-Origin": 'http://localhost:3000',
                //     "Authorization": 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ0ZXN0MUBnbWFpbC5jb20iLCJpYXQiOjE3MDY1ODc1NzQsImV4cCI6MTcwNjY3Mzk3NH0.8NQ0JbmoA9Bv64AIXyaYSbRo9CANXtNtRGfH32JveZs',
                //     "Accept": "*/*",
                //     "Content-Type": "application/json",
                //     "X-Requested-With": "XMLHttpRequest",
                //     "Cache-Control": "no-cache",
                // },
                // mode: 'cors'
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
                text: "Are you sure you want to delete user permanently.  You can’t undo this action.",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, I want to delete it!'
            });
            if (result.isConfirmed) {
                await deleteUser(id);
                Swal.fire(
                    'Deleted UserAppInstalled Success!',
                    'Your UserAppInstalled has been deleted!!!',
                    'success'
                );
                setTimeout(() => {
                    window.location.reload();
                }, 2000);
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

    const editData = (userID: number, username: string, dateOfBirth: string, phone: string, email: string, gender: boolean, role: string, language: string, status: string) => {
        const dataEmployee: ManageUser = {
            userID: userID,
            username: username,
            dateOfBirth: dateOfBirth,
            phone: phone,
            email: email,
            gender: gender,
            role: role,
            language: language,
            status: status
        }
        setFormId(dataEmployee);
        handleEditOpen();
    }

    const csvData = data.map((data) => ({
        userID: data.userID.toString(),
        username: data.username,
        dateOfBirth: data.dateOfBirth,
        phone: data.phone,
        email: data.email,
        gender: data.gender,
        role: data.role,
        language: data.language,
        status: data.status
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
                    Manage User
                </Typography>
                <div style={{ display: "flex" }}>
                    {/* Search Bar */}
                    <div>
                        <Autocomplete
                            className='select-country'
                            onChange={(e, v) => { fillData(v as ManageUser) }}
                            disablePortal
                            options={data}
                            sx={{ width: 200 }}
                            getOptionLabel={(data) => data.username || ""}
                            renderInput={(params) => <TextField {...params} label="Select Country" />}
                        />
                    </div>

                    <div>
                        <Autocomplete
                            className='select-activity'
                            onChange={(e, v) => { fillData(v as ManageUser) }}
                            disablePortal
                            options={data}
                            sx={{ width: 200 }}
                            getOptionLabel={(data) => data.email || ""}
                            renderInput={(params) => <TextField {...params} label="Select by last Activity" />}
                        />
                    </div>

                    <CsvDownloader
                        datas={formattedData}
                        text='CSV'
                        filename={`userdata_${new Date().toLocaleString()}`}
                        extension='csv'
                        className='btn-success'
                    >
                        <DownloadIcon style={{ color: "white" }} />
                    </CsvDownloader>

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
                <TableContainer sx={{ maxHeight: 440 }}>
                    <Table stickyHeader aria-label="sticky table">
                        <TableHead>
                            <TableRow>
                                <TableCell
                                    align='left'
                                    style={{ minWidth: "100px", fontWeight: "bolder" }}
                                >
                                    USERNAME
                                </TableCell>
                                <TableCell
                                    align='left'
                                    style={{ minWidth: "100px", fontWeight: "bolder" }}
                                >
                                    DOB
                                </TableCell>
                                <TableCell
                                    align='left'
                                    style={{ minWidth: "100px", fontWeight: "bolder" }}
                                >
                                    PHONE
                                </TableCell>
                                <TableCell
                                    align='left'
                                    style={{ minWidth: "100px", fontWeight: "bolder" }}
                                >
                                    EMAIL
                                </TableCell>
                                {/* <TableCell
                                    align='left'
                                    style={{ minWidth: "100px", fontWeight: "bolder" }}
                                >
                                    GENDER
                                </TableCell> */}
                                <TableCell
                                    align='left'
                                    style={{ minWidth: "100px", fontWeight: "bolder" }}
                                >
                                    ROLE
                                </TableCell>
                                <TableCell
                                    align='left'
                                    style={{ minWidth: "100px", fontWeight: "bolder" }}
                                >
                                    LANGUAGE
                                </TableCell>
                                <TableCell
                                    align='left'
                                    style={{ minWidth: "100px", fontWeight: "bolder" }}
                                >
                                    STATUS
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
                                        <TableRow hover role="checkbox" tabIndex={-1} key={row.userID}>
                                            <TableCell key={row.userID} align='left'>
                                                {row.username}
                                            </TableCell>
                                            <TableCell align='left'>
                                                {row.dateOfBirth}
                                            </TableCell>
                                            <TableCell align='left'>
                                                {row.phone}
                                            </TableCell>
                                            <TableCell align='left'>
                                                {row.email}
                                            </TableCell>
                                            {/* <TableCell align='left'>
                                                {row.gender}
                                            </TableCell> */}
                                            <TableCell align='left'>
                                                {row.role}
                                            </TableCell>
                                            <TableCell align='left'>
                                                {row.language}
                                            </TableCell>
                                            <TableCell align='left'>
                                                {row.status}
                                            </TableCell>
                                            <TableCell align='left'>
                                                <div style={{ display: "flex" }}>
                                                    <EditIcon style={{ color: "blue", cursor: "pointer" }} onClick={() => editData(row.userID, row.username, row.dateOfBirth, row.phone, row.email, row.gender, row.role, row.language, row.status)} />
                                                    <DeleteIcon style={{ color: "red", cursor: "pointer" }} onClick={() => confirmDelete(row.userID)} />
                                                </div>
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

export default ManageUser;
