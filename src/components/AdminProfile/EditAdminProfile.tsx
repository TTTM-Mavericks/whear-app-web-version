import React, { useState } from 'react';
import { Button, TextField, Typography, Container, Grid, Paper } from '@mui/material';
import Swal from 'sweetalert2';
import CloseIcon from '@mui/icons-material/Close';

interface EditFormProps {
    fid: {
        id: number,
        fullName: string,
        email: string,
        password: string,
        reTypePassword: string
    };
    editClose: () => void;
}

const EditAdminProfile: React.FC<EditFormProps> = ({ fid, editClose }) => {
    const [fullName, setFullName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [reTypePassword, setReTypePassword] = useState<string>('');

    // Validate Input
    // const validateChecking = () => {

    //     let result = true;
    //     if (firstName === '' || firstName === null) {
    //         result = false;
    //         toast.error('Please Enter Username');
    //     }
    //     if (lastName === '' || lastName === null) {
    //         result = false;
    //         toast.error('Please Enter Password');
    //     }
    //     if (email === '' || email === null) {
    //         result = false;
    //         toast.error('Please Enter Email Address');
    //     }
    //     if (phone === '' || phone === null) {
    //         result = false;
    //         toast.error('Please Enter Phone Number');
    //     } else
    //         return result;
    // }

    const handleSubmit = () => {
        const obj = { fullName, email, password, reTypePassword };
        fetch(`https://6538a5b6a543859d1bb1ae4a.mockapi.io/profile/${fid.id}`, {
            method: 'PUT',
            headers: {
                "Access-Control-Allow-Origin": 'http://localhost:3000/employee',
                "Accept": "*/*",
                "Content-Type": "application/json",
                "X-Requested-With": "XMLHttpRequest",
                "Cache-Control": "no-cache",
            },
            body: JSON.stringify(obj),
            mode: 'cors'
        }).then((res) => {
            sessionStorage.setItem("obj", JSON.stringify(obj));
            Swal.fire(
                'Edit Success!',
                'updating!!!',
                'success'
            );
            setTimeout(() => {
                window.location.reload();
            }, 1000);
        }).catch((err) => {
            console.log(err);
        });
    };

    return (
        <Container component="main" maxWidth="xs">
            <Paper elevation={3} style={{ padding: 20, marginTop: 20 }}>
                <Typography variant="h5" style={{ marginBottom: "10%" }}>Edit Details</Typography>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <TextField
                            label="Fullname"
                            variant="outlined"
                            fullWidth
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            label="Email"
                            variant="outlined"
                            fullWidth
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            label="Password"
                            variant="outlined"
                            fullWidth
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            label="Retype Password"
                            variant="outlined"
                            fullWidth
                            type="password"
                            value={reTypePassword}
                            onChange={(e) => setReTypePassword(e.target.value)}
                        />
                    </Grid>
                </Grid>
                <div onClick={editClose} style={{ textAlign: "center", alignItems: "center", marginTop: "3rem" }}>
                    <Button onClick={handleSubmit} type="submit" variant="contained" color="primary" style={{ marginTop: 20, marginRight: "2%", width: "73%" }}>
                        Update
                    </Button>
                    <Button type="submit" variant="contained" color="secondary" style={{ marginTop: 20 }}>
                        Cancel
                    </Button>
                </div>
            </Paper>
        </Container>
    );
};

export default EditAdminProfile;
