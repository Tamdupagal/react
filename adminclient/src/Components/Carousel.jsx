import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { Container, withStyles, Paper, Box, Grid } from "@material-ui/core";

const CarouselComponent = () => {
  return (
    <div>
      <Container>
        <Container>
          <Box display="flex" justifyContent="center">
            <Grid item xs={12} lg={10}>
              <Paper>
                <Carousel>
                  <div>
                    <h4>What is your favourite Color?</h4>
                  </div>
                  <div>
                    <h4>What is your favourite Color?</h4>
                  </div>
                  <div>
                    <h4>What is your favourite Color?</h4>
                  </div>
                  <div>
                    <h4>What is your favourite Color?</h4>
                  </div>
                  <div>
                    <h4>What is your favourite Color?</h4>
                  </div>
                </Carousel>
              </Paper>
            </Grid>
          </Box>
        </Container>
      </Container>
    </div>
  );
};

export default CarouselComponent;
