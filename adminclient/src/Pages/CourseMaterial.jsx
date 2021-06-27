import React, { useState, useEffect } from "react";
import MaterialTable from "material-table";
import { Box, Button, Container, Typography } from "@material-ui/core";
import CourseMaterialActions from "./../Components/Actions/CourseMaterialActions";
import { useHistory } from "react-router";
import { CourseMaterialdata } from "./../Helpers/CourseMaterialdata";
import { MTableBodyRow } from "material-table";
import { makeStyles } from "@material-ui/core/styles";
import VisibilityOutlinedIcon from "@material-ui/icons/VisibilityOutlined";

const useStyles = makeStyles({
  tableRow: { "&:hover": { backgroundColor: "#fafaf2 !important" } },
  title: {
    fontSize: "2rem",
    fontWeight: "700",
    fontFamily: "KoHo, sans-serif",
  },
});

const CourseMaterial = () => {
  const classes = useStyles();
  const history = useHistory();

  const handleAddNewMaterial = () => {
    history.push("/add-materail");
  };

  const [data, setData] = useState();
  useEffect(() => {
    setData(CourseMaterialdata);
  }, []);

  const col = [
    { title: "Name", field: "name" },
    { title: "Topic #", field: "topic" },
    {
      title: "Material",
      field: "",
      render: (row) => (
        <div>
          <Button
            variant="outlined"
            color="primary"
            startIcon={<VisibilityOutlinedIcon />}
          >
            VIEW MATERIAL
          </Button>
        </div>
      ),
    },
    {
      title: "Actions",
      field: "name",
      render: (row) => (
        <div>
          <CourseMaterialActions data={row} />
        </div>
      ),
    },
  ];
  return (
    <div>
      <div>
        <Container style={{ marginBottom: "20vh" }}>
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
                <Typography className={classes.title}>
                  Course-Materials
                </Typography>

                <Button
                  variant="contained"
                  color="secondary"
                  onClick={handleAddNewMaterial}
                >
                  ADD NEW MATERIAL
                </Button>
              </Box>
            </Container>
          </Container>
          <Container>
            {" "}
            <MaterialTable
              title=""
              data={data}
              columns={col}
              style={{
                borderTopLeftRadius: "0px",
                borderTopRightRadius: "0px",
              }}
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
        </Container>
      </div>
    </div>
  );
};

export default CourseMaterial;
