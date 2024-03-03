import React, { ChangeEvent, useState, useRef } from 'react';
import {
    Box,
    Button,
    IconButton,
    TextField,
    Grid,
    Typography
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import Swal from 'sweetalert2';

interface AddFormProps {
    closeCard: () => void;
}

const AddUserAppInstalled: React.FC<AddFormProps> = ({ closeCard }) => {
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [formData, setFormData] = useState({
        dateOfBirth: "2002-01-18",
        email: "test4@gmail.com",
        gender: "true",
        imgUrl: "https://firebasestorage.googleapis.com/v0/b/whear-app-1f70d.appspot.com/o/Stuff%2Flogo.png?alt=media&token=1e7dd6fd-2841-4079-b208-6487b3934a02https://firebasestorage.googleapis.com/v0/b/whear-app-1f70d.appspot.com/o/Stuff%2Flogo.png?alt=media&token=1e7dd6fd-2841-4079-b208-6487b3934a02",
        language: "ENGLISH",
        password: "Aa@123456",
        phone: "0987242343",
        username: "test4"
    });

    // const [files, setFiles] = useState<string[]>([]);

    // const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    //     const selectedFiles = e.target.files;

    //     if (selectedFiles && selectedFiles.length > 0) {
    //         const imageUrls = await uploadToCloudinary(selectedFiles);
    //         setFiles((prevFiles) => [...prevFiles, ...imageUrls]);
    //         setFormData((prevFormData) => ({
    //             ...prevFormData,
    //             imgUrl: [...prevFormData.imgUrl, ...imageUrls],
    //         }));
    //     } else {
    //         setFiles([]);
    //     }
    // };

    // const uploadToCloudinary = async (files: FileList): Promise<string[]> => {
    //     try {
    //         const cloud_name = "dby2saqmn";
    //         const preset_key = "whear-app";
    //         const folder_name = "test";
    //         const formData = new FormData();
    //         formData.append("upload_preset", preset_key);
    //         formData.append("folder", folder_name);

    //         const uploadedUrls: string[] = [];

    //         for (const file of Array.from(files)) {
    //             formData.append("file", file);

    //             const response = await fetch(`https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`, {
    //                 method: "POST",
    //                 body: formData,
    //             });

    //             const responseData = await response.json();

    //             if (responseData.secure_url) {
    //                 const imageUrl = responseData.secure_url;
    //                 console.log(imageUrl);
    //                 uploadedUrls.push(imageUrl);
    //             } else {
    //                 console.error("Error uploading image to Cloudinary. Response:", responseData);
    //             }
    //         }

    //         return uploadedUrls;
    //     } catch (error) {
    //         console.error("Error uploading images to Cloudinary:", error);
    //         return [];
    //     }
    // };

    const handleFormChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: value,
        }));
    };


    const handleSubmit = async () => {
        try {
            console.log('Form Data:', JSON.stringify(formData));

            const response = await fetch('http://localhost:6969/api/v1/auth/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const responseData = await response.json();

            console.log('Response:', responseData);

            if (responseData) {
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
                            label="email"
                            variant="outlined"
                            size="small"
                            sx={{ minWidth: '100%' }}
                            name="email"
                            value={formData.email}
                            onChange={handleFormChange}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            id="outline-basic"
                            label="dateOfBirth"
                            variant="outlined"
                            size="small"
                            sx={{ minWidth: '100%' }}
                            name="dateOfBirth"
                            value={formData.dateOfBirth}
                            onChange={handleFormChange}
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <TextField
                            id="outline-basic"
                            label="language"
                            variant="outlined"
                            size="small"
                            sx={{ minWidth: '100%' }}
                            name="language"
                            value={formData.language}
                            onChange={handleFormChange}
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <TextField
                            id="outline-basic"
                            label="password"
                            variant="outlined"
                            size="small"
                            sx={{ minWidth: '100%' }}
                            name="password"
                            value={formData.password}
                            onChange={handleFormChange}
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <TextField
                            id="outline-basic"
                            label="phone"
                            variant="outlined"
                            size="small"
                            sx={{ minWidth: '100%' }}
                            name="phone"
                            value={formData.phone}
                            onChange={handleFormChange}
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <TextField
                            id="outline-basic"
                            label="username"
                            variant="outlined"
                            size="small"
                            sx={{ minWidth: '100%' }}
                            name="username"
                            value={formData.username}
                            onChange={handleFormChange}
                        />
                    </Grid>

                    {/* <Grid item xs={12}>
                        <input type="file" multiple onChange={handleChange}
                            ref={fileInputRef} />
                        {files.map((imageUrl, index) => (
                            <img key={index} src={imageUrl} alt={`Image ${index}`} />
                        ))}
                    </Grid> */}
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

export default AddUserAppInstalled;