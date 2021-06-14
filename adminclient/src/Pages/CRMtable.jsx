import React, { useState, useEffect } from "react";
import { Box, Button, Container, Typography } from "@material-ui/core";
import { useHistory } from "react-router";
import { makeStyles } from "@material-ui/core/styles";
import Table from '../Components/Table/Table'
import {CRMData ,CrmColumn} from '../Helpers/CRMData'

const useStyles = makeStyles({
  tableRow: { "&:hover": { backgroundColor: "#fafaf2 !important" } },
  title: {
    fontSize: "2rem",
    fontWeight: "700",
    fontFamily: "KoHo, sans-serif",
  },
});

const CRMtable = () => {
  const classes = useStyles();

  const history = useHistory();
  const [data, setData] = useState();
  useEffect(() => {
    setData(CRMData);
  }, []);

  
  return (
    <div>
      <div>
        <Container>
          <Container
            style={{
              border: "1px solid #e6e6ff",
              borderBottom: "white",
              backgroundColor: "white",
              padding: "1%",
              borderTopLeftRadius: "10px",
              borderTopRightRadius: "10px",
            }}
          >
            <Box display="flex" justifyContent="space-between">
              <Typography className={classes.title}>CRM users</Typography>

              <Button
                variant="contained"
                color="secondary"
                // onClick={handleAddNewClassroom}
              >
                ADD NEW CRM USER
              </Button>
            </Box>
          </Container>
        </Container>
        <Container>
          {" "}
          <Table data={CRMData()} column={CrmColumn()}/>
        </Container>
      </div>
    </div>
  );
};

export default CRMtable;
