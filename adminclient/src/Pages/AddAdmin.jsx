import { Container } from "@material-ui/core";
import React, { useContext, useRef } from "react";
import { Button, Card, Box } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import { useStyles } from "./../Styles/AddAdminStyle";
import { useTheme } from "@material-ui/core/styles";
import Select from "@material-ui/core/Select";
import FormControl from "@material-ui/core/FormControl";
import { addAdmin } from "../action/actions";
import { AppContext } from "../AppContext";
import { useHistory } from "react-router-dom";

const AddAdmin = () => {
  const [value, setValue] = React.useState("All");

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

  function getStyles(name, personName, theme) {
    return {
      fontWeight:
        personName.indexOf(name) === -1
          ? theme.typography.fontWeightRegular
          : theme.typography.fontWeightMedium,
    };
  }
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
  const handleAddAdmin = () => {
    var data = {
      name: username.current.value,
      email: email.current.value,
      password: password.current.value,
    };
    addAdmin(dispatch, data);
    history.push("/operations");
  };
  return (
    <div>
      <Container>
        <div>
          <h1 className={classes.mainHeading}>Add an Admin</h1>
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
                  onClick={handleAddAdmin}
                  style={{ fontFamily: "'Exo', sans-serif" }}
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
export default AddAdmin;
