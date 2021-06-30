import React from "react";
import StudentCoursesActions from "./../Components/Actions/StudentCoursesActions"

// let courseLength = 0
// const renderCourseLength = (item) => {
    //     let courseLength = 0
    //     item.classrooms.map(c=>courseLength+=parseInt(Object.keys(c.enrolledCourses).length))
    //     console.log(courseLength)
    //     return courseLength;
    
    // }
    export const StudentCourseData = (state) => {
        return state.studentCoursesData.studentCourses
    }
  

export const StudentCourseColumn = () => {
    const col = [
        { title: "Name", field: "name" },
        { title: "Email", field: "email" },
        {
          title: "Course Assigned",
          field: "courseAssigned",render: (row) => (
            <div>

                {/* {()=>renderCourseLength(row)} */}
            </div>
        
          )
        },
        {
          title: "Classroom/s",
          field: "classrooms",render: (row) => (
              <div>
                  {row.classrooms.map(c=>c.name+",")}
              </div>
          )
        },
        {
          title: "Actions",
          field: "name",
          render: (row) => (
            <StudentCoursesActions/>
          ),
        },
      ];

      return col
}
