import React, { useContext } from "react";
import CreateIcon from "@material-ui/icons/Create";
import Tooltip from "@material-ui/core/Tooltip";
import DeleteIcon from "@material-ui/icons/Delete";
import { withStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
import { AppContext } from "../../AppContext";
import { deleteTrainer } from "../../action/actions";

const LightTooltip = withStyles((theme) => ({
  tooltip: {
    backgroundColor: theme.palette.common.white,
    color: "rgba(0, 0, 0, 0.87)",
    boxShadow: theme.shadows[1],
    fontSize: 15,
    fontWeight: "500",
  },
}))(Tooltip);

const TrainersActions = (props) => {
  const history = useHistory()
  const {state, dispatch} = useContext(AppContext)
  const handleEditTrainer = () => {
    history.push({
      pathname: `/trainer/edit/${props.data._id}`,
      state: {data: props.data}
    })
  }
  const handleDelete = () => {
    if(window.confirm("Delete the trainer"))
    {
      deleteTrainer(dispatch,props.data._id)
      history.push("/trainers")
    }
  }
  return (
    <div>
      <LightTooltip title="Edit Trainer" placement="top" arrow>
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
          onClick={handleEditTrainer}
        >
          <CreateIcon />
        </button>
      </LightTooltip>
      <LightTooltip title="Delete Trainer" placement="top" arrow>
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
export default TrainersActions;
