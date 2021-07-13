import React from "react";
import StudentCoursesActions from "./../Components/Actions/StudentCoursesActions"

export const StudentCourseData = (state) => {
    return state.studentCoursesData.studentCourses
}
  
const courseLength = (row) => {
  let course=[]
  let allCourse=[]
  // course=row.classrooms?.map(c=>Object.keys(c.enrolled_courses))
  // course.forEach(c => {
  //     c.forEach(data=>{
  //         allCourse.push({name:data})
  //     })
  // })
  // return allCourse.length
}

export const StudentCourseColumn = () => {
    const col = [
        { title: "Name", field: "name" },
        { title: "Email", field: "email" },
        {
          title: "Course Assigned",
          field: "courseAssigned",render: (row) => (
            <div>
                {row.classroom? row.classroom.map(c=>Object.keys(c.enrolled_courses)).length: ""}
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
            <StudentCoursesActions data={row}/>
          ),
        },
      ];

      return col
}
