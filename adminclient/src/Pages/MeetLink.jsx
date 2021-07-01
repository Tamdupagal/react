import React from "react";
import { Box, Button, Container, Typography, Grid } from "@material-ui/core";
import { useHistory } from "react-router";
import { makeStyles } from "@material-ui/core/styles";
import Table from "../Components/Table/Table";
import MeetActions from "./../Components/Actions/MeetActions";
import AddMeet from "./AddMeet";
import Modal from "@material-ui/core/Modal";

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
                <Typography className={classes.title}> Meet Link </Typography>

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
            <Table column={Columns} />
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
