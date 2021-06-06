import React from "react";
import { Container } from "@material-ui/core";
import { AiOutlineCopyrightCircle } from "react-icons/ai";
import Grid from "@material-ui/core/Grid";

const Copyright = () => {
  return (
    <Container
      style={{
        position: "fixed",
        marginTop: "38vh",
        // marginBottom: "0px",
        borderTop: "0.4vh solid #ccc",
      }}
    >
      <Container>
        <Grid>
          <Grid item xs={12}>
            <div
              style={{ fontSize: "2rem", fontWeight: "700", color: "#47476b" }}
            >
              Digital Aided School
            </div>
            <br />
            <div>
              <h7 style={{ color: "#b3b3cc" }}>
                Copyright (year) <AiOutlineCopyrightCircle />
                .All rights reserved
              </h7>
            </div>
          </Grid>
        </Grid>
      </Container>
    </Container>
  );
};
export default Copyright;
