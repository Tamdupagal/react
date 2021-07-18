import React, { useRef, useContext } from 'react'
import {useStyles} from "../../Styles/AddStudent"
import { Button, Card, Grid, Divider, Paper, TextField} from '@material-ui/core'
import { addStudent } from '../../action/actions'
import { AppContext } from "./../../AppContext"
import { useHistory } from 'react-router-dom'

const StudentsInfo = () => {
    const classes = useStyles()
    const { dispatch } = useContext(AppContext)
    const history = useHistory()
    const sName = useRef()
    const pName = useRef()
    const sEmail = useRef()
    const pEmail = useRef()
    const pMobileNo = useRef()
    const pRelation = useRef()
    const handleAddStudent = () =>{
      var data = {
        role : "STUDENT",
        active: "true",
        name : sName.current.value,
        email: sEmail.current.value,
        parent_name: pName.current.value,
        parent_relation: pRelation.current.value,
        parent_email: pEmail.current.value,
        password : "1234"
      }
      addStudent(dispatch, data)
      history.push("/students")
    }
    
    return (
          <div>
        <Grid container spacing={2} style={{marginTop:"2%"}}>
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
                      style={{ marginLeft: "5%", width: "60%"}}
                      inputRef={sName}
                    />
                  </form>
                  <h5 className={classes.infoHeading}>Student Email:</h5>
                  <form>
                    {" "}
                    <TextField
                      id="outlined-basic"
                      variant="outlined"
                      size="small"
                      style={{ marginLeft: "5%",width: "60%"}}
                      inputRef={sEmail}
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
                    />
                  </form>
                </Paper>
                <div className={classes.submitBtn}>
                  <Button variant="contained" color="secondary"
                   onClick={handleAddStudent}
                   >
                    SUBMIT STUDENT
                  </Button>
                </div>
              </Grid>
            </Grid>
          </div>
    )
}
export default StudentsInfo;
