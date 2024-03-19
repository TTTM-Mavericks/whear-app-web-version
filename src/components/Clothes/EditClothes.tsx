import React, { useEffect, useRef, useState } from "react";
import { Box, Button, Grid, IconButton, MenuItem, TextField, Typography } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import Swal from "sweetalert2";
import "./EditClothes.css"
import Multiselect from 'multiselect-react-dropdown';

interface EditFormProps {
    fid: {
        clothesID: number,
        nameOfProduct: string,
        typeOfClothes: string,
        shape: string,
        clothesSeasons: string[],
        description: string,
        rating: number,
        materials: string,
        clothesSizes: string[],
        clothesColors: string[],
        clothesImages: string[],
        clothesGender: string[]
    };
    editClose: () => void;
}

const clothesSizesData = [
    { Sizes: "S" },
    { Sizes: "M" },
    { Sizes: "L" },
    { Sizes: "XL" },
    { Sizes: "XXL" },
    { Sizes: "XXXL" },
]

const clothesSeasonData = [
    { Seasons: "SPRING" },
    { Seasons: "AUTUMN" },
    { Seasons: "SUMMER" },
    { Seasons: "WINTER" }
]

const clothesColorsData = [
    { Colors: "RED" },
    { Colors: "WHITE" },
    { Colors: "GRAY" },
    { Colors: "YELLOW" },
    { Colors: "BLUE" },
    { Colors: "BLACK" },
    { Colors: "BROWN" }
]

const clothesGenderData = [
    { Genders: "MALE" },
    { Genders: "FEMALE" },
    { Genders: "UNISEX" },
]

