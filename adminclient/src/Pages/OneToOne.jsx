import React, { useState, useEffect } from "react";
import MaterialTable from "material-table";
import { Box, Button, Container, Typography, Grid } from "@material-ui/core";
import ClassroomActions from "./ClassroomActions";
import { useHistory } from "react-router";
import { classroomData } from "../Helpers/classroomData";
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

const OneToOne = () => {
  const classes = useStyles();

  const history = useHistory();
  const [data, setData] = useState();
  useEffect(() => {
    setData(classroomData);
  }, []);

  const handleAddNewClassroom = () => {
    history.push("/classroom/create");
  };
  const Columns = [
    { title: "Name", field: "DclassName" },
    { title: "Teacher", field: "teacher" },
    { title: "Student", field: "student" },
    {
      title: "Lectures Completed",
      field: "LecturesComplete",
      render: (row) => <div>Hello</div>,
    },
    {
      title: "Actions",
      field: "name",
      render: (row) => (
        <div>
          <ClassroomActions />
        </div>
      ),
    },
  ];
  return (
    <div>
      <Container>
        <Box display="flex" justifyContent="center">
          <Grid item lg={10}>
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
                <Box
                  display="flex"
                  justifyContent="space-between"
                  // style={{ paddingBottom: "5%" }}
                >
                  <Typography className={classes.title}>CLASSROOM</Typography>

                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={handleAddNewClassroom}
                  >
                    Add new Classroom
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
                    border: "0.5px solid 	 #e6e6ff",
                  },
                  rowStyle: (rowData) => ({
                    backgroundColor:
                      rowData.tableData.id % 2 === 0 ? "#FFF" : "#e6f9ff",
                    fontWeight: "600",
                    fontSize: "1rem",
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
          </Grid>
        </Box>
      </Container>
    </div>
  );
};

export default OneToOne;
