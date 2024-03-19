import React, { useEffect, useState } from "react";
import { Box, Button, Grid, IconButton, TextField, Typography } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import Swal from "sweetalert2";
import "./EditUser.css";

interface EditFormProps {
    fid: {
        userID: number,
        username: string,
        dateOfBirth: string,
        phone: string,
        email: string,
        gender: boolean,
        role: string,
        language: string,
        status: string,
        imgUrl: string,
        createDate: string,
    };
    editClose: () => void;
}

const EditForm: React.FC<EditFormProps> = ({ fid, editClose }) => {
    const [email, setEmail] = useState("");
    const [phone, setPhoneNumber] = useState("");
    const [dateOfBirth, setDate] = useState("");
    const [language, setLanguage] = useState("");
    const [username, setUserName] = useState("");
    // const [password, setPassword] = useState("");
    const [imgUrl, setImgUrl] = useState("");
    const [role, setRole] = useState("")

    useEffect(() => {
        setEmail(fid.email);
        setPhoneNumber(fid.phone);
        setDate(fid.dateOfBirth);
        setLanguage(fid.language);
        setUserName(fid.username)
        setImgUrl(fid.imgUrl);
        setRole(fid.role)
    }, [fid]);

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    }

    const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPhoneNumber(e.target.value);
    }

    const handleDOBChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setDate(e.target.value);
    }

    const handleLanguageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLanguage(e.target.value);
    }

    const handleUserNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserName(e.target.value);
    }

    const handleRoleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setRole(e.target.value);
    }

    // const handleImgUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     setImgUrl(e.target.value);
    // }

    const handleSubmit = () => {
        const obj = {
            email: email.trim() || null,
            phone: phone.trim() || null,
            dateOfBirth: dateOfBirth.trim() || null,
            language: language.trim() || null,
            username: username.trim() || null,
            role: role.trim() || null,
        };
        const userID = fid.userID;
        console.log('Update Request:', userID, obj);

        fetch('https://tam.mavericks-tttm.studio/api/v1/user/update-user-by-userid', {
            method: 'PUT',
            body: JSON.stringify({
                ...obj, userID
            }),
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((res) => {
                console.log('Response:', res);
                if (!res) {
                    throw new Error('Network response was not ok');
                }
                return res.json();
            })
            .then((data) => {
                console.log('Update Response Data:', data);
                sessionStorage.setItem("obj", JSON.stringify(obj));
                Swal.fire(
                    'Edit Success!',
                    'User information updated successfully!',
                    'success'
                );
                setTimeout(() => {
                    window.location.reload();
                }, 1000);
            })
            .catch((err) => {
                console.error('Update Error:', err);
                Swal.fire(
                    'Edit Failed',
                    'There was an error updating the user.',
                    'error'
                );
            });
    }

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
                    <TextField id="outline-basic" label="Phone Number" variant="outlined" size="small" sx={{ minWidth: "100%" }} value={phone} onChange={handlePhoneChange} />
                </Grid>
                <Grid item xs={11}>
                    <TextField id="outline-basic" label="Username" variant="outlined" size="small" sx={{ minWidth: "100%" }} value={username} onChange={handleUserNameChange} />
                </Grid>
                <Grid item xs={11}>
                    <TextField id="outline-basic" label="Dob" variant="outlined" size="small" sx={{ minWidth: "100%" }} value={dateOfBirth} onChange={handleDOBChange} />
                </Grid>
                <Grid item xs={11}>
                    <TextField id="outline-basic" label="Language" variant="outlined" size="small" sx={{ minWidth: "100%" }} value={language} onChange={handleLanguageChange} />
                </Grid>
                <Grid item xs={11}>
                    <TextField id="outline-basic" label="Role" variant="outlined" size="small" sx={{ minWidth: "100%" }} value={role} InputProps={{
                        readOnly: true,
                    }} />
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
