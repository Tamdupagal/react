import React, { useEffect, useState, useContext } from "react";
import CreateIcon from "@material-ui/icons/Create";
import AddIcon from "@material-ui/icons/Add";
import Tooltip from "@material-ui/core/Tooltip";
import HistoryIcon from "@material-ui/icons/History";
import DeleteIcon from "@material-ui/icons/Delete";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router";
import AddNewClassroom from "./../../Pages/AddNewClassroom";
import clsx from "clsx";
// import Classroom from "./../../CRUD/Classroom";

const LightTooltip = withStyles((theme) => ({
  tooltip: {
    backgroundColor: theme.palette.common.white,
    color: "rgba(0, 0, 0, 0.87)",
    boxShadow: theme.shadows[1],
    fontSize: 15,
    fontWeight: "500",
  },
}))(Tooltip);

const useStyles = makeStyles({
  root: {
    width: 500,
  },
  tooltip: {
    padding: "0%",
    marginRight: "3%",
    color: "white",
    borderRadius: "4px",
    fontSize: "small",
  },
  edit: {
    backgroundColor: "#5567ff",
    borderColor: "#5567ff",
  },
});

const ClassroomActions = (props) => {
  const history = useHistory();
  const handleAddLecture = () => {
    history.push("/add-lecture");
  };
  const handleViewHistory = () => {
    history.push("classrooms/timeline");
  };
  const handleEdit = (data) => {
    history.push("/classroom/edit");
    // props.handleEditClassroom(data);
  };
  // const handleDelete = (data) => {
  //   console.log(data);
  //   if (window.confirm("Delete the item?")) {
  //     Classroom.remove(data._id)
  //       .then((res) => {
  //         console.log("deleted");
  //       })
  //       .catch((e) => {
  //         console.log(e);
  //       });
  //   }
  //   // history.push()
  // };
  // const handleRefresh = () =>{
  //   window.location.refresh()
  // }

  const classes = useStyles();
  return (
    <div display="flex" justifycontent="space-around" className={classes.root}>
      <LightTooltip title="Edit Classroom" placement="top" arrow>
        <button
          size="small"
          className={clsx(classes.tooltip, classes.edit)}
          onClick={() => {
            handleEdit();
          }}
        >
          <CreateIcon />
        </button>
      </LightTooltip>
      <LightTooltip title="Add Lecture" placement="top" arrow>
        <button
          size="small"
          style={{
            padding: "0%",
            marginRight: "3%",
            backgroundColor: "#77c13a",
            color: "white",
            borderColor: "#77c13a",
            borderRadius: "4px",
            fontSize: "small",
          }}
          onClick={handleAddLecture}
        >
          <AddIcon />
        </button>
      </LightTooltip>
      <LightTooltip title="View Classroom History" placement="top" arrow>
        <button
          size="small"
          style={{
            padding: "0%",
            marginRight: "3%",
            backgroundColor: "#5567ff",
            color: "white",
            borderColor: "#5567ff",
            borderRadius: "4px",
            fontSize: "small",
          }}
          onClick={handleViewHistory}
        >
          <HistoryIcon />
        </button>
      </LightTooltip>
      <LightTooltip title="Delete" placement="top" arrow>
        <button
          size="small"
          style={{
            padding: "0%",
            marginRight: "3%",
            backgroundColor: "#d9534f",
            color: "white",
            borderColor: "#d9534f",
            borderRadius: "4px",
            fontSize: "small",
          }}
          // onClick={() => {
          //   handleDelete(props.data);
          // }}
        >
          <DeleteIcon />
        </button>
      </LightTooltip>
    </div>
  );
};
export default ClassroomActions;
