import { Box, Button } from '@material-ui/core';
import React, { Fragment } from 'react'

const AddStudent = () => {
    return (
        <div>
            {/* <Button
  variant="contained"
  component="label"
>
  <input
    type="file"
    // hidden
  />
</Button> */}
            <div alignItems="center" justifyContent="left">
                    <Button mr={4} hidden>
                        
                    </Button>
            </div>
            <h2 style={{fontFamily: "Exo\ 2,Helvetica Neue,Arial,sans-serif", color: "#303840", fontSize: "1.999rem",textAlign: "center"}}>Add a student</h2>
            <Box ml={3} alignItems="center" justifyContent="center" style={{fontFamily: 'Exo\ 2,Helvetica Neue,Arial,sans-serif'}}>
                <div>
                <h3>Import Excel File</h3>
                </div>
            </Box>

        </div>
    )
}
export default AddStudent;
