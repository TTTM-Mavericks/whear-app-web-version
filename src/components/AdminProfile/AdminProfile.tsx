import React, { useEffect, useState } from 'react';
import { Button, TextField, Typography, Container, Grid, Paper, Avatar, Modal } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import EditForm from './EditAdminProfile';
import { Box } from '@mui/system';
import DeleteIcon from '@mui/icons-material/Delete';
import Swal from 'sweetalert2';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    border: '0px solid #000',
    boxShadow: 24,
    p: 4
};

interface AdminProfile {
    id: number,
    fullName: string,
    email: string,
    password: string,
    reTypePassword: string
}
const ProfileSettings: React.FC = () => {
    const [data, setData] = useState<AdminProfile[]>([]);
    const [fullname, setFullName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [reTypePassword, setReTypePassword] = useState<string>('');
    const [img, setImg] = useState<string>('')

    const [editopen, setEditOpen] = useState(false);
    const [formid, setFormId] = useState<AdminProfile | null>(null);

    const handleEditOpen = () => setEditOpen(true);
    const handleEditClose = () => setEditOpen(false);

    const deleteUser = async (id: number) => {
        try {
            const response = await fetch(`https://6538a5b6a543859d1bb1ae4a.mockapi.io/profile/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
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
                    'Deleted UserPerCountry Success!',
                    'Your UserPerCountry has been deleted!!!',
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

    useEffect(() => {
        const apiUrl = 'https://6538a5b6a543859d1bb1ae4a.mockapi.io/profile';
        fetch(apiUrl)
            .then(response => response.json())
            .then((data: AdminProfile[]) => {
                setData(data);
            })
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    const editData = (id: number, fullName: string, email: string, password: string, reTypePassword: string) => {
        const dataEmployee: AdminProfile = {
            id: id,
            fullName: fullName,
            email: email,
            password: password,
            reTypePassword: reTypePassword
        }
        setFormId(dataEmployee);
        handleEditOpen();
    }

    return (
        <Container component="main" maxWidth="xs">
            <Paper elevation={3} style={{ padding: 20, marginTop: 20 }}>
                {/* <EditIcon style={{ color: "blue", cursor: "pointer" }} onClick={() => editData(fullname, email, password, reTypePassword)} /> */}
                <Typography variant="h5" style={{ marginBottom: "10%" }}>Profile Details</Typography>
                <div style={{ display: "flex" }}>
                    <Avatar alt="User Avatar" src={img} style={{ width: 100, height: 100, marginBottom: '10%', alignSelf: 'center', marginRight: "10px" }} />
                    <div style={{ padding: '20px', borderLeft: '3px solid #FA9E93' }}>
                        {data &&
                            data.map((row) => {
                                return (
                                    <div>
                                        <p>{row.fullName}</p>
                                    </div>
                                )
                            })}
                        {data &&
                            data.map((row) => {
                                return (
                                    <div>
                                        <p>{row.email}</p>
                                    </div>
                                )
                            })}
                    </div>

                </div>
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
                {data && data.map((row) => {
                    return (
                        <div onClick={() => editData(row.id, row.fullName, row.email, row.password, row.reTypePassword)} style={{ display: "flex" }}>
                            <EditIcon style={{ color: "blue", cursor: "pointer" }} ></EditIcon><p>Edit Detail</p>
                            {/* <DeleteIcon style={{ color: "red", cursor: "pointer" }} onClick={() => confirmDelete(row.id)} /> */}
                        </div>
                    )
                })}
            </Paper>
        </Container>
    );
};

export default ProfileSettings;
