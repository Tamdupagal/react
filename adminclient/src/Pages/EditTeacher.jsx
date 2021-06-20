import React, { useContext, useEffect } from "react";
import { useState, useRef } from "react";
import { Container } from "@material-ui/core";
import { Button, Card, } from "@material-ui/core";
import Divider from "@material-ui/core/Divider";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { useStyles } from "./../Styles/AddTeacher";
import { Multiselect } from "multiselect-react-dropdown";
import { editTeacher } from "../action/actions";
import { AppContext } from "./../AppContext"
import { useHistory } from "react-router-dom"
const EditTeacher = () => {
  const classes = useStyles();
  const tName = useRef()
  const tQual = useRef()
  const tEmail = useRef()
  const tMobileNo = useRef()  
  const tAltMobileNo = useRef()
  const tAddress = useRef()
  const { state, dispatch } = useContext(AppContext)
  const [selectedValue, setSelectedValue] = useState([]);
  const history = useHistory()
  let editableData = state.teacherEditData.data

  useEffect(() => {
     console.log(editableData)
  }, [])

  const onSelect = (e) => {
    setSelectedValue(Array.isArray(e) ? e.map((x) => x.label) : []);
  };

  const handleEditTeacher = () => {
    var data = {
      name : tName.current.value,
      primary_phone_number : tMobileNo.current.value,
      email : tEmail.current.value,
      password : "123445",
      country : "Indiaa",
      zip_code: "898961",
      address: tAddress.current.value      
    };
    console.log(data)
    editTeacher(dispatch,data,editableData._id)
    history.push("/teachers")
    console.log("successfull")

  };
  const multiselectdata = [
    { Country: "india", id: "1" },
    { Country: "england", id: "2" },
    { Country: "america", id: "3" },
    { Country: "china", id: "4" },
    { Country: "pakistan", id: "5" },
  ];
  const [options] = useState(multiselectdata);

  return (
    <div>
      <Container>
        <div>
          <h1 className={classes.mainHeading}> Add a Teacher</h1>
        </div>
        <div>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <Divider className={classes.dividerInset1} />
              <h3 className={classes.subheading1}>TEACHER'S INFORMATION</h3>
              <Paper className={classes.paper}>
                <h5 className={classes.infoHeading}>
                  Teacher's profile picture:
                </h5>
                <Card
                  style={{
                    maxWidth: "50%",
                    alignItems: "center",
                    padding: "1%",
                    paddingTop: "1%",
                    paddingBottom: "2%",
                  }}
                  className={classes.infoHeading}
                >
                  <input
                    type="file"
                    onChange={(e) => this.upload(e)}
                    name="img"
                  />
                </Card>
                <h5 className={classes.infoHeading}>Teacher Name:</h5>{" "}
                <form>
                  <TextField
                    id="outlined-basic"
                    variant="outlined"
                    size="small"
                    className={classes.textField}
                    inputRef={tName}
                  />
                </form>
                <h5 className={classes.infoHeading}>Teacher Email:</h5>
                <form>
                  <TextField
                    id="outlined-basic"
                    variant="outlined"
                    size="small"
                    className={classes.textField}
                    inputRef={tEmail}
                  />
                </form>
                <h5 className={classes.infoHeading}>Phone No.:</h5>
                <form>
                  <TextField
                    id="outlined-basic"
                    variant="outlined"
                    size="small"
                    className={classes.textField}
                    inputRef={tMobileNo}
                  />
                </form>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Divider className={classes.dividerInset2} />
              <h3 className={classes.subheading1}>OTHER INFORMATION</h3>
              <Paper className={classes.paper}>
                <h5 className={classes.infoHeading}>Qualification :</h5>
                <form>
                  <TextField
                    id="outlined-basic"
                    variant="outlined"
                    size="small"
                    className={classes.textField}
                    inputRef={tQual}
                  />
                </form>
                <h5 className={classes.infoHeading}>Alt Phone No. :</h5>
                <form>
                  <TextField
                    id="outlined-basic"
                    variant="outlined"
                    size="small"
                    className={classes.textField}
                    inputRef={tAltMobileNo}
                  />
                </form>
                <h5 className={classes.infoHeading}>Teacher Adress:</h5>
                <form>
                  <TextField
                    id="outlined-basic"
                    variant="outlined"
                    // size="small"
                    className={classes.textField}
                    inputRef={tAddress}
                  />
                </form>
                <h5 className={classes.infoHeading}>Courses :</h5>
                <Container>
                  <Multiselect
                    options={options}
                    value={selectedValue}
                    onSelect={onSelect}
                    displayValue="label"
                    closeIcon="cancel"
                    placeholder=""
                    showArrow={true}
                    avoidHighlightFirstOption={true}
                  />
                </Container>
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <div className={classes.submitBtn}>
                <Button variant="contained" color="secondary"
                onClick={handleEditTeacher}
                >
                  Edit TEACHER
                </Button>
              </div>
            </Grid>
          </Grid>
        </div>
      </Container>
    </div>
  );
};

export default EditTeacher;
