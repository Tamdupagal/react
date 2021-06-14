import React from "react";
import { useStyles } from "./../Styles/ManageStudentCourses";
import { Container } from "@material-ui/core";
import { Button, Card } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import MenuItem from "@material-ui/core/MenuItem";
import { useTheme } from "@material-ui/core/styles";
import Select from "@material-ui/core/Select";
import FormControl from "@material-ui/core/FormControl";

const ManageStudentCourse = () => {
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
      <div>
        <h1 className={classes.mainHeading}>Manage Course for Name</h1>
      </div>
      <Container>
        <Grid xs={12} md={9} className={classes.container}>
          <Card className={classes.card0}>
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
            <h5 className={classes.infoHeading}>Assign Course:</h5>
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
              <Button variant="contained" color="secondary">
                SUBMIT
              </Button>
            </div>
          </Card>
        </Grid>
      </Container>
    </div>
  );
};
export default ManageStudentCourse;
