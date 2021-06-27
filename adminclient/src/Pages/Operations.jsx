import { Container, Grid } from "@material-ui/core";
import React from "react";
import CRMtable from "./../Components/Operations/CRMtable";
import AdminUsers from "./../Components/Operations/AdminUsers";

const Operations = () => {
  return (
    <div>
      <Container style={{ marginBottom: "20vh" }}>
        <Grid container>
          <Grid item xs={12} lg={6}>
            <CRMtable />
          </Grid>
          <Grid item xs={12} lg={6}>
            <AdminUsers />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Operations;
