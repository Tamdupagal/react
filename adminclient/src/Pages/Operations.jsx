import { Container, Grid } from '@material-ui/core'
import React from 'react'
import Students from "./Students";
import Teachers from "./Teachers"

const Operations = () => {
    return (
        <div>
            <Container>
                <Container>
                    <Grid container>
                        <Grid item xs={12} lg={6}><Students/></Grid>
                        <Grid item xs={12} lg={6}><Teachers/></Grid>
                    </Grid>
                </Container>
            </Container>
        </div>
    )
}

export default Operations
