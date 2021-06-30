import React, { useEffect, useContext } from "react";
import { Box, Button, Container, Typography } from "@material-ui/core";
import { useHistory } from "react-router";
import { AdminColumn, AdminData } from "./../../Helpers/AdminData";
import { makeStyles } from "@material-ui/core/styles";
import { AppContext } from "./../../AppContext";
import { getAllAdmins } from "../../action/actions";
import CircularProgress from "@material-ui/core/CircularProgress";
import Table from "./../Table/Table";

const useStyles = makeStyles({
  tableRow: { "&:hover": { backgroundColor: "#fafaf2 !important" } },
  title: {
    fontSize: "2rem",
    fontWeight: "700",
    fontFamily: "KoHo, sans-serif",
  },
});

const AdminUsers = () => {
  const classes = useStyles();

  const history = useHistory();
  const { state, dispatch } = useContext(AppContext);
  let ADMIN_DATA = state?.adminData;

  const handleAddAdmin = () => {
    history.push("/add-admin");
  };

  useEffect(() => {
    getAllAdmins(dispatch);
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
              <Typography className={classes.title}>Admin Users</Typography>

              <Button
                variant="contained"
                color="secondary"
                onClick={handleAddAdmin}
                style={{ fontFamily: "'Exo', sans-serif" }}
              >
                ADD NEW ADMIN
              </Button>
            </Box>
          </Container>
        </Container>
        <Container>
          {ADMIN_DATA.isLoading ? (
            <CircularProgress />
          ) : ADMIN_DATA.anyError ? (
            <div>Ops! Data could not be loaded, try again .</div>
          ) : (
            <Table data={AdminData(state)} column={AdminColumn(true)} />
          )}
        </Container>
      </div>
    </div>
  );
};

export default AdminUsers;
