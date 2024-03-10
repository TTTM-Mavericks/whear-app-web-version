import React, { useEffect, useState } from "react";
import { Box, Button, Grid, IconButton, TextField, Typography } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import Swal from "sweetalert2";
import "./EditCollection.css";

interface EditFormProps {
    fid: {
        collectionID: number,
        nameOfCollection: string,
        typeOfCollection: string,
        collectionStatus: string,
        imgUrl: string
    };
    editClose: () => void;
}

const EditForm: React.FC<EditFormProps> = ({ fid, editClose }) => {
    const [nameOfCollection, setEmail] = useState("");
    const [typeOfCollection, setPhoneNumber] = useState("");
    const [collectionStatus, setLanguage] = useState("");
    const [imgUrl, setUserName] = useState("");

    useEffect(() => {
        setEmail(fid.nameOfCollection);
        setPhoneNumber(fid.typeOfCollection);
        setLanguage(fid.collectionStatus);
        setUserName(fid.imgUrl)
    }, [fid]);

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    }

    const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPhoneNumber(e.target.value);
    }

    const handleLanguageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLanguage(e.target.value);
    }

    const handleUserNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserName(e.target.value);
    }

    const handleSubmit = () => {
        const obj = {
            nameOfCollection,
            typeOfCollection,
            collectionStatus,
            imgUrl,
        };
        const collectionID = fid.collectionID;
        console.log('Update Request:', collectionID, obj);

        fetch('https://whear-app.azurewebsites.net/api/v1/collection/update-collection-by-id', {
            method: 'PUT',
            headers: {
                "Accept": "*/*",
                "Content-Type": "application/json",
                "X-Requested-With": "XMLHttpRequest",
                "Cache-Control": "no-cache",
            },
            body: JSON.stringify({
                ...obj, collectionID
            }),
            mode: 'cors'
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
                    <TextField id="outline-basic" label="Email" variant="outlined" size="small" sx={{ minWidth: "100%" }} value={nameOfCollection} onChange={handleEmailChange} />
                </Grid>
                <Grid item xs={11}>
                    <TextField id="outline-basic" label="Phone Number" variant="outlined" size="small" sx={{ minWidth: "100%" }} value={typeOfCollection} onChange={handlePhoneChange} />
                </Grid>
                <Grid item xs={11}>
                </Grid>
                <Grid item xs={11}>
                    <TextField id="outline-basic" label="Dob" variant="outlined" size="small" sx={{ minWidth: "100%" }} value={collectionStatus} onChange={handleLanguageChange} />
                </Grid>
                <Grid item xs={11}>
                    <TextField id="outline-basic" label="Language" variant="outlined" size="small" sx={{ minWidth: "100%" }} value={imgUrl} onChange={handleUserNameChange} />
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
