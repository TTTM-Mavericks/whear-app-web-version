import React, { useEffect, useState } from "react";
import { Box, Button, Grid, IconButton, MenuItem, TextField, Typography } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import Swal from "sweetalert2";
import "./EditPosting.css";

interface EditFormProps {
    fid: {
        postID: number,
        typeOfPosts: string,
        hashtag: string | string[],
        date: string,
        status: string
    };
    userResponse: {
        userID: number
    }
    editClose: () => void;
}

const EditForm: React.FC<EditFormProps> = ({ fid, userResponse, editClose }) => {
    const [typeOfPosts, setTypeOfPosts] = useState("");
    const [hashtag, setHashtag] = useState<string[]>([]);
    const [date, setDate] = useState("");
    const [status, setStatus] = useState("ACTIVE");

    useEffect(() => {
        setTypeOfPosts(fid.typeOfPosts);
        setHashtag(Array.isArray(fid.hashtag) ? [...fid.hashtag] : [fid.hashtag]);
        setDate(fid.date);
        setStatus(fid.status);
    }, [fid]);


    const handleTypeOfPostsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTypeOfPosts(e.target.value);
    }

    const handleHashtagChanges = (e: React.ChangeEvent<HTMLInputElement>) => {
        const hashtagsArray = e.target.value.split(',').map(tag => tag.trim());
        setHashtag(hashtagsArray);
    }

    const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setDate(e.target.value);
    }

    const handleStatusChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setStatus(e.target.value);
    }

    const handleSubmit = () => {
        const obj = {
            typeOfPosts,
            hashtag,
            date,
            status
        };
        const postID = fid.postID;
        const userID = userResponse.userID;
        console.log('Update Request:', postID, userID, obj);

        fetch('http://localhost:6969/api/v1/post/update-post', {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                ...obj, postID, userID
            }),
            mode: 'cors'
        })
            .then((res) => {
                console.log('Response:', res);
                if (!res.ok) {
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
                Edit Posting
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
                    <TextField id="outline-basic" label="typeOfPosts" variant="outlined" size="small" sx={{ minWidth: "100%" }} value={typeOfPosts} onChange={handleTypeOfPostsChange} />
                </Grid>
                <Grid item xs={11}>
                    <TextField id="outline-basic" label="hashtag" variant="outlined" size="small" sx={{ minWidth: "100%" }} value={hashtag.join(', ')} onChange={handleHashtagChanges} />
                </Grid>
                <Grid item xs={11}>
                </Grid>
                <Grid item xs={11}>
                    <TextField id="outline-basic" label="Dob" variant="outlined" size="small" sx={{ minWidth: "100%" }} value={date} onChange={handleDateChange} />
                </Grid>
                <Grid item xs={11}>
                    <TextField
                        id="outline-basic"
                        label="Status"
                        select
                        variant="outlined"
                        size="small"
                        sx={{ minWidth: "100%" }}
                        value={status}
                        onChange={handleStatusChange}
                    >
                        <MenuItem value="ACTIVE">ACTIVE</MenuItem>
                        <MenuItem value="INACTIVE">INACTIVE</MenuItem>
                    </TextField>
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
