import React, { useEffect, useState } from "react";
import { Box, Button, Card, Grid, IconButton, TextField, Typography } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import Swal from "sweetalert2";
import "./EditUserAppInstalled.css"
interface EditFormProps {
    fid: {
        id: number,
        email: string;
        phoneNumber: string
    };
    editClose: () => void;
}

const EditForm: React.FC<EditFormProps> = ({ fid, editClose }) => {
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");

    useEffect(() => {
        setEmail(fid.email);
        setPhoneNumber(fid.phoneNumber);
    }, [fid]);

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    }

    const handleAddressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPhoneNumber(e.target.value);
    }

    const handleSubmit = () => {
        const obj = { email, phoneNumber };
        fetch(`https://6538a5b6a543859d1bb1ae4a.mockapi.io/tessting/${fid.id}`, {
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
        <Box>
            <Typography variant="h5" align="left">
                Edit User
            </Typography>
            <IconButton
                style={{ position: "absolute", top: 0, right: 0 }}
                onClick={editClose}
            >
                <CloseIcon />
            </IconButton>
            <Box height={50} />
            <Grid container spacing={4}>
                <Grid item xs={11}>
                    <TextField id="outline-basic" label="Email" variant="outlined" size="small" sx={{ minWidth: "100%" }} value={email} onChange={handleEmailChange} />
                </Grid>
                <Grid item xs={11}>
                    <TextField id="outline-basic" label="Phone Number" variant="outlined" size="small" sx={{ minWidth: "100%" }} value={phoneNumber} onChange={handleAddressChange} />
                </Grid>
                <Grid item xs={11}>
                    <TextField id="outline-basic" label="Password" variant="outlined" size="small" sx={{ minWidth: "100%" }} />
                </Grid>
            </Grid>
            <div onClick={editClose} style={{ textAlign: "center", alignItems: "center", marginTop: "3rem" }}>
                <Button onClick={handleSubmit} style={{ backgroundColor: "#5858FA", width: "60%", borderRadius: "8px", marginLeft: "-10%", marginRight: "10%", color: "#FFFFFF" }}>Update</Button>
                <Button style={{ borderRadius: "8px", border: "1px solid black", color: "black" }}>Cancel</Button>
            </div>
        </Box>
    );
}

export default EditForm;