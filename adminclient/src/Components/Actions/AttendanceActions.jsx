import { Button } from '@material-ui/core'
import React from 'react'
import CreateIcon from "@material-ui/icons/Create";


export const AttendanceActions = () => {
    return (
        <div style={{ fontWeight: "700" }}>
          <Button
            variant="contained"
            style={{
              backgroundColor: "#17a2b8",
              padding: "2%",
              color: "white",
              fontSize: "small",
            }}
            // onClick={handleAttendanceReport}
          >
            <CreateIcon /> View Attendance Report
          </Button>
        </div>
    )
}
