import React, { useContext } from "react";
import CreateIcon from "@material-ui/icons/Create";
import Tooltip from "@material-ui/core/Tooltip";
import DeleteIcon from "@material-ui/icons/Delete";
import { withStyles } from "@material-ui/core/styles";
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

const LectureActions = (props) => {
  const { cid } = useParams();
  const { dispatch } = useContext(AppContext);
  const history = useHistory();
  const handleEdit = () => {
    history.push({
      pathname: `/${cid}/edit-lecture/${props.data._id}`,
      state: { data: props.data },
    });
  };
  const handleDelete = () => {
    if (window.confirm("Delete the Lecture?")) {
      deleteLecture(dispatch, cid, props.data._id);
    }
  };
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
