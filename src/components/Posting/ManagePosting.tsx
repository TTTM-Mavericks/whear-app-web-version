import * as React from 'react';
import { useState, useEffect } from 'react';
import "./ManagePosting.css"
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
import EditForm from './EditPosting';
import CsvDownloader from 'react-csv-downloader';
import DownloadIcon from '@mui/icons-material/Download';
import AddCollection from './AddPosting';

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


interface userResponse {
    userID: number
}

interface ManagePosting {
    postID: number,
    typeOfPosts: string,
    hashtag: string | string[]
    date: string,
    status: string,
    userResponse: userResponse
}

const ManagePosting: React.FC = () => {
    const [selectedHashtag, setSelectedHashtags] = useState<string | null>(null);
    const [open, setOpen] = useState(false);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [data, setData] = useState<ManagePosting[]>([]);
    const [row, setRows] = useState<ManagePosting[]>([]);
    const [editopen, setEditOpen] = useState(false);
    const [formid, setFormId] = useState<ManagePosting | null>(null);
    const [formidUserResponse, setFormIdUserResponse] = useState<userResponse | null>(null);
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

    const fillData = (dataFilter: ManagePosting | null) => {
        if (dataFilter) {
            setData([dataFilter]);
        } else {
            setData(row);
        }
    }

    useEffect(() => {
        const apiUrl = `https://tam.mavericks-tttm.studio/api/v1/post/get-all-post`;
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
        try {
            const response = await fetch(`https://tam.mavericks-tttm.studio/api/v1/post/delete-by-postid?post_id=${id}`, {
                method: 'DELETE',
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
                    'Deleted Posting Success!',
                    'Your Posting has been deleted!!!',
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

    const editData = (
        postID: number,
        userID: number,
        typeOfPosts: string,
        date: string,
        status: string,
        hashtag: string | string[]
    ) => {
        const dataEmployee: ManagePosting = {
            postID: postID,
            typeOfPosts: typeOfPosts,
            date: date,
            status: status,
            hashtag: Array.isArray(hashtag) ? hashtag.join(', ') : (hashtag ? hashtag.toString() : ""),
            userResponse: { userID: userID }
        };
        console.log(dataEmployee);
        setFormId(dataEmployee);
        setFormIdUserResponse({ userID: userID });
        handleEditOpen();
    };

    const csvData = data.map((data) => ({
        postID: data.postID.toString(),
        userID: data.userResponse.userID,
        typeOfPosts: data.typeOfPosts,
        date: data.date,
        status: data.status,
        hashtag: data.hashtag
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
                    Manage Posts
                </Typography>
                <div style={{ display: "flex" }}>
                    {/* Search Bar */}
                    <div>
                        <Autocomplete
                            className='select-country'
                            onChange={(e, v) => { fillData(v as ManagePosting) }}
                            disablePortal
                            options={data}
                            sx={{ width: 200 }}
                            getOptionLabel={(data) => data.typeOfPosts || ""}
                            renderInput={(params) => <TextField {...params} label="Select Type Of Post" />}
                        />
                    </div>

                    {/* <div>
                        <Autocomplete
                            className='select-activity'
                            onChange={(e, v) => { fillData(v as ManagePosting) }}
                            disablePortal
                            options={data}
                            sx={{ width: 200 }}
                            getOptionLabel={(data) => data.typeOfPosts || ""}
                            renderInput={(params) => <TextField {...params} label="Select by last Activity" />}
                        />
                    </div> */}

                    <CsvDownloader
                        datas={formattedData}
                        text='CSV'
                        filename={`userdata_` + new Date().toLocaleString()}
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
                            <AddCollection closeCard={handleClose} />
                        </Box>
                    </Modal>
                    {/* Open EDIT popup */}
                    <Modal
                        open={editopen}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <Box sx={style}>
                            {formid !== null && formidUserResponse !== null && (
                                <EditForm
                                    editClose={handleEditClose}
                                    fid={formid}
                                    userResponse={formidUserResponse}
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
                                    POSTID
                                </TableCell>
                                <TableCell
                                    align='left'
                                    style={{ minWidth: "100px", fontWeight: "bolder" }}
                                >
                                    USERID
                                </TableCell>
                                <TableCell
                                    align='left'
                                    style={{ minWidth: "100px", fontWeight: "bolder" }}
                                >
                                    TYPEOFPOSTS
                                </TableCell>
                                <TableCell
                                    align='left'
                                    style={{ minWidth: "100px", fontWeight: "bolder" }}
                                >
                                    HASHTAG
                                </TableCell>
                                <TableCell
                                    align='left'
                                    style={{ minWidth: "100px", fontWeight: "bolder" }}
                                >
                                    DATE
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
                                        <TableRow hover role="checkbox" tabIndex={-1} key={row.postID}>
                                            <TableCell key={row.postID} align='left'>
                                                {row.postID}
                                            </TableCell>
                                            <TableCell align='left'>
                                                {row.userResponse.userID}
                                            </TableCell>
                                            <TableCell align='left'>
                                                {row.typeOfPosts}
                                            </TableCell>
                                            <TableCell align='left'>
                                                {Array.isArray(row.hashtag) ? (
                                                    row.hashtag.map((tag: string | { hashtagID: number; hashtag: string }, index: number) => (
                                                        typeof tag === 'string' ? (
                                                            <span key={index}>{tag}</span>
                                                        ) : (
                                                            <span key={index}>{tag.hashtag} <br /></span>
                                                        )
                                                    ))
                                                ) : (
                                                    <span>{row.hashtag || "NULL"}</span>
                                                )}
                                            </TableCell>
                                            <TableCell align='left'>
                                                {row.date}
                                            </TableCell>
                                            <TableCell align='left'>
                                                {row.status}
                                            </TableCell>
                                            <TableCell align='left'>
                                                <div style={{ display: "flex" }}>
                                                    <EditIcon style={{ color: "blue", cursor: "pointer" }} onClick={() => editData(row.postID, row.userResponse.userID, row.typeOfPosts, row.date, row.status, row.hashtag)} />
                                                    <DeleteIcon style={{ color: "red", cursor: "pointer" }} onClick={() => confirmDelete(row.postID)} />
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

export default ManagePosting;
