import React, { useContext, useEffect, useRef, useState } from 'react'
// import Button from '../Button/Button'
// import del from '../../images/delete.svg'
// import plus from '../../images/plus.svg'
import { Button,Box,Grid } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import AddIcon from "@material-ui/icons/Add";
import MenuItem from "@material-ui/core/MenuItem";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
// import './Slot.scss';
// import AddNewRoom from "../../Styles/AddNewRoom"


const useStyles = makeStyles((theme) => ({
    box1: {
        border: "1px solid #ccc",
    },
box2: {
        border: "1px solid #ccc",
    },
box3: {
        border: "1px solid #ccc",
    },
    slot: {
        width: "100%",
        marginTop:"2%"
        // border:"1px solid red"
    },
    textField: {
        width: "90%",
        marginLeft: "5%",
        // marginBottom:"3%"
    }

}))



function Slot({ index, setSlots, id }) {
    const [value, setValue] = React.useState("interview");
    const handleChange = (event) => {
        setValue(event.target.value);
      };

    const classes=useStyles()
    
    const delSlot = () => {
        setSlots(prev => prev.filter(item => item.id != id))
    }
    const AddSlot = () => {
        setSlots(prev => [...prev, { id: Math.random()}])
    }
    return (
        <div className={classes.slot}>
                <Box display="flex" flexDirection="row" >
            <Grid container spacing={0}  >
            
                <Grid item lg={4}>
                    {/* <label className="label" htmlFor="time_start">Start</label>
                    <input type="time" name="time_start" /> */}

                    <Box className={classes.box1}>
                        <h5>Trainee Type</h5>
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
</Box>
                </Grid>
                    <Grid item lg={6}>
                    <Box className={classes.box2}>

                    {/* <label className="label" htmlFor="time_end">End</label>
                    <input type="time" name="time_end" /> */}
                    <h5 className={classes.infoHeading}>Assign Trainee</h5>
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
                    </Box>
                </Grid>
            
            <Box className={classes.box3} display="flex" alignItems="center">

            <Grid item lg={2}>
                            {index > 0 && <Button startIcon={<DeleteIcon />} onClick={delSlot} variant="contained" style={{backgroundColor:"red"}}>Delete</Button>}
        {index == 0 && <Button startIcon={<AddIcon/>} onClick={AddSlot} color="primary" variant="outlined" style={{padding:"0 0"}}  >Add More</Button>}
            </Grid>
                    </Box>
                </Grid>
                    </Box>
            </div>
    )
}

export default Slot

// className="input__box"
