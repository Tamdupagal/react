import React, { useState, useEffect } from "react";
import { Box, Button, Container, Typography, Grid } from "@material-ui/core";
import { useHistory } from "react-router";
import { makeStyles } from "@material-ui/core/styles";
import Table from "./../Table/Table";
import CRMActions from "./../Actions/CRMActions";
import { CRMData, CrmColumn } from "./../../Helpers/CRMData";
import ResetPassword1 from "../../Pages/ResetPassword1"
const useStyles = makeStyles({
  title: {
    fontSize: "2rem",
    fontWeight: "700",
    fontFamily: "KoHo, sans-serif",
  },
  container: {
    border: "1px solid #e6e6ff",
    borderBottom: "white",
    backgroundColor: "white",
    padding: "2%",
    borderTopLeftRadius: "10px",
    borderTopRightRadius: "10px",
  },
});

export default function CRMTable  ()  {

  const classes = useStyles();
  const history = useHistory();
  const [open, setOpen] = useState(false);
  
  const handleCrmOpen = () => {
   console.log("called")
    setOpen(true);
history.push({
      pathname: `/resetPassword/${data._id}`
    })  };

  const handleCrmClose = () => {
    setOpen(false);
  };

  const [data, setData] = useState();
  useEffect(() => {
    setData(CRMData);
  }, []);

  const handleAddCRM = () => {
    history.push("/add-crm");
  };

  return (
    <div>
      <Box
        display="flex"
        justifyContent="center"
        style={{ marginBottom: "20vh" }}
      >
        <Grid item xs={12} lg={12}>
          <Container>
            <Container className={classes.container}>
              <Box display="flex" justifyContent="space-between">
                <Typography className={classes.title}>CRM</Typography>

                <Button
                  variant="contained"
                  color="secondary"
                  onClick={handleAddCRM}
                  size="small"
                  style={{ fontFamily: "'Exo', sans-serif" }}
                >
                  ADD NEW CRM USER
                </Button>
                <ResetPassword1 handleClose={handleCrmClose} open={open}/>

              </Box>
            </Container>
          </Container>

          <Container>
            <Table data={data} column={CrmColumn(handleCrmOpen,handleCrmClose)} />
          </Container>
        </Grid>
      </Box>
    </div>
  );
};


