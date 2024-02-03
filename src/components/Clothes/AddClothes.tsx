import React, { ChangeEvent, useState, useRef } from 'react';
import {
    Box,
    Button,
    IconButton,
    TextField,
    Grid,
    Typography,
    TextareaAutosize
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import Swal from 'sweetalert2';

interface AddFormProps {
    closeCard: () => void;
}

const AddUserAppInstalled: React.FC<AddFormProps> = ({ closeCard }) => {
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [formData, setFormData] = useState({
        userID: "1",
        nameOfProduct: "",
        typeOfClothes: '',

        shape: '',

        clothesSeasons: [],

        description: '',
        link: '',
        rating: 0,
        materials: '',

        clothesImages: [] as string[],

        clothesSizes: [] as string[],
        clothesColors: [] as string[],
        hashtag: [] as string[]
    });

    const [files, setFiles] = useState<string[]>([]);

    const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFiles = e.target.files;

        if (selectedFiles && selectedFiles.length > 0) {
            const imageUrls = await uploadToCloudinary(selectedFiles);

            setFiles((prevFiles) => [...prevFiles, ...imageUrls]);
            setFormData((prevFormData) => ({
                ...prevFormData,
                clothesImages: [...prevFormData.clothesImages, ...imageUrls],
            }));
        } else {
            setFiles([]);
        }
    };

    const uploadToCloudinary = async (files: FileList): Promise<string[]> => {
        try {
            const cloud_name = "dby2saqmn";
            const preset_key = "whear-app";
            const folder_name = "test";
            const formData = new FormData();
            formData.append("upload_preset", preset_key);
            formData.append("folder", folder_name);

            const uploadedUrls: string[] = [];

            for (const file of Array.from(files)) {
                formData.append("file", file);

                const response = await fetch(`https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`, {
                    method: "POST",
                    body: formData,
                });

                const responseData = await response.json();

                if (responseData.secure_url) {
                    const imageUrl = responseData.secure_url;
                    console.log(imageUrl);
                    uploadedUrls.push(imageUrl);
                } else {
                    console.error("Error uploading image to Cloudinary. Response:", responseData);
                }
            }

            return uploadedUrls;
        } catch (error) {
            console.error("Error uploading images to Cloudinary:", error);
            return [];
        }
    };

    const handleFormChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;

        if (name === 'clothesSizes' || name === 'clothesColors' || name === 'hashtag' || name == 'clothesSeasons') {
            const arrayValue = value.split(',').map(item => item.trim());
            setFormData(prevFormData => ({
                ...prevFormData,
                [name]: arrayValue,
            }));
        } else {
            setFormData(prevFormData => ({
                ...prevFormData,
                [name]: value,
            }));
        }
    };


    const handleSubmit = async () => {
        try {
            console.log('Form Data:', JSON.stringify(formData));
            const userId = 1;

            const response = await fetch('https://whear-app.azurewebsites.net/api/v1/clothes/create-clothes', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ ...formData, userId }),
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
                // }, 1000);
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
                            label="nameOfProduct"
                            variant="outlined"
                            size="small"
                            sx={{ minWidth: '100%' }}
                            name="nameOfProduct"
                            value={formData.nameOfProduct}
                            onChange={handleFormChange}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            id="outline-basic"
                            label="typeOfClothes"
                            variant="outlined"
                            size="small"
                            sx={{ minWidth: '100%' }}
                            name="typeOfClothes"
                            value={formData.typeOfClothes}
                            onChange={handleFormChange}
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <TextField
                            id="outline-basic"
                            label="shape"
                            variant="outlined"
                            size="small"
                            sx={{ minWidth: '100%' }}
                            name="shape"
                            value={formData.shape}
                            onChange={handleFormChange}
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <TextField
                            id="outline-basic"
                            label="clothesSeasons"
                            variant="outlined"
                            size="small"
                            sx={{ minWidth: '100%' }}
                            name="clothesSeasons"
                            value={formData.clothesSeasons.join(', ')}
                            onChange={handleFormChange}
                        />
                    </Grid>

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
                            label="rating"
                            variant="outlined"
                            size="small"
                            sx={{ minWidth: '100%' }}
                            type='number'
                            // minRows={0}
                            // maxRows={5}
                            name="rating"
                            value={formData.rating}
                            onChange={handleFormChange}
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <TextField
                            id="outline-basic"
                            label="clothesSizes"
                            variant="outlined"
                            size="small"
                            sx={{ minWidth: '100%' }}
                            name="clothesSizes"
                            value={[formData.clothesSizes.join(', ')]}
                            onChange={handleFormChange}
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <TextField
                            id="outline-basic"
                            label="clothesColors"
                            variant="outlined"
                            size="small"
                            sx={{ minWidth: '100%' }}
                            name="clothesColors"
                            value={[formData.clothesColors.join(', ')]}
                            onChange={handleFormChange}
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <TextField
                            id="outline-basic"
                            label="hashtag"
                            variant="outlined"
                            size="small"
                            sx={{ minWidth: '100%' }}
                            name="hashtag"
                            value={formData.hashtag.join(', ')}
                            onChange={handleFormChange}
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <TextField
                            id="outline-basic"
                            label="materials"
                            variant="outlined"
                            size="small"
                            sx={{ minWidth: '100%' }}
                            name="materials"
                            value={formData.materials}
                            onChange={handleFormChange}
                        />
                    </Grid>


                    <Grid item xs={12}>
                        <input type="file" multiple onChange={handleChange}
                            ref={fileInputRef} />
                        {files.map((imageUrl, index) => (
                            <img key={index} src={imageUrl} alt={`Image ${index}`} />
                        ))}
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

export default AddUserAppInstalled;