import React, { useState, useEffect } from "react";
import MaterialTable from "material-table";
import { Box, Button, Container, Typography } from "@material-ui/core";
import CRMActions from "./../Actions/CRMActions";
import { useHistory } from "react-router";
import { CRMData } from "./../../Helpers/CRMData";
import { MTableBodyRow } from "material-table";
import { makeStyles } from "@material-ui/core/styles";

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
                style={{ fontFamily: "'Exo', sans-serif" }}
              >
                ADD NEW CRM USER
              </Button>
            </Box>
          </Container>
        </Container>
        <Container>
          {" "}
          <MaterialTable
            title=""
            data={data}
            columns={Columns}
            style={{ borderTopLeftRadius: "0px", borderTopRightRadius: "0px" }}
            options={{
              exportButton: true,
              headerStyle: {
                border: "0.5px solid 	 #e6e6ff",
                backgroundColor: "#007399",
                color: "white",
                fontSize: "1.2rem",
                fontWeight: "800",
                fontFamily: "KoHo, sans-serif",
                letterSpacing: "0.07rem",
              },
              cellStyle: {
                border: "0.5px solid white",
              },
              rowStyle: (rowData) => ({
                backgroundColor:
                  rowData.tableData.id % 2 === 0 ? "#FFF" : "#e6f9ff",
                fontWeight: "600",
                fontSize: "1rem",
                maxWidth: "2vw",
                color: "#000",
                rowStyle: "	 #e6e6ff",
              }),
            }}
            components={{
              Row: (props) => (
                <MTableBodyRow className={classes.tableRow} {...props} />
              ),
            }}
          />
        </Container>
      </div>
    </div>
  );
};

export default CRMtable;
