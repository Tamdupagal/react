import React from 'react'
import CreateIcon from '@material-ui/icons/Create';
import AddIcon from '@material-ui/icons/Add';
import VisibilityIcon from '@material-ui/icons/Visibility';
import DeleteIcon from '@material-ui/icons/Delete';

const ClassroomActions = () => {
    return (
        <div display="flex" justifycontent="space-around">
            <button size="small" style={{padding:"0%",marginRight:"3%",backgroundColor:"#17a2b8",color:"white",borderColor:"#17a2b8",borderRadius:"4px",fontSize:"small"}}><CreateIcon/></button>
            <button size="small" style={{padding:"0%",marginRight:"3%",backgroundColor:"#77c13a",color:"white",borderColor:"#77c13a",borderRadius:"4px",fontSize:"small"}}><AddIcon/></button>
            <button size="small" style={{padding:"0%",marginRight:"3%",backgroundColor:"#5567ff",color:"white",borderColor:"#5567ff",borderRadius:"4px",fontSize:"small"}}><VisibilityIcon/></button>
            <button size="small" style={{padding:"0%",marginRight:"3%",backgroundColor:"#d9534f",color:"white",borderColor:"#d9534f",borderRadius:"4px",fontSize:"small"}}><DeleteIcon/></button>            
        </div>
    )
}
export default ClassroomActions;
