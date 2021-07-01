import React, { useState, useEffect } from "react";
import MaterialTable from "material-table";
import { Box, Button, Container, Typography, Grid } from "@material-ui/core";
import MeetActions from "./../Components/Actions/MeetActions";
import { useHistory } from "react-router";
import { MeetData } from "./../Helpers/MeetData";
import { MTableBodyRow } from "material-table";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import AddMeet from "./AddMeet";

const useStyles = makeStyles({
  tableRow: { "&:hover": { backgroundColor: "#fafaf2 !important" } },
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
  const [open, setOpen] = React.useState(false);
  const [editOpen, setEditOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleEditClose = () => {
    setEditOpen(false);
  };

  const body = <AddMeet handleClose={handleClose} />;
  const [data, setData] = useState();
  useEffect(() => {
    setData(MeetData);
  }, []);

  const Columns = [
    { title: "Link Id", field: "Link" },
    { title: "Link", field: "LinkId" },
    { title: "Bookings", field: "Bookings" },
    {
      title: "Actions",
      field: "name",
      render: (row) => (
        <div>
          <MeetActions />
        </div>
      ),
    },
  ];
  return (
    <div>
      <Box
        display="flex"
        justifyContent="center"
        style={{ marginBottom: "20vh" }}
      >
        <Grid item xs={12} lg={10}>
          <Container>
            <Container className={classes.container}>
              <Box display="flex" justifyContent="space-between">
                <Typography className={classes.title}>Meet Table</Typography>

                <Button
                  variant="contained"
                  color="secondary"
                  onClick={handleOpen}
                  style={{ fontFamily: "'Exo', sans-serif" }}
                >
                  ADD NEW MEET LINK
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
        </Grid>
      </Box>
      <div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
        >
          {body}
        </Modal>
      </div>
      <div>
        <Modal
          open={editOpen}
          onClose={handleEditClose}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
        >
          {body}
        </Modal>
      </div>
    </div>
  );
};

export default MeetLink;
