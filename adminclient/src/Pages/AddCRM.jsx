import React from "react";
import { Container, Box } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import { Button, Card } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import { useStyles } from "./../Styles/AddCrmStyle";
import { useTheme } from "@material-ui/core/styles";
import Select from "@material-ui/core/Select";
import FormControl from "@material-ui/core/FormControl";

const AddCRM = () => {
  const [value, setValue] = React.useState("interview");

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const classes = useStyles();
  const theme = useTheme();
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

  return (
    <div>
      <Container style={{ marginBottom: "20vh" }}>
        <div>
          <h1 className={classes.mainHeading}>Add a CRM:User</h1>
        </div>
        <div className={classes.main}>
          <Box display="flex" justifyContent="center">
            <Grid item xs={12} lg={8}>
              <Card className={classes.card}>
                <h5 className={classes.infoHeading}>Classroom Name:</h5>
                <form>
                  {" "}
                  <TextField
                    id="outlined-basic"
                    variant="outlined"
                    size="small"
                    className={classes.textField}
                  />
                </form>
                <h5 className={classes.infoHeading}>User Email:</h5>
                <form>
                  {" "}
                  <TextField
                    id="outlined-basic"
                    variant="outlined"
                    size="small"
                    className={classes.textField}
                  />
                </form>
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
                    style={{ fontFamily: "'Exo', sans-serif" }}
                  >
                    CREATE CRM USER
                  </Button>
                </div>
              </Card>
            </Grid>
          </Box>
        </div>
      </Container>
    </div>
  );
};

export default AddCRM;
