import { Container } from "@material-ui/core";
import React, { useContext, useEffect, useRef } from "react";
import { Button, Card, Box } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import { useStyles } from "./../Styles/AddAdminStyle";
import { useTheme } from "@material-ui/core/styles";
import Select from "@material-ui/core/Select";
import FormControl from "@material-ui/core/FormControl";
import { editAdmin } from "../action/actions";
import { AppContext } from "../AppContext";
import {
  useHistory,
  withRouter,
  useLocation,
  useParams,
} from "react-router-dom";

const EditAdmin = (props) => {
  const [value, setValue] = React.useState("All");
  const location = useLocation();

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const classes = useStyles();
  const theme = useTheme();
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const { state, dispatch } = useContext(AppContext);
  const history = useHistory();
  const [personName, setPersonName] = React.useState([]);
  let adminEditableData = state.adminEditData.data;
  const { id } = useParams();
  // id  = props.match.params
  const names = [
    "Oliver Hansen",
    "Van Henry",
    "April Tucker",
    "Ralph Hubbard",
    "Omar Alexander",
    "Carlos Abbott",
    "Miriam Wagner",
    "Bradley Wilkerson",
    "Virginia Andrews",
    "Kelly Snyder",
  ];
  // const useQuery = () => {
  //   return
  // }
  useEffect(() => {
    console.log(location.state);
    console.log(id);
  }, [location]);
  const handleChangeMultiple = (event) => {
    const { options } = event.target;
    const value = [];
    for (let i = 0, l = options.length; i < l; i += 1) {
      if (options[i].selected) {
        value.push(options[i].value);
      }
    }
    setPersonName(value);
  };

  const handleEditAdmin = () => {
    var data = {
      id: adminEditableData._id,
      name: username.current.value,
      email: email.current.value,
      password: password.current.value,
    };
    editAdmin(dispatch, data, data._id);
    history.push("/operations");
  };
  return (
    <div>
      <Container style={{ marginBottom: "20vh" }}>
        <div>
          <h1 className={classes.mainHeading}>Edit an Admin</h1>
        </div>
        <Box display="flex" justifyContent="center">
          <Grid item xs={12} md={9}>
            <Card>
              <h5 className={classes.infoHeading}>User Name:</h5>
              <form>
                {" "}
                <TextField
                  id="outlined-basic"
                  variant="outlined"
                  size="small"
                  className={classes.textField}
                  inputRef={username}
                />
              </form>
              <h5 className={classes.infoHeading}>User Email:</h5>{" "}
              <TextField
                id="outlined-basic"
                variant="outlined"
                size="small"
                className={classes.textField}
                inputRef={email}
              />
              <h5 className={classes.infoHeading}>Password:</h5>{" "}
              <TextField
                id="outlined-basic"
                type="password"
                variant="outlined"
                size="small"
                className={classes.textField}
                inputRef={password}
              />
              <h5 className={classes.infoHeading}>Assign Role:</h5>
              <FormControl className={classes.formControl}>
                <Select
                  variant="outlined"
                  multiple
                  native
                  value={personName}
                  onChange={handleChangeMultiple}
                  inputProps={{
                    id: "select-multiple-native",
                  }}
                >
                  {names.map((name) => (
                    <option key={name} value={name}>
                      {name}
                    </option>
                  ))}
                </Select>
              </FormControl>
              <div className={classes.submitBtn}>
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={handleEditAdmin}
                >
                  CREATE ADMIN
                </Button>
              </div>
            </Card>
          </Grid>
        </Box>
      </Container>
    </div>
  );
};
export default EditAdmin;
