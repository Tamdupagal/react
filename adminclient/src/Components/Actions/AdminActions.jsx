import React, { useContext } from "react";
import CreateIcon from "@material-ui/icons/Create";
import Tooltip from "@material-ui/core/Tooltip";
import DeleteIcon from "@material-ui/icons/Delete";
import { withStyles } from "@material-ui/core/styles";
import LockRoundedIcon from "@material-ui/icons/LockRounded";
import { useHistory } from "react-router-dom";
import { AppContext } from "./../../AppContext";
import { deleteAdmin } from "../../action/actions";

const LightTooltip = withStyles((theme) => ({
  tooltip: {
    backgroundColor: theme.palette.common.white,
    color: "rgba(0, 0, 0, 0.87)",
    boxShadow: theme.shadows[1],
    fontSize: 15,
    fontWeight: "500",
  },
}))(Tooltip);

const AdminActions = (props) => {
  const history = useHistory();
  const { dispatch } = useContext(AppContext);

  const handleEdit = () => {
    history.push({
      pathname: `/edit-admin/${props.data._id}`,
      state: { data: props.data },
    });
  };
  const handleDelete = () => {
    if (window.confirm("Delete the item?")) {
      deleteAdmin(dispatch, props.data._id);
      history.push("/operations");
    }
  };
  return (
    <div>
      {/* <Link to={{
        pathname: `/edit-admin/${props.data._id}`,
        state: {data:props.data}
        }}> */}
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
      {/* </Link> */}
      <LightTooltip title="Reset Password" placement="top" arrow>
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
          <LockRoundedIcon />
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
export default AdminActions;
