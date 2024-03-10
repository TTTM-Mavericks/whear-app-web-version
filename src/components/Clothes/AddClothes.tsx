import React, { ChangeEvent, useState, useRef } from 'react';
import {
    Box,
    Button,
    IconButton,
    TextField,
    Grid,
    Typography,
    TextareaAutosize,
    MenuItem
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

    const handleArrayChange = (name: string, value: string) => {
        if (['clothesSizes', 'clothesColors', 'hashtag', 'clothesSeasons'].includes(name)) {
            const arrayValue = value.split(',').map(item => item.trim());
            setFormData(prevFormData => ({
                ...prevFormData,
                [name]: arrayValue,
            }));
        }
    };

    const handleFormChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;

        if (['clothesSizes', 'clothesColors', 'hashtag', 'clothesSeasons'].includes(name)) {
            handleArrayChange(name, value);
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

            const response = await fetch('https://tam.mavericks-tttm.studio/api/v1/clothes/create-clothes', {
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
                setTimeout(() => {
                    window.location.reload();
                }, 2000);
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
                            label="typeofclothes"
                            select
                            variant="outlined"
                            size="small"
                            sx={{ minWidth: "100%" }}
                            value={formData.typeOfClothes}
                            onChange={handleFormChange}
                            name='typeOfClothes'
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

                    <Grid item xs={12}>
                        <TextField
                            id="outline-basic"
                            label="shape"
                            select
                            variant="outlined"
                            size="small"
                            sx={{ minWidth: "100%" }}
                            value={formData.shape}
                            onChange={handleFormChange}
                            name='shape'
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

                    <Grid item xs={12}>
                        <TextField
                            id="outline-basic"
                            label="clothesSeasons"
                            select
                            variant="outlined"
                            size="small"
                            sx={{ minWidth: "100%" }}
                            value={formData.clothesSeasons}
                            onChange={handleFormChange}
                            name='clothesSeasons'
                        >
                            <MenuItem value="spring">SPRING</MenuItem>
                            <MenuItem value="summer">SUMMER</MenuItem>
                            <MenuItem value="autumn">AUTUMN</MenuItem>
                            <MenuItem value="winter">WINTER</MenuItem>
                        </TextField>
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
                            select
                            variant="outlined"
                            size="small"
                            sx={{ minWidth: "100%" }}
                            value={formData.clothesSizes}
                            onChange={handleFormChange}
                            name='clothesSizes'
                        >
                            <MenuItem value="s">S</MenuItem>
                            <MenuItem value="m">M</MenuItem>
                            <MenuItem value="l">L</MenuItem>
                            <MenuItem value="xl">XL</MenuItem>
                            <MenuItem value="xxl">XXL</MenuItem>
                            <MenuItem value="xxxl">XXXL</MenuItem>
                        </TextField>
                    </Grid>

                    <Grid item xs={12}>
                        <TextField
                            id="outline-basic"
                            label="clothesColors"
                            select
                            variant="outlined"
                            size="small"
                            sx={{ minWidth: "100%" }}
                            value={formData.clothesColors}
                            onChange={handleFormChange}
                            name="clothesColors"
                        >
                            <MenuItem value="red">RED</MenuItem>
                            <MenuItem value="black">BLACK</MenuItem>
                            <MenuItem value="white">WHITE</MenuItem>
                            <MenuItem value="pink">PINK</MenuItem>
                            <MenuItem value="yellow">YELLOW</MenuItem>
                            <MenuItem value="blue">BLUE</MenuItem>
                        </TextField>
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
                            select
                            variant="outlined"
                            size="small"
                            sx={{ minWidth: "100%" }}
                            value={formData.materials}
                            onChange={handleFormChange}
                            name='materials'
                        >
                            <MenuItem value="cotton">COTTON</MenuItem>
                            <MenuItem value="polyester">POLYESTER</MenuItem>
                            <MenuItem value="fleece">FLEECE</MenuItem>
                            <MenuItem value="wool">WOOL</MenuItem>
                            <MenuItem value="silk">SILK</MenuItem>
                            <MenuItem value="linen">LINEN</MenuItem>
                            <MenuItem value="nylon">NYLON</MenuItem>
                            <MenuItem value="leather">LEATHER</MenuItem>
                            <MenuItem value="spander">SPANDEX</MenuItem>
                            <MenuItem value="rayon">RAYON</MenuItem>
                            <MenuItem value="velvet">VELVET</MenuItem>
                            <MenuItem value="chiffon">CHIFFON</MenuItem>
                            <MenuItem value="satin">SATIN</MenuItem>
                            <MenuItem value="knit">KNIT</MenuItem>
                            <MenuItem value="jersey">JERSEY</MenuItem>
                            <MenuItem value="terry_cloth">TERRY_CLOTH</MenuItem>
                            <MenuItem value="flanel">FLANEL</MenuItem>
                            <MenuItem value="lace">LACE</MenuItem>
                            <MenuItem value="twill">TWILL</MenuItem>
                        </TextField>
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
