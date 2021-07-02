// import React from "react";
// import {
//   Box,
//   Button,
//   Card,
//   CardContent,
//   CardHeader,
//   makeStyles,
//   TextField,
//   Typography,
// } from "@material-ui/core";
// import Divider from "@material-ui/core/Divider";
// import ClearIcon from "@material-ui/icons/Clear";

// const useStyles = makeStyles({
//   root: {
//     maxWidth: 400,
//     marginTop: 200,
//   },
//   TextField: {
//     minWidth: 320,
//   },
//   btn: {
//     backgroundColor: "#008080",
//     color: "white",
//     padding: "10px 25px",
//     borderRadius: ".5rem",
//     fontFamily: "'Exo', sans-serif",
//     "&:hover": {
//       backgroundColor: "#008080",
//     },
//   },
// });
// // function rand() {
// //   return Math.round(Math.random() * 20) - 10;
// // }
// // function getModalStyle() {
// //   const top = 50 + rand();
// //   const left = 50 + rand();

// //   return {
// //     top: `${top}%`,
// //     left: `${left}%`,
// //     transform: `translate(-${top}%, -${left}%)`,
// //   };
// // }
// // const useStyles = makeStyles((theme) => ({
// //   paper: {
// //     position: 'absolute',
// //     width: 400,
// //     backgroundColor: theme.palette.background.paper,
// //     border: '2px solid #000',
// //     boxShadow: theme.shadows[5],
// //     padding: theme.spacing(2, 4, 3),
// //   },
// // }));
// // const AddMeet = () => {
// //   const classes = useStyles();
// //   const [modalStyle] = React.useState(getModalStyle);

// //   return (
// //     <div >
// //       <Box display="flex" alignItems="center" justifyContent="center">
// //         <div>
// //           <Card className={classes.root}>
// //             <CardHeader
// //               title="Add Meet URL"
// //               style={{ borderRadius: "5px", color: "#008080" }}
// //               action={
// //                 <Button 
// //                 // onClick={handleClose}
// //                 >
// //                   <ClearIcon />
// //                 </Button>
// //               }
// //             />
// //             <Divider />
// //             <CardContent>
// //               <Typography style={{ fontFamily: "'Exo', sans-serif" }}>
// //                 Meet URL
// //               </Typography>
// //               <TextField
// //                 className={classes.TextField}
// //                 placeholder="Enter Meet Url"
// //                 size="small"
// //                 variant="outlined"
// //               />
// //             </CardContent>
// //             <Box
// //               m={2}
// //               display="flex"
// //               alignItems="center"
// //               justifyContent="center"
// //             >
// //               <Button size="large" variant="contained" className={classes.btn}>
// //                 Submit
// //               </Button>
// //             </Box>
// //           </Card>
// //         </div>
// //       </Box>
// //       </div>
    
// //   );
// // };
// // export default AddMeet;

// const AddMeet = () => {
//   const classes = useStyles()
//   return (
//     <div >
//       <Box display="flex" alignItems="center" justifyContent="center">
//         <div>
//           <Card className={classes.root}>
//             <CardHeader
//               title="Add Meet URL"
//               style={{ borderRadius: "5px", color: "#008080" }}
//               action={
//                 <Button 
//                 // onClick={handleClose}
//                 >
//                   <ClearIcon />
//                 </Button>
//               }
//             />
//             <Divider />
//             <CardContent>
//               <Typography style={{ fontFamily: "'Exo', sans-serif" }}>
//                 Meet URL
//               </Typography>
//               <TextField
//                 className={classes.TextField}
//                 placeholder="Enter Meet Url"
//                 size="small"
//                 variant="outlined"
//               />
//             </CardContent>
//             <Box
//               m={2}
//               display="flex"
//               alignItems="center"
//               justifyContent="center"
//             >
//               <Button size="large" variant="contained" className={classes.btn}>
//                 Submit
//               </Button>
//             </Box>
//           </Card>
//         </div>
//       </Box>
//       </div>
    
//   )
// }
// export default AddMeet;