import React, { useContext } from "react";
import CreateIcon from "@material-ui/icons/Create";
import AddIcon from "@material-ui/icons/Add";
import Tooltip from "@material-ui/core/Tooltip";
import HistoryIcon from "@material-ui/icons/History";
import DeleteIcon from "@material-ui/icons/Delete";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import VisibilityIcon from "@material-ui/icons/Visibility";
import { useHistory, useParams } from "react-router-dom";
import { deleteLecture } from "../../action/actions";
import { AppContext } from "../../AppContext";

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
const LectureActions = (props) => {
  const classes = useStyles();
  const { cid } = useParams()
  const { state, dispatch } = useContext(AppContext);
  const history = useHistory()
  const handleEdit = () => {
      history.push({
        pathname:`/${cid}/edit-lecture/${props.data._id}`,
        state: {data: props.data}
      }
      )
  }
  const handleDelete = () => {
    if(window.confirm("Delete the Lecture?")){
      deleteLecture(dispatch,cid,props.data._id)
    }
  }
  return (
    <div>
      <LightTooltip title="Edit" placement="top" arrow>
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
          <CreateIcon />
        </button>
      </LightTooltip>
      {/* <Tooltip title="Add Lecture" placement="top">
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
      </Tooltip> */}
      {/* <Tooltip title="Student's History" placement="top">
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
      </Tooltip> */}
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
          onClick={handleDelete}
        >
          <DeleteIcon />
        </button>
      </LightTooltip>
    </div>
  );
};
export default LectureActions;
