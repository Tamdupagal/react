import { Button, Card, Divider } from '@material-ui/core'
import React from 'react'
import {useStyles} from "../../Styles/AddStudent"


const ImageCard = () => {
    const classes = useStyles()
    return (
        <div>
          <div className={classes.excelFile}>
            <Divider className={classes.dividerInset} />
            <h3 className={classes.subheading1}>IMPORT AN EXCEL FILE</h3>
          </div>
            <Card className={classes.excelFile}>
            <h5 style={{ marginLeft: "2%" }}>Choose Excel file</h5>
            <div style={{ justifyContent: "center", marginLeft: "2%" }}>
              <Card
                style={{
                  maxWidth: "98%",
                  alignItems: "center",
                }}
              >
                <input
                  type="file"
                  onChange={(e) => this.upload(e)}
                  name="img"
                  style={{ padding: "1%" }}
                />
              </Card>
            </div>
            <Button
              variant="contained"
              color="secondary"
              style={{ marginTop: "2%", marginLeft: "2%", marginBottom: "3%" }}
            >
              {" "}
              Submit file
            </Button>
          </Card>
        </div>
    )
}
export default ImageCard;