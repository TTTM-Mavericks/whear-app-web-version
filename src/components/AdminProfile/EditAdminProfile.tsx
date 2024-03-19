// import React, { useEffect, useState } from 'react';
// import { Button, TextField, Typography, Container, Grid, Paper } from '@mui/material';
// import Swal from 'sweetalert2';
// import CloseIcon from '@mui/icons-material/Close';

// interface EditFormProps {
//     fid: {
//         id: number,
//         fullName: string,
//         email: string,
//         password: string,
//         reTypePassword: string
//     };
//     editClose: () => void;
// }

// const EditAdminProfile: React.FC<EditFormProps> = ({ fid, editClose }) => {
//     const [email, setEmail] = useState("");
//     const [phone, setPhoneNumber] = useState("");
//     const [dateOfBirth, setDate] = useState("");
//     const [language, setLanguage] = useState("");
//     const [userName, setUserName] = useState("");

//     useEffect(() => {
//         setEmail(fid.email);
//         setPhoneNumber(fid.fullName);
//         setLanguage(fid.password);
//         setUserName(fid.reTypePassword)
//     }, [fid]);

//     const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//         setEmail(e.target.value);
//     }

//     const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//         setPhoneNumber(e.target.value);
//     }

//     const handleDOBChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//         setDate(e.target.value);
//     }

//     const handleLanguageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//         setLanguage(e.target.value);
//     }

//     const handleUserNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//         setUserName(e.target.value);
//     }


//     const ID_USER = localStorage.getItem("userID");
//     // Validate Input
//     // const validateChecking = () => {

//     //     let result = true;
//     //     if (firstName === '' || firstName === null) {
//     //         result = false;
//     //         toast.error('Please Enter Username');
//     //     }
//     //     if (lastName === '' || lastName === null) {
//     //         result = false;
//     //         toast.error('Please Enter Password');
//     //     }
//     //     if (email === '' || email === null) {
//     //         result = false;
//     //         toast.error('Please Enter Email Address');
//     //     }
//     //     if (phone === '' || phone === null) {
//     //         result = false;
//     //         toast.error('Please Enter Phone Number');
//     //     } else
//     //         return result;
//     // }

//     const handleSubmit = () => {
//         const obj = {
//             email: email.trim() || null,
//             phone: phone.trim() || null,
//             dateOfBirth: dateOfBirth.trim() || null,
//             language: language.trim() || null,
//             userName: userName.trim() || null,
//         };
//         console.log('Update Request:', ID_USER, obj);
//         fetch(`https://tam.mavericks-tttm.studio/api/v1/user/update-user-by-userid`, {
//             method: 'PUT',
//             body: JSON.stringify({
//                 ...obj, ID_USER
//             }),
//             mode: 'cors',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//         }).then((res) => {
//             console.log('Response:', res);
//             if (!res) {
//                 throw new Error('Network response was not ok');
//             }
//             return res.json();
//         })
//             .then((data) => {
//                 console.log('Update Response Data:', data);
//                 sessionStorage.setItem("obj", JSON.stringify(obj));
//                 Swal.fire(
//                     'Edit Success!',
//                     'User information updated successfully!',
//                     'success'
//                 );
//             })
//             .catch((err) => {
//                 console.error('Update Error:', err);
//                 Swal.fire(
//                     'Edit Failed',
//                     'There was an error updating the user.',
//                     'error'
//                 );
//             });
//     };

//     return (
//         <Container component="main" maxWidth="xs">
//             <Paper elevation={4} style={{ padding: 20, marginTop: 20 }}>
//                 <Typography variant="h5" style={{ marginBottom: "10%" }}>Edit Details</Typography>
//                 <Grid container spacing={2}>
//                     <Grid container spacing={2}>
//                         <Grid item xs={12}>
//                             <TextField id="outline-basic" label="Email" variant="outlined" size="small" sx={{ minWidth: "100%" }} value={email} onChange={handleEmailChange} />
//                         </Grid>
//                         <Grid item xs={12}>
//                             <TextField id="outline-basic" label="Phone Number" variant="outlined" size="small" sx={{ minWidth: "100%" }} value={phone} onChange={handlePhoneChange} />
//                         </Grid>
//                         <Grid item xs={12}>
//                             <TextField id="outline-basic" label="Username" variant="outlined" size="small" sx={{ minWidth: "100%" }} value={userName} onChange={handleUserNameChange} />
//                         </Grid>
//                         <Grid item xs={12}>
//                             <TextField id="outline-basic" label="Dob" variant="outlined" size="small" sx={{ minWidth: "100%" }} value={dateOfBirth} onChange={handleDOBChange} />
//                         </Grid>
//                         <Grid item xs={12}>
//                             <TextField id="outline-basic" label="Language" variant="outlined" size="small" sx={{ minWidth: "100%" }} value={language} onChange={handleLanguageChange} />
//                         </Grid>
//                     </Grid>
//                 </Grid>
//                 <div onClick={editClose} style={{ textAlign: "center", alignItems: "center", marginTop: "3rem", display: "flex" }}>
//                     <Button onClick={handleSubmit} type="submit" variant="contained" color="primary" style={{ marginTop: 20, marginRight: "2%", width: "73%", marginLeft: "-10px" }}>
//                         Update
//                     </Button>
//                     <Button type="submit" variant="contained" color="secondary" style={{ marginTop: 20 }}>
//                         Cancel
//                     </Button>
//                 </div>
//             </Paper>
//         </Container>
//     );
// };

// export default EditAdminProfile;
