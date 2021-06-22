import React, { useContext, useEffect } from "react";
import Tooltip from "@material-ui/core/Tooltip";
import HistoryIcon from "@material-ui/icons/History";
import DeleteIcon from "@material-ui/icons/Delete";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import VisibilityIcon from "@material-ui/icons/Visibility";
import { useHistory } from "react-router";
import { deleteTeacher, editTeacherData } from "../../action/actions";
import { AppContext } from "./../../AppContext";

const LightTooltip = withStyles((theme) => ({
  tooltip: {
    backgroundColor: theme.palette.common.white,
    color: "rgba(0, 0, 0, 0.87)",
    boxShadow: theme.shadows[1],
    fontSize: 15,
    fontWeight: "500",
  },
}))(Tooltip);

const useStyles = makeStyles({});

const TeacherActions = (props) => {
  const classes = useStyles();
  const history = useHistory();
  const { state, dispatch } = useContext(AppContext);

  const handleTeacherDetail = () => {
    history.push("/teacher-details");
    editTeacherData(dispatch, props.data);
  };
  const handleEdit = () => {
    history.push("/edit-teacher");
    editTeacherData(dispatch, props.data);
  };
  const handleDeleteTeacher = () => {
    if (window.confirm("Delete the item?")) {
      deleteTeacher(dispatch, props.data._id);
    }
  };
  return (
    <div>
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
          onClick={handleTeacherDetail}
        >
          <div style={{ fontWeight: "700" }}>DETAIL</div>
        </button>
      </LightTooltip>
      <LightTooltip title="Edit Teacher" placement="top" arrow>
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
          onClick={handleEdit}
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
          onClick={handleDeleteTeacher}
        >
          <DeleteIcon />
        </button>
      </LightTooltip>
    </div>
  );
};
export default TeacherActions;
