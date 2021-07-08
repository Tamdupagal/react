import React, { useContext } from "react";
import CreateIcon from "@material-ui/icons/Create";
import Tooltip from "@material-ui/core/Tooltip";
import HistoryIcon from "@material-ui/icons/History";
import DeleteIcon from "@material-ui/icons/Delete";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import VisibilityIcon from "@material-ui/icons/Visibility";
import { useHistory } from "react-router-dom";
import { deleteStudent, editStudentData } from "../action/actions";
import { AppContext } from "./../AppContext";

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

const StudentActions = (props) => {
  const history = useHistory();
  const { state, dispatch } = useContext(AppContext);
  const classes = useStyles();
  const handleEdit = () => {
    history.push({
      pathname: `/student/edit/${props.data._id}`,
      state: { data: props.data },
    });
    // console.log(props.data);
    // editStudentData(dispatch, props.data);
  };
  const handleDeleteStudent = () => {
    if (window.confirm("Delete the item?")) {
      deleteStudent(dispatch, props.data._id);
      history.push("/students");
    }
  };
  return (
    <div>
      <LightTooltip title="Edit Student" placement="top" arrow>
        <button
          size="small"
          style={{
            padding: "1%",
            marginRight: "3%",
            backgroundColor: "#17a2b8",
            color: "white",
            borderColor: "#17a2b8",
            borderRadius: "4px",
            fontSize: "small",
          }}
          onClick={handleEdit}
        >
          {/* {props.data} */}
          <VisibilityIcon />
        </button>
      </LightTooltip>
      <LightTooltip title="Student's History" placement="top" arrow>
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
          onClick={handleDeleteStudent}
        >
          <DeleteIcon />
        </button>
      </LightTooltip>
    </div>
  );
};
export default StudentActions;
