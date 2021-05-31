import React from "react";
import ReactQuill, { Quill } from "react-quill";
import "react-quill/dist/quill.snow.css";
import "./AddCourse.css";
import { Button, Card, CardHeader } from "@material-ui/core";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputAdornment from "@material-ui/core/InputAdornment";
import { BiRupee } from "react-icons/bi";
import Divider from "@material-ui/core/Divider";

import { Box, Container, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  mainHeading: {
    // justifyContent: "center",
    // textAlign: "center",
    fontFamily: "'Exo', sans-serif",
    marginTop: "3%",
    marginBottom: "3%",
  },
  subheading1: {
    letterSpacing: "0.2rem",
    fontFamily: "KoHo, sans-serif",
  },
  subheading2: {
    letterSpacing: "0.2rem",
    fontFamily: "KoHo, sans-serif",
    marginLeft: "4%",
    fontSize: "0.9rem",
    color: "#1f2e2e",
  },
  subheading3: {
    letterSpacing: "0.2rem",
    fontFamily: "KoHo, sans-serif",
    fontSize: "0.9rem",
    marginTop: "-3px",
    color: "#1f2e2e",
  },
  textField: {
    width: "90%",
    marginLeft: "5%",
  },
  rightContainer: {
    // marginTop: "2%",
    border: "1px solid #ccc",
    borderStartEndRadius: "8px",
    borderStartStartRadius: "8px",
    padding: "6%",
    textAlign: "center",
  },
  mainContainer: {
    margin: "1%",
    border: "1px solid #ccc",
    borderStartEndRadius: "8px",
    borderStartStartRadius: "8px",
    padding: "1%",
    // textAlign: "center",
  },
  rightContainer1: {
    marginTop: "7%",
    border: "1px solid #ccc",
    borderStartEndRadius: "8px",
    borderStartStartRadius: "8px",
    padding: "6%",
    // textAlign: "center",
  },
  margin: {
    marginTop: "12%",
    color: "#ccc",
  },
  dividerInset1: {
    margin: `10px 0 0 ${theme.spacing(29)}px`,
    marginBottom: "-31px",
  },
  dividerInset2: {
    margin: `10px 0 0 ${theme.spacing(22)}px`,
    marginTop: "-24px",
    marginBottom: "23px",
  },
  dividerInset3: {
    margin: `10px 0 0 ${theme.spacing(21)}px`,
    marginTop: "-24px",
    marginBottom: "23px",
  },
  dividerInset4: {
    margin: `10px 0 0 ${theme.spacing(13)}px`,
    marginTop: "-30px",
    marginBottom: "23px",
  },
}));

const formats = [
  "background",
  "bold",
  "color",
  "font",
  "code",
  "italic",
  "link",
  "size",
  "strike",
  "script",
  "underline",
  "blockquote",
  "header",
  "align",
  "direction",
  "image",
  "video",
  "code-block",
];

