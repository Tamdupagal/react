import React from "react";
import { Container, Box } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import { Button, Card } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import { useStyles } from "./../Styles/AddCrmStyle";

const AddCRM = () => {
  const [value, setValue] = React.useState("interview");

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const classes = useStyles();

  return (
    <div>
      <Container>
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
