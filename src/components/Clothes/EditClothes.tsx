import React, { useEffect, useState } from "react";
import { Box, Button, Card, Grid, IconButton, TextField, Typography } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import Swal from "sweetalert2";
import "./EditClothes.css"
interface EditFormProps {
    fid: {
        clothesID: number,
        nameOfProduct: string,
        typeOfClothes: string,
        shape: string,
        clothesSeasons: string,
        description: string,
        rating: number,
        materials: string,
        clothesSizes: string,
        clothesColors: string,
        clothesImages: string
    };
    editClose: () => void;
}

const EditForm: React.FC<EditFormProps> = ({ fid, editClose }) => {
    const [nameOfProduct, setNameOfProduct] = useState("");
    const [clothesSeasons, setClothesSeasons] = useState("");
    const [typeOfClothes, setTypeOfClothes] = useState("");
    const [shape, setShape] = useState("");
    const [description, setDescription] = useState("");
    const [rating, setRating] = useState(0);
    const [materials, setMaterials] = useState("");
    const [clothesSizes, setClothesSizes] = useState("");
    const [clothesColors, setClothesColors] = useState("");
    const [clothesImages, setClothesImages] = useState("");
    useEffect(() => {
        setNameOfProduct(fid.nameOfProduct);
        setClothesSeasons(fid.clothesSeasons);
        setTypeOfClothes(fid.typeOfClothes)
        setShape(fid.shape)
        setDescription(fid.description)
        setRating(fid.rating)
        setMaterials(fid.materials)
        setClothesSizes(fid.clothesSizes)
        setClothesColors(fid.clothesColors)
    }, [fid]);

    const handleNameOfProductChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNameOfProduct(e.target.value);
    }

    const handleClothesSeasonsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setClothesSeasons(e.target.value);
    }

    const handleTypeOfClothesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTypeOfClothes(e.target.value);
    }

    const handleShapeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setShape(e.target.value);
    }

    const handleDescriptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setDescription(e.target.value);
    }

    const handleRatinghange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newRating = Number(e.target.value);
        setRating(newRating);
    }

    const handleMaterialsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setMaterials(e.target.value);
    }

    const handleClothesSizesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setClothesSizes(e.target.value);
    }

    const handleClothesColorsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setClothesColors(e.target.value);
    }

    const handleClothesImagesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setClothesImages(e.target.value);
    }

    const handleSubmit = () => {
        const obj = {
            nameOfProduct,
            typeOfClothes,
            shape,
            clothesSeasons,
            description,
            rating,
            materials,
            clothesSizes,
            clothesColors,
            clothesImages
        };
        const clothesId = fid.clothesID;
        console.log(nameOfProduct,
            typeOfClothes,
            shape,
            clothesSeasons,
            description,
            rating,
            materials,
            clothesSizes,
            clothesColors,
            clothesImages, clothesId);
        const TOKEN = localStorage.getItem("accessToken")
        console.log(TOKEN);

        fetch(`https://cors-anywhere.herokuapp.com/https://whear-app.azurewebsites.net/api/v1/clothes/update-clothes`, {
            method: 'PUT',
            headers: {
                // "Accept": "*/*",
                "Content-Type": "application/json",
                // "X-Requested-With": "XMLHttpRequest",
                // "Cache-Control": "no-cache",
                "Authorization": `Bearer ${TOKEN}`
            },
            body: JSON.stringify({
                ...obj, clothesId
            }),
            mode: 'cors'
        }).then((res) => {
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
                    <TextField id="outline-basic" label="clothesSeasons" variant="outlined" size="small" sx={{ minWidth: "100%" }} value={clothesSeasons} onChange={handleClothesSeasonsChange} />
                </Grid>
                <Grid item xs={11}>
                    <TextField id="outline-basic" label="nameOfProduct" variant="outlined" size="small" sx={{ minWidth: "100%" }} value={nameOfProduct} onChange={handleNameOfProductChange} />
                </Grid>
                <Grid item xs={11}>
                    <TextField id="outline-basic" label="typeOfClothes" variant="outlined" size="small" sx={{ minWidth: "100%" }} value={typeOfClothes} onChange={handleTypeOfClothesChange} />
                </Grid>
                <Grid item xs={11}>
                    <TextField id="outline-basic" label="shape" variant="outlined" size="small" sx={{ minWidth: "100%" }} value={shape} onChange={handleShapeChange} />
                </Grid>
                <Grid item xs={11}>
                    <TextField id="outline-basic" label="description" variant="outlined" size="small" sx={{ minWidth: "100%" }} value={description} onChange={handleDescriptionChange} />
                </Grid>
                <Grid item xs={11}>
                    <TextField id="outline-basic" label="rating" variant="outlined" size="small" sx={{ minWidth: "100%" }} value={rating} onChange={handleRatinghange} />
                </Grid>
                <Grid item xs={11}>
                    <TextField id="outline-basic" label="materials" variant="outlined" size="small" sx={{ minWidth: "100%" }} value={materials} onChange={handleMaterialsChange} />
                </Grid>
                <Grid item xs={11}>
                    <TextField id="outline-basic" label="clothesSizes" variant="outlined" size="small" sx={{ minWidth: "100%" }} value={clothesSizes} onChange={handleClothesSizesChange} />
                </Grid>
                <Grid item xs={11}>
                    <TextField id="outline-basic" label="clothesColors" variant="outlined" size="small" sx={{ minWidth: "100%" }} value={clothesColors} onChange={handleClothesColorsChange} />
                </Grid>
                <Grid item xs={11}>
                    <TextField id="outline-basic" label="Language" variant="outlined" size="small" sx={{ minWidth: "100%" }} value={clothesImages} onChange={handleClothesImagesChange} />
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