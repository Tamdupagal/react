import React, { useState, useEffect } from "react";
import { Box, Button, Container, Typography, Grid } from "@material-ui/core";
import { useHistory } from "react-router";
import { makeStyles } from "@material-ui/core/styles";
import Table from "./../Table/Table";
import CRMActions from "./../Actions/CRMActions";
import { CRMData } from "./../../Helpers/CRMData";

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
    padding: "1%",
    borderTopLeftRadius: "10px",
    borderTopRightRadius: "10px",
  },
});

const MeetLink = () => {
  const classes = useStyles();
  const history = useHistory();

  const Columns = [
    { title: "Name", field: "name" },
    { title: "Email", field: "email" },
    { title: "User Roles", field: "userRoles", width: "10%" },
    {
      title: "Actions",
      field: "name",
      render: (row) => (
        <div>
          <CRMActions />
        </div>
      ),
    },
  ];
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
                <Typography className={classes.title}> Meet Link </Typography>

                <Button
                  variant="contained"
                  color="secondary"
                  onClick={handleAddCRM}
                  style={{ fontFamily: "'Exo', sans-serif" }}
                >
                  ADD NEW CRM USER
                </Button>
              </Box>
            </Container>
          </Container>

          <Container>
            <Table column={Columns} data={data} />
          </Container>
        </Grid>
      </Box>
    </div>
  );
};

export default MeetLink;
