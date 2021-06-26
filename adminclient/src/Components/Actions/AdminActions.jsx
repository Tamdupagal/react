import React,{useContext} from "react";
import CreateIcon from "@material-ui/icons/Create";
import AddIcon from "@material-ui/icons/Add";
import Tooltip from "@material-ui/core/Tooltip";
import HistoryIcon from "@material-ui/icons/History";
import DeleteIcon from "@material-ui/icons/Delete";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import VisibilityIcon from "@material-ui/icons/Visibility";
import LockRoundedIcon from "@material-ui/icons/LockRounded";
import { useHistory, Link } from "react-router-dom";
import { AppContext } from "./../../AppContext";
import { deleteAdmin, editAdminData } from "../../action/actions";


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

const AdminActions = (props) => {
  const classes = useStyles();
  const history = useHistory()
  const {state, dispatch} = useContext(AppContext)

  const handleEdit = () => {
    history.push(`/edit-admin/${props.data._id}`)
  }
  const handleDelete = () => {
    if(window.confirm("Delete the item?")){
      deleteAdmin(dispatch,props.data._id)
      history.push("/operations")
    }
  }
  return (
    <div>
      {/* <Link to={{
        pathname: `/edit-admin/${props.data._id}`,
        state: {name:props}
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
          <LockRoundedIcon />
        </button>
      </Tooltip>
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
export default AdminActions;
