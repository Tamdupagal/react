import React from 'react'
import {useStyles} from "../../Styles/AddStudent"
import { Button, Card, Grid, Divider, Paper, TextField} from '@material-ui/core'

const StudentsInfo = () => {
    const classes = useStyles()
    return (
        <div>
              <Grid container spacing={3} style={{ margin: "2%" }}>
              <Grid item xs={12}>
                <Divider className={classes.dividerInset0} />
                <h3 className={classes.subheading1}>MANUALLY ADD A STUDENT</h3>
              </Grid>
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
                      style={{ marginLeft: "5%" }}
                    />
                  </form>
                  <h5 className={classes.infoHeading}>
                    Student's profile picture:
                  </h5>
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
                      onChange={(e) => this.upload(e)}
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
                    />
                  </form>
                  <h5 className={classes.infoHeading}>Kid's Age</h5>
                  <form>
                    {" "}
                    <TextField
                      id="outlined-basic"
                      variant="outlined"
                      size="small"
                      className={classes.textField}
                    />
                  </form>
                </Paper>
                <div className={classes.submitBtn}>
                  <Button variant="contained" color="secondary">
                    SUBMIT STUDENT
                  </Button>
                </div>
              </Grid>
            </Grid>
        </div>
    )
}
export default StudentsInfo;
