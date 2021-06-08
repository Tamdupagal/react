import React from "react";
import CreateIcon from "@material-ui/icons/Create";
import AddIcon from "@material-ui/icons/Add";
import Tooltip from "@material-ui/core/Tooltip";
import HistoryIcon from "@material-ui/icons/History";
import DeleteIcon from "@material-ui/icons/Delete";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    width: 500,
  },
});

const ClassroomActions = () => {
  const classes = useStyles();
  return (
    <div display="flex" justifycontent="space-around" className={classes.root}>
      <Tooltip title="Edit Classroom" placement="top">
        <button
          size="small"
          style={{
            padding: "0%",
            marginRight: "3%",
            backgroundColor: "#17a2b8",
            color: "white",
            borderColor: "#17a2b8",
            borderRadius: "4px",
            fontSize: "small",
          }}
        >
          <CreateIcon />
        </button>
      </Tooltip>
      <Tooltip title="Add Lecture" placement="top">
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
        >
          <AddIcon />
        </button>
      </Tooltip>
      <Tooltip title="View Classroom History" placement="top">
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
        >
          <HistoryIcon />
        </button>
      </Tooltip>
      <Tooltip title="Delete" placement="top">
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
        >
          <DeleteIcon />
        </button>
      </Tooltip>
    </div>
  );
};
export default ClassroomActions;
