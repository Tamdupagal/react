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
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import { useStyles } from "./../../Styles/AddCourse"

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
              <TextField
                id="outlined-basic"
                placeholder="Course title"
                variant="outlined"
                className={classes.textField}
              />
              <h3 className={classes.subheading2}>DESCRIPTION</h3>
              <div className="editor__wrapper" style={styles}>
                <ReactQuill
                  className="toolBar"
                  theme="snow"
                  placeholder="Add Content here..."
                  formats={formats}
                  modules={modules}
                />
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
                  helperText="Select a section"
                  select
                  className={classes.textField}
                >
                  <MenuItem value={"hii"}>hii</MenuItem>
                  <MenuItem value={"hello"}>hello</MenuItem>
                  <MenuItem value={"hola"}>hola</MenuItem>
                </TextField>
              </form>
              <Card className={classes.rightContainer1}>
                <form>
                  <input type="file" name="picture" />
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