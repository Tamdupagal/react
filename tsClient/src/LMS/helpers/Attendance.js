export const COLUMNS = [
    {
        Header: 'Classroom',
        accessor: 'name'
    },
    {
        Header: 'No. of students',
        accessor: 'no'
    },
    {
        Header: 'Status',
        accessor: 'status'
    },
    {
        Header : 'Action'
    },
]
export const ATTENDANCE_DATA = (data) => {
    if (!data) return
    return data.classrooms.map(item => ({
        name: item.name,
        status: item.status,
        type: item.classroom_type,
        no: Object.keys(item.enrolled_students).length,
    }))
}

// export const ATTENDANCE_DATA = (data) => {
//     if (!data) return
//     return data.map(item:)
// }