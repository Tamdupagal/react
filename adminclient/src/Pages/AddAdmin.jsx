import { Container } from "@material-ui/core";
import React from "react";
import { Button, Card } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import MenuItem from "@material-ui/core/MenuItem";
import {useStyles} from "./../Styles/AddAdminStyle"

const AddAdmin = () => {
  const [value, setValue] = React.useState("All");

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const classes = useStyles();
  return (
    <div>
      <Container>
        <div>
          <h1 className={classes.mainHeading}>Add an Admin</h1>
        </div>
        <Grid className={classes.main}>
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
                  disabled="true"
                  size="small"
                  select
                  value={value}
                  onchange={handleChange}
                  className={classes.textField}
                >
                  <MenuItem value={"All"}>All</MenuItem>
                </TextField>
              </form>
              <div className={classes.submitBtn}>
                <Button variant="contained" color="secondary">
                  CREATE ADMIN
                </Button>
              </div>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};
export default AddAdmin;