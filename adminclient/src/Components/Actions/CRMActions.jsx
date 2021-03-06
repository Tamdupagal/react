import React from "react";
import CreateIcon from "@material-ui/icons/Create";
import Tooltip from "@material-ui/core/Tooltip";
import DeleteIcon from "@material-ui/icons/Delete";
import { withStyles } from "@material-ui/core/styles";
import LockRoundedIcon from "@material-ui/icons/LockRounded";
import { useHistory } from "react-router-dom";

const LightTooltip = withStyles((theme) => ({
  tooltip: {
    backgroundColor: theme.palette.common.white,
    color: "rgba(0, 0, 0, 0.87)",
    boxShadow: theme.shadows[1],
    fontSize: 15,
    fontWeight: "500",
  },
}))(Tooltip);

const CRMActions = (props) => {
  const history = useHistory();
 
  // const body = <ResetPassword1 handleClose={handleClose} open={open}/>;

  return (
    <div>
      <LightTooltip title="Edit" placement="top" arrow>
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
          <CreateIcon />
        </button>
      </LightTooltip>
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
          onClick={()=>props.handleCrmOpen()}
        >
          <LockRoundedIcon />
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
export default CRMActions;
