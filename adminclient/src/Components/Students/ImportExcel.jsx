import { Button, Card, Divider } from '@material-ui/core'
import React, { useContext, useState } from 'react'
import { addStudentUsingExcelFile } from '../../action/actions'
import { AppContext } from '../../AppContext'
import {useStyles} from "../../Styles/AddStudent"


const ImageCard = () => {
    const classes = useStyles()
    const {dispatch} = useContext(AppContext)
     const [state,setState] = useState({
      selectedFile: null
    })

    const onFileChange = event => { 
      // Update the state 
      setState({ selectedFile: event.target.file }); 
    } 
     
    const onFileUpload = () => { 
      const formData = new FormData()
      formData.append("excel",state.selectedFile)
      addStudentUsingExcelFile(dispatch,formData)
    }; 
    return (
        <div>
          <div className={classes.excelFile}>
            <Divider className={classes.dividerInset} />
            <h3 className={classes.subheading1}>IMPORT AN EXCEL FILE</h3>
          </div>
            <Card className={classes.excelFile}>
            <h5 className={classes.infoHeading1}>Choose Excel file</h5>
            <div style={{ justifyContent: "center", marginLeft: "2%" }}>
              <Card
                style={{
                  maxWidth: "98%",
                  alignItems: "center",
                }}
              >
                <input
                  type="file"
                  onChange={(e) => onFileChange(e)}
                  name="img"
                  style={{ padding: "1%" }}
                />
              </Card>
            </div>
            <Button
              variant="contained"
              color="secondary"
              style={{ marginTop: "2%", marginLeft: "2%", marginBottom: "3%" }}
              onClick={onFileUpload}
            >
              {" "}
              Submit file
            </Button>
          </Card>
        </div>
    )
}
export default ImageCard;