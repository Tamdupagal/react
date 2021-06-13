import React from "react";
import CreateIcon from "@material-ui/icons/Create";
import AddIcon from "@material-ui/icons/Add";
import Tooltip from "@material-ui/core/Tooltip";
import HistoryIcon from "@material-ui/icons/History";
import DeleteIcon from "@material-ui/icons/Delete";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import VisibilityIcon from "@material-ui/icons/Visibility";

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
});

const ClassroomActions = () => {
  const classes = useStyles();
  return (
    <div display="flex" justifycontent="space-around" className={classes.root}>
      <LightTooltip title="Teacher Details" placement="top" arrow>
        <button
          size="small"
          style={{
            padding: "1%",
            marginRight: "3%",
            backgroundColor: "#17a2b8",
            color: "white",
            borderColor: "#17a2b8",
            borderRadius: "4px",
            fontSize: "large",
            fontWeight: "700",
          }}
        >
          <div Style={{ fontWeight: "700" }}>DETAIL</div>
        </button>
      </LightTooltip>
      <LightTooltip title="View and Edit Teacher" placement="top" arrow>
        <button
          size="small"
          style={{
            padding: "1%",
            marginRight: "3%",
            backgroundColor: "#77c13a",
            color: "white",
            borderColor: "#77c13a",
            borderRadius: "4px",
            fontSize: "small",
          }}
        >
          <VisibilityIcon />
        </button>
      </LightTooltip>
      <LightTooltip title="Teacher's History" placement="top" arrow>
        <button
          size="small"
          style={{
            padding: "1%",
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
      </LightTooltip>
      <LightTooltip title="Delete" placement="top" arrow>
        <button
          size="small"
          style={{
            padding: "1%",
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
      </LightTooltip>
    </div>
  );
};
export default ClassroomActions;
