import React from 'react'
import { useStyles } from "./../Styles/ManageStudentCourses";
import { Container } from "@material-ui/core";
import { Button, Card } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import MenuItem from "@material-ui/core/MenuItem";


const ManageStudentCourse = () => {
    const [value, setValue] = React.useState("interview");
    const handleChange = (event) => {
            setValue(event.target.value);
        };
    const classes = useStyles();

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
            <form>
              {" "}
              <TextField
                id="outlined-basic"
                variant="outlined"
                size="small"
                select
                value={value}
                onchange={handleChange}
                className={classes.textField}
              >
                <MenuItem value={"interview"}>interview</MenuItem>
                <MenuItem value={"hello"}>hello</MenuItem>
                <MenuItem value={"hola"}>hola</MenuItem>
              </TextField>
            </form>
            <div className={classes.submitBtn}>
              <Button variant="contained" color="secondary">
                SUBMIT
              </Button>
            </div>
          </Card>
        </Grid>
      </Container>
    </div>
    )
}
export default ManageStudentCourse;
