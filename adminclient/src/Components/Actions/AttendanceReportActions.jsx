import React from "react";
import Tooltip from "@material-ui/core/Tooltip";
import { withStyles } from "@material-ui/core/styles";
import VisibilityIcon from "@material-ui/icons/Visibility";
import { useHistory, useParams } from "react-router-dom";

const LightTooltip = withStyles((theme) => ({
  tooltip: {
    backgroundColor: theme.palette.common.white,
    color: "rgba(0, 0, 0, 0.87)",
    boxShadow: theme.shadows[1],
    fontSize: 15,
    fontWeight: "500",
  },
}))(Tooltip);

const AttendanceReportActions = (props) => {
  const history = useHistory()
  const {id} = useParams()
  const handleVisibility = () => {
    history.push({
      pathname: `/view-attendance-report/${id}/lectures/${props.data.id}`,
      state: {data:props.data,length:props.length}
    })
  }
  console.log(props.data.id)
  return (
    <div>
     
      <LightTooltip title="View Report" placement="top" arrow>
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
          onClick={handleVisibility}
        >
          <VisibilityIcon />
        </button>
      </LightTooltip>
      
    </div>
  );
};
export default AttendanceReportActions;
