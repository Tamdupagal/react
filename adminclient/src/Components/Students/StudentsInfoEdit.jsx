import React, { useRef, useContext, useEffect } from "react";
import { useStyles } from "../../Styles/AddStudent";
import {
  Button,
  Card,
  Grid,
  Divider,
  Paper,
  TextField,
} from "@material-ui/core";
import { AppContext } from "./../../AppContext";
import { editStudent } from "../../action/actions";
import { useHistory, useLocation, useParams } from "react-router-dom";

const StudentsInfoEdit = () => {
  const classes = useStyles();
  const sName = useRef();
  const pName = useRef();
  const sEmail = useRef();
  const pEmail = useRef();
  const pMobileNo = useRef();
  const pRelation = useRef();
  const { state, dispatch } = useContext(AppContext);
  const editableStudentData = useLocation();
  const { id } = useParams();
  let data = editableStudentData.state.data;
  const history = useHistory();

  const handleEditStudent = () => {
    console.log(id);
    var data = {
      role: "STUDENT",
      active: "true",
      name: sName.current.value,
      email: sEmail.current.value,
      parent_name: pName.current.value,
      parent_relation: pRelation.current.value,
      parent_email: pEmail.current.value,
      password: "1234",
    };
    editStudent(dispatch, data, id);
    history.push("/students");
  };

  useEffect(() => {
    // console.log(data)
    console.log(data._id);
  }, []);

  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <Divider className={classes.dividerInset1} />
          <h3 className={classes.subheading1}>STUDENT'S INFORMATION</h3>
          <Paper className={classes.paper}>
            <h5 className={classes.infoHeading}>Student Name:</h5>
            <form>
              {" "}
              <TextField
                id="outlined-basic"
                variant="outlined"
                size="small"
                style={{ marginLeft: "5%", width: "60%" }}
                inputRef={sName}
                defaultValue={data.name}
              />
            </form>
            <h5 className={classes.infoHeading}>Student Email:</h5>
            <form>
              {" "}
              <TextField
                id="outlined-basic"
                variant="outlined"
                size="small"
                style={{ marginLeft: "5%", width: "60%" }}
                inputRef={sEmail}
                defaultValue={data.email}
              />
            </form>
            <h5 className={classes.infoHeading}>Student's profile picture:</h5>
            <Card
              style={{
                maxWidth: "50%",
                alignItems: "center",
                padding: "1%",
                paddingTop: "1%",
                paddingBottom: "2%",
                marginLeft: "5%",
              }}
            >
              <input
                type="file"
                // onChange={(e) => this.upload(e)}
                name="img"
              />
            </Card>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Divider className={classes.dividerInset2} />
          <h3 className={classes.subheading1}>PARENT'S INFORMATION</h3>
          <Paper className={classes.paper}>
            <h5 className={classes.infoHeading}>Parent's Name:</h5>
            <form>
              {" "}
              <TextField
                id="outlined-basic"
                variant="outlined"
                size="small"
                className={classes.textField}
                inputRef={pName}
                defaultValue={data.parent_name}
              />
            </form>
            <h5 className={classes.infoHeading}>Parent's Email:</h5>
            <form>
              {" "}
              <TextField
                id="outlined-basic"
                variant="outlined"
                size="small"
                className={classes.textField}
                inputRef={pEmail}
                defaultValue={data.parent_email}
              />
            </form>
            <h5 className={classes.infoHeading}>Alternate Email:</h5>
            <form>
              {" "}
              <TextField
                id="outlined-basic"
                variant="outlined"
                size="small"
                className={classes.textField}
              />
            </form>
            <h5 className={classes.infoHeading}>Parent's phone No. :</h5>
            <form>
              {" "}
              <TextField
                id="outlined-basic"
                variant="outlined"
                size="small"
                className={classes.textField}
                inputRef={pMobileNo}
              />
            </form>
            <h5 className={classes.infoHeading}>Parent's relation</h5>
            <form>
              {" "}
              <TextField
                id="outlined-basic"
                variant="outlined"
                size="small"
                className={classes.textField}
                inputRef={pRelation}
                defaultValue={data.parent_relation}
              />
            </form>
          </Paper>
          <div className={classes.submitBtn}>
            <Button
              variant="contained"
              color="secondary"
              onClick={handleEditStudent}
              style={{ fontFamily: "'Exo', sans-serif" }}
            >
              Edit STUDENT
            </Button>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};
export default StudentsInfoEdit;
