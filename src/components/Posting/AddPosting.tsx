import React, { ChangeEvent, SetStateAction, useState } from 'react';
import {
    Box,
    Button,
    IconButton,
    TextField,
    Grid,
    Typography,
    MenuItem
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import Swal from 'sweetalert2';

interface AddFormProps {
    closeCard: () => void;
}

const AddCollection: React.FC<AddFormProps> = ({ closeCard }) => {
    const [formData, setFormData] = useState({
        userID: 1,
        typeOfPosts: "POSTS",
        status: "INACTIVE",
        date: "2024-02-19",
        content: "",
        image: [""],
        hashtag: ["#SPRING", "#2024"] as string[]
    });

    const handleTextFieldChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        if (name) {
            setFormData(prevFormData => ({
                ...prevFormData,
                [name]: value,
            }));
        }
    };

    const handleHashtagChanges = (e: React.ChangeEvent<HTMLInputElement>) => {
        const hashtagsArray = e.target.value.split(',').map(tag => tag.trim());
        console.log('Hashtags Array:', hashtagsArray);
        setFormData(prevFormData => ({
            ...prevFormData,
            hashtag: hashtagsArray
        }));
    }


    const handleSubmit = async () => {
        try {
            console.log('Form Data:', JSON.stringify(formData));
            const userID = localStorage.getItem('userID');

            const response = await fetch('http://localhost:6969/api/v1/post/create-post', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ ...formData, userID }),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const responseData = await response.json();

            console.log('Response:', responseData);

            if (responseData) {
                sessionStorage.setItem('obj', JSON.stringify(formData));
                Swal.fire(
                    'Add Success!',
                    'Your post has been updated!',
                    'success'
                );
                // setTimeout(() => {
                //     window.location.reload();
                // }, 2000);
            } else {
                Swal.fire(
                    'Add fail!',
                    'Please check information!',
                    'error'
                );
            }
        } catch (err: any) {
            console.error('Error:', err);
            Swal.fire(
                'Add fail!',
                `${err.message || 'Unknown error'}`,
                'error'
            );
        }
    };

    return (
        <div className='add-from-bird-list' style={{ height: '500px', overflowY: 'auto' }}>
            <div>
                <Typography variant="h5" align="center">
                    Add
                </Typography>
                <IconButton style={{ position: 'absolute', top: 0, right: 0 }} onClick={closeCard}>
                    <CloseIcon />
                </IconButton>
                <Box height={50} />
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <TextField
                            id="outline-basic"
                            label="typeOfPosts"
                            variant="outlined"
                            size="small"
                            sx={{ minWidth: '100%' }}
                            name="typeOfPosts"
                            value={formData.typeOfPosts}
                            onChange={handleTextFieldChange}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            id="outline-basic"
                            label="Hashtags"
                            multiline
                            variant="outlined"
                            size="small"
                            sx={{ minWidth: "100%" }}
                            value={formData.hashtag.join(', ')}
                            onChange={handleHashtagChanges}
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <TextField
                            id="outline-basic"
                            label="date"
                            variant="outlined"
                            size="small"
                            sx={{ minWidth: '100%' }}
                            name="date"
                            value={formData.date}
                            onChange={handleTextFieldChange}
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <TextField
                            id="outline-basic"
                            label="Status"
                            select
                            variant="outlined"
                            size="small"
                            sx={{ minWidth: "100%" }}
                            value={formData.status}
                            onChange={handleTextFieldChange}
                            name='status'
                        >
                            <MenuItem value="ACTIVE">ACTIVE</MenuItem>
                            <MenuItem value="INACTIVE">INACTIVE</MenuItem>
                            <MenuItem value="PUBLIC">PUBLIC</MenuItem>
                        </TextField>
                    </Grid>
                </Grid>
                <div
                    onClick={closeCard}
                    style={{ textAlign: 'center', alignItems: 'center', marginTop: '3rem' }}
                >
                    <Button onClick={handleSubmit} style={{ color: '#C77E23' }}>
                        Submit
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default AddCollection;