const modules = {
  toolbar: ".toolBar",
  toolbar: [
    ["bold", "italic", "underline", "strike"], // toggled buttons
    ["blockquote", "code-block"],
    ["link", "image", "video"],
    [{ header: 1 }, { header: 2 }], // custom button values
    [{ list: "ordered" }, { list: "bullet" }],
    [{ script: "sub" }, { script: "super" }], // superscript/subscript
    [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
    [{ direction: "rtl" }], // text direction

    [{ size: ["small", false, "large", "huge"] }], // custom dropdown
    [{ header: [1, 2, 3, 4, 5, 6, false] }],

    [{ color: [] }, { background: [] }], // dropdown with defaults from theme
    [{ font: [] }],
    [{ align: [] }],

    ["clean"], // remove formatting button
  ],
};

const AddCourse = ({ withoutButton, withoutTitle, styles }) => {
  const classes = useStyles();
  return (
    <div>
      <Container>
        <h1 className={classes.mainHeading}>Add a Course</h1>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={12} md={12} lg={9}>
            <Divider className={classes.dividerInset1} />
            <h3 className={classes.subheading1}>BASIC INFORMATION</h3>

            <Paper className={classes.mainContainer}>
              <h3 className={classes.subheading2}>COURSE TITLE</h3>
              <Divider className={classes.dividerInset2} />

              <TextField
                id="outlined-basic"
                placeholder="Course title"
                variant="outlined"
                // size="small"
                className={classes.textField}
              />
              <h3 className={classes.subheading2}>DESCRIPTION</h3>
              <Divider className={classes.dividerInset3} />

              <div className="editor__wrapper" style={styles}>
                {/* {!withoutTitle && (
                  <h1 className="editor__title">Add Content</h1>
                )} */}
                <ReactQuill
                  className="toolBar"
                  theme="snow"
                  placeholder="Add Content here..."
                  formats={formats}
                  modules={modules}
                />
                {/* {!withoutButton && (
                  <div className="btn__box">
                    <button type="button">Add Activity</button>
                  </div>
                )} */}
              </div>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={3}>
            <Card className={classes.rightContainer}>
              <Button variant="contained" color="secondary">
                SAVE CHANGES
              </Button>
            </Card>
            <h3 className={classes.subheading1}>OPTIONS</h3>
            <Divider className={classes.dividerInset4} />

            <Card className={classes.rightContainer1}>
              <h3 className={classes.subheading3}>SECTION</h3>
              <form>
                {" "}
                <TextField
                  id="outlined-basic"
                  variant="outlined"
                  size="small"
                  // className={classes.textField}
                  helperText="Select a section"
                />
              </form>
              <Card className={classes.rightContainer1}>
                <form>
                  <input type="file" name="picture" />
                  {/* <button>Browse</button> */}
                </form>
              </Card>
              <FormControl
                fullWidth
                className={classes.margin}
                variant="outlined"
              >
                <InputLabel htmlFor="outlined-adornment-amount">
                  PRICE
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-amount"
                  startAdornment={
                    <InputAdornment position="start">
                      <BiRupee />
                    </InputAdornment>
                  }
                  labelWidth={60}
                />
              </FormControl>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default AddCourse;

//  <div className="editor__wrapper" style={styles}>
//       {!withoutTitle && <h1 className="editor__title">Add Content</h1>}
//       <ReactQuill
//         className="toolBar"
//         theme="snow"
//         placeholder="Add Content here..."
//         formats={formats}
//         modules={modules}
//       />
//       {!withoutButton && (
//         <div className="btn__box">
//           <button type="button">Add Activity</button>
//         </div>
//       )}
// //     </div>

// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import TextField from '@material-ui/core/TextField';
// import MenuItem from '@material-ui/core/MenuItem';

// const currencies = [
//   {
//     value: 'USD',
//     label: '$',
//   },
//   {
//     value: 'EUR',
//     label: '€',
//   },
//   {
//     value: 'BTC',
//     label: '฿',
//   },
//   {
//     value: 'JPY',
//     label: '¥',
//   },
// ];

// const useStyles = makeStyles((theme) => ({
//   root: {
//     '& .MuiTextField-root': {
//       margin: theme.spacing(1),
//       width: '25ch',
//     },
//   },
// }));

// export default function MultilineTextFields() {
//   const classes = useStyles();
//   const [currency, setCurrency] = React.useState('EUR');

//   const handleChange = (event) => {
//     setCurrency(event.target.value);
//   };

//   return (
//     <form className={classes.root} noValidate autoComplete="off">
//       <div>
//         <TextField
//           id="standard-select-currency"
//           select
//           label="Select"
//           value={currency}
//           onChange={handleChange}
// helperText="Please select your currency"
//         >
//           {currencies.map((option) => (
//             <MenuItem key={option.value} value={option.value}>
//               {option.label}
//             </MenuItem>
//           ))}
//         </TextField>
//         <TextField
//           id="standard-select-currency-native"
//           select
//           label="Native select"
//           value={currency}
//           onChange={handleChange}
//           SelectProps={{
//             native: true,
//           }}
//           helperText="Please select your currency"
//         >
//           {currencies.map((option) => (
//             <option key={option.value} value={option.value}>
//               {option.label}
//             </option>
//           ))}
//         </TextField>
//       </div>
//       <div>
//         <TextField
//           id="filled-select-currency"
//           select
//           label="Select"
//           value={currency}
//           onChange={handleChange}
//           helperText="Please select your currency"
//           variant="filled"
//         >
//           {currencies.map((option) => (
//             <MenuItem key={option.value} value={option.value}>
//               {option.label}
//             </MenuItem>
//           ))}
//         </TextField>
//         <TextField
//           id="filled-select-currency-native"
//           select
//           label="Native select"
//           value={currency}
//           onChange={handleChange}
//           SelectProps={{
//             native: true,
//           }}
//           helperText="Please select your currency"
//           variant="filled"
//         >
//           {currencies.map((option) => (
//             <option key={option.value} value={option.value}>
//               {option.label}
//             </option>
//           ))}
//         </TextField>
//       </div>
//       <div>
//         <TextField
//           id="outlined-select-currency"
//           select
//           label="Select"
//           value={currency}
//           onChange={handleChange}
//           helperText="Please select your currency"
//           variant="outlined"
//         >
//           {currencies.map((option) => (
//             <MenuItem key={option.value} value={option.value}>
//               {option.label}
//             </MenuItem>
//           ))}
//         </TextField>
//         <TextField
//           id="outlined-select-currency-native"
//           select
//           label="Native select"
//           value={currency}
//           onChange={handleChange}
//           SelectProps={{
//             native: true,
//           }}
//           helperText="Please select your currency"
//           variant="outlined"
//         >
//           {currencies.map((option) => (
//             <option key={option.value} value={option.value}>
//               {option.label}
//             </option>
//           ))}
//         </TextField>
//       </div>
//     </form>
//   );
// }
