import React, { useEffect, useState } from "react";
import { Box, Button, Card, Grid, IconButton, TextField, Typography } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import Swal from "sweetalert2";
import "./EditBrand.css"
interface EditFormProps {
    fid: {
        customerID: number,
        description: string,
        address: string,
        link: string
    };
    editClose: () => void;
}

const EditForm: React.FC<EditFormProps> = ({ fid, editClose }) => {
    const [customerID, setCustomerID] = useState("");
    const [description, setDescription] = useState("");
    const [address, setAddress] = useState("");
    const [link, setLink] = useState("");

    useEffect(() => {
        setDescription(fid.description)
        setAddress(fid.address);
        setLink(fid.link)
    }, [fid]);

    const handleDescriptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setDescription(e.target.value);
    }

    const handleAddressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAddress(e.target.value);
    }

    const handleLinkChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLink(e.target.value);
    }

    const handleSubmit = () => {
        const customerID = fid.customerID
        const obj = { description, address, link };
        fetch(`https://host.whearapp.tech/api/v1/brand`, {
            method: 'PUT',
            headers: {
                "Accept": "*/*",
                "Content-Type": "application/json",
                "X-Requested-With": "XMLHttpRequest",
                "Cache-Control": "no-cache",
            },
            body: JSON.stringify({ ...obj, customerID }),
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
                Edit
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
                    <TextField id="outline-basic" label="DESCRIPTION" variant="outlined" size="small" sx={{ minWidth: "100%" }} value={description} onChange={handleDescriptionChange} />
                </Grid>
                <Grid item xs={11}>
                    <TextField id="outline-basic" label="ADDRESS" variant="outlined" size="small" sx={{ minWidth: "100%" }} value={address} onChange={handleAddressChange} />
                </Grid>
                <Grid item xs={11}>
                    <TextField id="outline-basic" label="LINK" variant="outlined" size="small" sx={{ minWidth: "100%" }} value={link} onChange={handleLinkChange} />
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