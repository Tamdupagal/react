import React from "react";
import Tooltip from "@material-ui/core/Tooltip";
import { withStyles } from "@material-ui/core/styles";
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

const AttendanceReportActions = () => {
  
  return (
    <div>
     
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
        >
          <VisibilityIcon />
        </button>
      </LightTooltip>
      
    </div>
  );
};
export default AttendanceReportActions;
