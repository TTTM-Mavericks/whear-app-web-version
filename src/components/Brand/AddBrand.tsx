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
        description: "description 5",
        address: "address 5",
        link: "link 5"
    });

    // const [files, setFiles] = useState<string[]>([]);

    // const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    //     const selectedFiles = e.target.files;

    //     if (selectedFiles && selectedFiles.length > 0) {
    //         const imageUrls = await uploadToCloudinary(selectedFiles);
    //         setFiles((prevFiles) => [...prevFiles, ...imageUrls]);
    //         setFormData((prevFormData) => ({
    //             ...prevFormData,
    //             images: [...prevFormData.images, ...imageUrls],
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
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async () => {
        try {
            console.log('Form Data:', JSON.stringify(formData));
            const userID = localStorage.getItem("userID")
            const response = await fetch('https://tam.mavericks-tttm.studio/api/v1/brand/create-new-brand', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ ...formData, userID }),
            });

            const responseData = await response.json();

            console.log('Response:', responseData);

            if (responseData) {
                sessionStorage.setItem('obj', JSON.stringify(formData));
                Swal.fire(
                    'Add Success!',
                    'Your has been updated!',
                    'success'
                );
                // setTimeout(() => {
                //     window.location.reload();
                // }, 3000);
            } else {
                Swal.fire(
                    'Add fail!',
                    'Please check information!',
                    'error'
                );
            }
        } catch (err) {
            console.error('Error:', err);
            Swal.fire(
                'Add fail!',
                `${err}`,
                'error'
            );
        }

        console.log('Form Data:', formData);
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
                            label="description"
                            variant="outlined"
                            size="small"
                            sx={{ minWidth: '100%' }}
                            name="description"
                            value={formData.description}
                            onChange={handleFormChange}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            id="outline-basic"
                            label="address"
                            variant="outlined"
                            size="small"
                            sx={{ minWidth: '100%' }}
                            name="address"
                            value={formData.address}
                            onChange={handleFormChange}
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <TextField
                            id="outline-basic"
                            label="link"
                            variant="outlined"
                            // type="number"
                            size="small"
                            sx={{ minWidth: '100%' }}
                            name="link"
                            // minRows={100000}
                            // maxRows={25000000}
                            value={formData.link}
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