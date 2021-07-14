import React, { useEffect, useContext,useState } from "react";
import { Box, Button, Container, Typography } from "@material-ui/core";
import { useHistory } from "react-router";
import { AdminColumn, AdminData } from "./../../Helpers/AdminData";
import { makeStyles } from "@material-ui/core/styles";
import { AppContext } from "./../../AppContext";
import { getAllAdmins } from "../../action/actions";
import CircularProgress from "@material-ui/core/CircularProgress";
import Table from "./../Table/Table";
import ResetPassword1 from "../../Pages/ResetPassword1";
import { useParams } from "react-router-dom";

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
    padding: "2%",
    borderTopLeftRadius: "10px",
    borderTopRightRadius: "10px",
  },
});

const AdminUsers = () => {
  const classes = useStyles();
  const {id} = useParams()
  const history = useHistory();
  const { state, dispatch } = useContext(AppContext);
   const [open, setOpen] = useState(id?true:false);
   useEffect(() => {
     getAllAdmins(dispatch);
   }, []);
  
  const handleAdminOpen = (data) => {
    console.log(data._id)
    setOpen(true);
    history.push({
      pathname: `/resetPassword/${data._id}`
    })
  };

  const handleAdminClose = () => {
    setOpen(false);
  };
  let ADMIN_DATA = state?.adminData;
 
  const handleAddAdmin = () => {
    history.push("/add-admin");
  };


  return (
    <div>
      <div>
        <Container>
          <Container className={classes.container}>
            <Box display="flex" justifyContent="space-between">
              <Typography className={classes.title}>Admin Users</Typography>

              <Button
                variant="contained"
                color="secondary"
                onClick={handleAddAdmin}
                size="small"
                style={{ fontFamily: "'Exo', sans-serif" }}
              >
                ADD NEW ADMIN
              </Button>
              <ResetPassword1 handleAdminClose={handleAdminClose} open={open}/>
            </Box>
          </Container>
        </Container>
        <Container>
          {ADMIN_DATA.isLoading ? (
            <CircularProgress />
          ) : ADMIN_DATA.anyError ? (
            <div>Ops! Data could not be loaded, try again .</div>
          ) : (
            <Table data={AdminData(state)} column={AdminColumn(handleAdminOpen,handleAdminClose)} />
          )}
        </Container>
      </div>
    </div>
  );
};

export default AdminUsers;
