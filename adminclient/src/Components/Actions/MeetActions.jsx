import React, { useContext } from "react";
import CreateIcon from "@material-ui/icons/Create";
import Tooltip from "@material-ui/core/Tooltip";
import DeleteIcon from "@material-ui/icons/Delete";
import { withStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
import { deleteMeetLink } from "../../action/actions";
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

const MeetActions = (props) => {
  const {dispatch} = useContext(AppContext)
  const handleDeleteMeetLink = () => {
    if(window.confirm("Delete the Link")){
      deleteMeetLink(dispatch,props.data._id)
    }
  }
  
  return (
    <div>
      <LightTooltip title="Edit link" placement="top" arrow>
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
          onClick={()=>props.handleEditOpen(props.data)}
        >
          <CreateIcon />
        </button>
      </LightTooltip>
      {/* <LightTooltip title="Reset Password" placement="top" arrow>
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
      </LightTooltip> */}
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
      <LightTooltip title="Delete link" placement="top" arrow>
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
          onClick={handleDeleteMeetLink}
        >
          <DeleteIcon />
        </button>
      </LightTooltip>
      {/* <div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
        >
          {body}
        </Modal>
      </div> */}
    </div>
  );
};
export default MeetActions;