const EditForm: React.FC<EditFormProps> = ({ fid, editClose }) => {

    const [nameOfProduct, setNameOfProduct] = useState("Aos thun T-SHIRT");
    const [typeOfClothes, setTypeOfClothes] = useState("SHIRT");
    const [shape, setShape] = useState("SQUARE");
    const [description, setDescription] = useState("IT SO BEAUTIFUL");
    const [rating, setRating] = useState(0);
    const [materials, setMaterials] = useState("COTTON");
    const [clothesImages, setClothesImages] = useState<string[]>([]);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const initialClothesSize = clothesSizesData.map(sizes => sizes.Sizes);
    const [clothesSizes, setClothesSizes] = useState<string[]>(initialClothesSize);

    const initalClothesColors = clothesColorsData.map(color => color.Colors);
    const [clothesColors, setClothesColors] = useState<string[]>(initalClothesColors);

    const initialClothesSeasons = clothesSeasonData.map(season => season.Seasons);
    const [clothesSeasons, setClothesSeasons] = useState<string[]>(initialClothesSeasons);

    const initialClothesGender = clothesGenderData.map(gender => gender.Genders);
    const [clothesGender, setClothesGender] = useState<string[]>(initialClothesGender);

    console.log(nameOfProduct);
    console.log(typeOfClothes);
    console.log(shape);
    console.log(description);
    console.log(rating);
    console.log(materials);
    console.log(clothesSizes);
    console.log(clothesColors);
    console.log(clothesSeasons);
    console.log(clothesGender);

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
        setClothesImages(fid.clothesImages)
    }, [fid]);

    const handleNameOfProductChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNameOfProduct(e.target.value);
    }

    const handleClothesSeasonsChange = (selectedSeasons: { Seasons: string }[]) => {
        const selectedValues = selectedSeasons.map(season => season.Seasons);
        setClothesSeasons(selectedValues);
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

    const handleClothesSizesChange = (selectedSizes: { Sizes: string }[]) => {
        const selectedValues = selectedSizes.map(size => size.Sizes);
        setClothesSizes(selectedValues);
    }

    const handleClothesColorsChange = (selectedColors: { Colors: string }[]) => {
        const selectedValues = selectedColors.map(color => color.Colors);
        setClothesColors(selectedValues);
    }

    const handleClothesGenderChange = (selectedGenders: { Genders: string }[]) => {
        const selectedValues = selectedGenders.map(color => color.Genders);
        setClothesGender(selectedValues);
    }

    const handleClothesImagesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setClothesImages([e.target.value]);
    }

    const [files, setFiles] = useState<string[]>([]);

    const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFiles = e.target.files;

        if (selectedFiles && selectedFiles.length > 0) {
            const imageUrls = await uploadToCloudinary(selectedFiles);
            setFiles((prevFiles) => [...prevFiles, ...imageUrls]);
            // setFormData((prevFormData) => ({
            //     ...prevFormData,
            //     imgUrl: [...prevFormData.imgUrl, ...imageUrls],
            // }));
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

    const handleSubmit = () => {
        const obj = {
            nameOfProduct: nameOfProduct,
            typeOfClothes: typeOfClothes,
            shape: shape,
            clothesSeasons: clothesSeasons,
            description: description,
            rating: rating,
            materials: materials,
            clothesSizes: clothesSizes,
            clothesColors: clothesColors,
            clothesImages: clothesImages,
            clothesGender: clothesGender
        };
        const clothesID = fid.clothesID;
        console.log('Update Request:', { ...obj, clothesID });
        fetch('https://host.whearapp.tech/api/v1/clothes/update-clothes', {
            method: 'PUT',
            headers: {
                "Accept": "*/*",
                "Content-Type": "application/json",
                "X-Requested-With": "XMLHttpRequest",
                "Cache-Control": "no-cache",
            },
            body: JSON.stringify({
                ...obj, clothesID
            })
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
                Swal.fire(
                    'Edit Clothes Success!',
                    'Clothes information have been updated successfully!',
                    'success'
                );
                setTimeout(() => {
                    window.location.reload();
                }, 1000);
            })
            .catch((err) => {
                console.error('Update Error:', err);
                Swal.fire(
                    'Edit Clothes Failed',
                    'There was an error updating the clothes.',
                    'error'
                );
            });
    }
    return (
        <div className='add-from-bird-list' style={{ height: '500px', overflowY: 'auto' }}>
            <div>
                <Typography variant="h5" align="left">
                    Edit Clothes
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
                        <Multiselect options={clothesSeasonData} displayValue="Seasons" onSelect={handleClothesSeasonsChange} />
                    </Grid>
                    <Grid item xs={11}>
                        <TextField id="outline-basic" label="nameOfProduct" variant="outlined" size="small" sx={{ minWidth: "100%" }} value={nameOfProduct} onChange={handleNameOfProductChange} />
                    </Grid>
                    <Grid item xs={11}>
                        <TextField
                            id="outline-basic"
                            label="typeofclothes"
                            select
                            variant="outlined"
                            size="small"
                            sx={{ minWidth: "100%" }}
                            value={typeOfClothes}
                            onChange={handleTypeOfClothesChange}
                        >
                            <MenuItem value="SHIRT">SHIRT</MenuItem>
                            <MenuItem value="PANTS">PANTS</MenuItem>
                            <MenuItem value="DRESS">DRESS</MenuItem>
                            <MenuItem value="SKIRT">SKIRT</MenuItem>
                            <MenuItem value="SKIRTS">SKIRTS</MenuItem>
                            <MenuItem value="JACKET">JACKET</MenuItem>
                            <MenuItem value="COAT">COAT</MenuItem>
                            <MenuItem value="SHORTS">SHORTS</MenuItem>
                            <MenuItem value="SWEATER">SWEATER</MenuItem>
                            <MenuItem value="HOODIE">HOODIE</MenuItem>
                            <MenuItem value="T_SHIRT">T_SHIRT</MenuItem>
                            <MenuItem value="BLAZER">BLAZER</MenuItem>
                            <MenuItem value="JEANS">JEANS</MenuItem>
                            <MenuItem value="TANK_TOP">TANK_TOP</MenuItem>
                            <MenuItem value="SUIT">SUIT</MenuItem>
                            <MenuItem value="POLO_SHIRT">POLO_SHIRT</MenuItem>
                            <MenuItem value="FORMAL_WEAR">FORMAL_WEAR</MenuItem>
                            <MenuItem value="ATHLETIC_WEAR">ATHLETIC_WEAR</MenuItem>
                            <MenuItem value="BOMBER">BOMBER</MenuItem>
                            <MenuItem value="CROP_TOP">CROP_TOP</MenuItem>
                            <MenuItem value="BLOUSE">BLOUSE</MenuItem>
                            <MenuItem value="BABY_TEE">BABY_TEE</MenuItem>
                            <MenuItem value="OVERSIZE_TEE">OVERSIZE_TEE</MenuItem>
                            <MenuItem value="SPORTS_BRA">SPORTS_BRA</MenuItem>
                            <MenuItem value="JACKET_ZIP">JACKET_ZIP</MenuItem>
                            <MenuItem value="BRETON_STRIPED">BRETON_STRIPED</MenuItem>
                            <MenuItem value="TRENCH_COAT">TRENCH_COAT</MenuItem>
                            <MenuItem value="LONG_SLEEVE">LONG_SLEEVE</MenuItem>
                            <MenuItem value="HOOKED_CLOAK_JACKET">HOOKED_CLOAK_JACKET</MenuItem>
                            <MenuItem value="OXFORD_SHIRT">OXFORD_SHIRT</MenuItem>
                            <MenuItem value="GILE">GILE</MenuItem>
                            <MenuItem value="HOODED_CARDIGAN">HOODED_CARDIGAN</MenuItem>
                            <MenuItem value="CARDIGAN">CARDIGAN</MenuItem>
                            <MenuItem value="FLOWY_BOHO_DRESS">FLOWY_BOHO_DRESS</MenuItem>
                            <MenuItem value="GTIE_DYE_SHIRTSILE">TIE_DYE_SHIRTS</MenuItem>
                            <MenuItem value="LONG_MAXI_DRESS">LONG_MAXI_DRESS</MenuItem>
                            <MenuItem value="FLOWY">FLOWY</MenuItem>
                            <MenuItem value="LATE_SHOULDER_SHIRT">LATE_SHOULDER_SHIRT</MenuItem>
                            <MenuItem value="HOUSE_DRESS">HOUSE_DRESS</MenuItem>
                            <MenuItem value="ZIP_HOODIE">ZIP_HOODIE</MenuItem>
                            <MenuItem value="LONG_SLEEVE_MEST_TOP">LONG_SLEEVE_MEST_TOP</MenuItem>
                            <MenuItem value="BAGGY">BAGGY</MenuItem>
                            <MenuItem value="PANT_SUIT">PANT_SUIT</MenuItem>
                            <MenuItem value="WIDE_LEG_PANT">WIDE_LEG_PANT</MenuItem>
                            <MenuItem value="CARGO_PANT">CARGO_PANT</MenuItem>
                            <MenuItem value="WIDE_LEG_PANT">WIDE_LEG_PANT</MenuItem>
                            <MenuItem value="SKINNY">SKINNY</MenuItem>
                            <MenuItem value="JOGGER">JOGGER</MenuItem>
                            <MenuItem value="PENCIL_SKIRT">PENCIL_SKIRT</MenuItem>
                            <MenuItem value="FLARED_PANTS">FLARED_PANTS</MenuItem>
                            <MenuItem value="BAGGY_JEAN">BAGGY_JEAN</MenuItem>
                            <MenuItem value="HIGH_WAISTED_SHORTS">HIGH_WAISTED_SHORTS</MenuItem>
                            <MenuItem value="LEGGING">LEGGING</MenuItem>
                            <MenuItem value="CHINOS">CHINOS</MenuItem>
                            <MenuItem value="LOOSE_SKIRTS">LOOSE_SKIRTS</MenuItem>
                            <MenuItem value="BLACK_CARGO_PANT">BLACK_CARGO_PANT</MenuItem>
                            <MenuItem value="SNEAKER">SNEAKER</MenuItem>
                            <MenuItem value="DERBY">DERBY</MenuItem>
                            <MenuItem value="CHELSEA_BOOTS">CHELSEA_BOOTS</MenuItem>
                            <MenuItem value="LOAFERS">LOAFERS</MenuItem>
                            <MenuItem value="PUMPS">PUMPS</MenuItem>
                            <MenuItem value="THIGH_HIGH_BOOTS">THIGH_HIGH_BOOTS</MenuItem>
                            <MenuItem value="KNEE_HIGH_BOOTS">KNEE_HIGH_BOOTS</MenuItem>
                            <MenuItem value="WELLINGTON_BOOTS">WELLINGTON_BOOTS</MenuItem>
                            <MenuItem value="DR_MARTENS">DR_MARTENS</MenuItem>
                            <MenuItem value="WELLINGTON_BOOTS">WELLINGTON_BOOTS</MenuItem>
                            <MenuItem value="OXFORD">OXFORD</MenuItem>
                            <MenuItem value="BOOTS">BOOTS</MenuItem>
                            <MenuItem value="SANDALS">SANDALS</MenuItem>
                            <MenuItem value="RUNNING_SHOES">RUNNING_SHOES</MenuItem>
                            <MenuItem value="HIGH_TOP_SNEAKER">HIGH_TOP_SNEAKER</MenuItem>
                            <MenuItem value="BALLERINA_FLATS">BALLERINA_FLATS</MenuItem>
                            <MenuItem value="HEEL">HEEL</MenuItem>
                            <MenuItem value="SLIP_ON">SLIP_ON</MenuItem>
                            <MenuItem value="PLATFORM_WEDGES">PLATFORM_WEDGES</MenuItem>
                            <MenuItem value="BRACELET">BRACELET</MenuItem>
                            <MenuItem value="TIE">TIE</MenuItem>
                            <MenuItem value="NECKLACE">NECKLACE</MenuItem>
                            <MenuItem value="EARRINGS">EARRINGS</MenuItem>
                            <MenuItem value="SUNGLASSES">SUNGLASSES</MenuItem>
                            <MenuItem value="HANDBAG">HANDBAG</MenuItem>
                            <MenuItem value="WATCH">WATCH</MenuItem>
                            <MenuItem value="CAP">CAP</MenuItem>
                            <MenuItem value="BEANIE">BEANIE</MenuItem>
                            <MenuItem value="SNAPBACK">SNAPBACK</MenuItem>
                            <MenuItem value="GLOVES">GLOVES</MenuItem>
                            <MenuItem value="BEANIE">BEANIE</MenuItem>
                            <MenuItem value="SCARF">SCARF</MenuItem>
                            <MenuItem value="BERET">BERET</MenuItem>
                            <MenuItem value="SHOULDER_BAG">SHOULDER_BAG</MenuItem>
                            <MenuItem value="BELT">BELT</MenuItem>
                            <MenuItem value="WOVEN_BELT">WOVEN_BELT</MenuItem>
                            <MenuItem value="COIN_BELT">COIN_BELT</MenuItem>
                            <MenuItem value="STACKABLE_BRACELETS">STACKABLE_BRACELETS</MenuItem>
                            <MenuItem value="BOHO_HEADBAND">BOHO_HEADBAND</MenuItem>
                            <MenuItem value="BEADED_JEWELRY">BEADED_JEWELRY</MenuItem>
                            <MenuItem value="BERET_HAT">BERET_HAT</MenuItem>
                        </TextField>
                    </Grid>
                    <Grid item xs={11}>
                        <TextField
                            id="outline-basic"
                            label="shape"
                            select
                            variant="outlined"
                            size="small"
                            sx={{ minWidth: "100%" }}
                            value={shape}
                            onChange={handleShapeChange}
                        >
                            <MenuItem value="CIRCLE">CIRCLE</MenuItem>
                            <MenuItem value="SQUARE">SQUARE</MenuItem>
                            <MenuItem value="TRIANGLE">TRIANGLE</MenuItem>
                            <MenuItem value="RECTANGLE">RECTANGLE</MenuItem>
                            <MenuItem value="PENTAGON">PENTAGON</MenuItem>
                            <MenuItem value="HEXAGON">HEXAGON</MenuItem>
                            <MenuItem value="OCTAGON">OCTAGON</MenuItem>
                        </TextField>
                    </Grid>
                    <Grid item xs={11}>
                        <TextField id="outline-basic" label="description" variant="outlined" size="small" sx={{ minWidth: "100%" }} value={description} onChange={handleDescriptionChange} />
                    </Grid>
                    <Grid item xs={11}>
                        <TextField id="outline-basic" label="rating" variant="outlined" size="small" sx={{ minWidth: "100%" }} value={rating} onChange={handleRatinghange} />
                    </Grid>
                    <Grid item xs={11}>
                        <TextField
                            id="outline-basic"
                            label="materials"
                            select
                            variant="outlined"
                            size="small"
                            sx={{ minWidth: "100%" }}
                            value={materials}
                            onChange={handleMaterialsChange}
                        >
                            <MenuItem value="COTTON">COTTON</MenuItem>
                            <MenuItem value="POLYESTER">POLYESTER</MenuItem>
                            <MenuItem value="FLEECE">FLEECE</MenuItem>
                            <MenuItem value="WOOL">WOOL</MenuItem>
                            <MenuItem value="SILK">SILK</MenuItem>
                            <MenuItem value="LINEN">LINEN</MenuItem>
                            <MenuItem value="NYLON">NYLON</MenuItem>
                            <MenuItem value="LEATHER">LEATHER</MenuItem>
                            <MenuItem value="SPANDEX">SPANDEX</MenuItem>
                            <MenuItem value="RAYON">RAYON</MenuItem>
                            <MenuItem value="VELVET">VELVET</MenuItem>
                            <MenuItem value="CHIFFON">CHIFFON</MenuItem>
                            <MenuItem value="SATIN">SATIN</MenuItem>
                            <MenuItem value="KNIT">KNIT</MenuItem>
                            <MenuItem value="JERSEY">JERSEY</MenuItem>
                            <MenuItem value="TERRY_CLOTH">TERRY_CLOTH</MenuItem>
                            <MenuItem value="FLANEL">FLANEL</MenuItem>
                            <MenuItem value="LACE">LACE</MenuItem>
                            <MenuItem value="TWILL">TWILL</MenuItem>

                        </TextField>
                    </Grid>
                    <Grid item xs={11}>
                        <Multiselect options={clothesSizesData} displayValue="Sizes" onSelect={handleClothesSizesChange} />
                    </Grid>
                    <Grid item xs={11}>
                        <Multiselect options={clothesColorsData} displayValue="Colors" onSelect={handleClothesColorsChange} />
                    </Grid>
                    <Grid item xs={11}>
                        <Multiselect options={clothesGenderData} displayValue="Genders" onSelect={handleClothesGenderChange} />
                    </Grid>
                    <Grid item xs={12}>
                        <input type="file" multiple onChange={handleChange}
                            ref={fileInputRef} />
                        {files.map((imageUrl, index) => (
                            <img key={index} src={imageUrl} alt={`Image ${index}`} />
                        ))}
                    </Grid>
                </Grid>
                <div onClick={editClose} style={{ textAlign: "center", alignItems: "center", marginTop: "3rem" }}>
                    <Button onClick={handleSubmit} style={{ backgroundColor: "#5858FA", width: "60%", borderRadius: "8px", marginLeft: "-10%", marginRight: "10%", color: "#FFFFFF" }}>Update</Button>
                    <Button style={{ borderRadius: "8px", border: "1px solid black", color: "black" }}>Cancel</Button>
                </div>
            </div>
        </div>
    );
}

export default EditForm;