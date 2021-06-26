import React from "react";
import { Container, Footer } from "@material-ui/core";
import { AiOutlineCopyrightCircle } from "react-icons/ai";
import Grid from "@material-ui/core/Grid";

const Copyright = () => {
  return (
    <Container
      style={{
        // marginTop: "40vh",
        backgroundColor: "white",
        borderTop: "0.4vh solid #ccc",
      }}
    >
      <Container>
        <Grid container>
          <Grid item xs={12} lg={12}>
            <div
              style={{
                fontSize: "2rem",
                fontWeight: "700",
                color: "#47476b",
                marginTop: "5vh",
              }}
            >
              Digital Aided School
            </div>
            {/* <br /> */}
            <div>
              <h5 style={{ color: "#b3b3cc", fontSize: "large" }}>
                Copyright (year) <AiOutlineCopyrightCircle />
                .All rights reserved
              </h5>
            </div>
          </Grid>
        </Grid>
      </Container>
    </Container>
  );
};
export default Copyright;
