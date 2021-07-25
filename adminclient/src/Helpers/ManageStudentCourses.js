import React from "react";
import ManageStudentCourseActions from "./../Components/Actions/ManageStudentCourseActions"

// let courseLength = 0
// const renderCourseLength = (item) => {
    //     let courseLength = 0
    //     item.classrooms.map(c=>courseLength+=parseInt(Object.keys(c.enrolledCourses).length))
    //     console.log(courseLength)
    //     return courseLength;
    
    // }
    export const ManageStudentCourseData = (courses) => {
        let course=[]
        let allCourse=[]
        // console.log(courses)
        // course=courses.classrooms.map(c=>Object.keys(c.enrolled_courses))
        // course.forEach(c => {
        //     c.forEach(data=>{
        //         allCourse.push({name:data})
        //     })  
        // })
        // return allCourse


    }
  

export const ManageStudentCourseColumn = () => {
    return [
        { title: "Course", field: "name" },
        {
          title: "Actions",
          field: "name",
          render: (row) => (
            <div>
              <ManageStudentCourseActions/>
            </div>
          ),
        },
      ];

}
