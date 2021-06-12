import { Container, Grid } from "@material-ui/core";
import React from "react";
import CRMtable from "./CRMtable";
import AdminUsers from "./AdminUsers";

const Operations = () => {
  return (
    <div>
      <Container>
        <Container>
          <Grid container>
            <Grid item xs={12} lg={6}>
              <CRMtable />
            </Grid>
            <Grid item xs={12} lg={6}>
              <AdminUsers />
            </Grid>
          </Grid>
        </Container>
      </Container>
    </div>
  );
};

export default Operations;
