export const COLUMNS = [
    {
        Header: 'Timing',
        accessor: 'timing'
    },
    
    {
        Header: 'Meeting Link',
        accessor: 'link',
        Cell: props => {
           
            return (
               props.value ? <a href={props.value}>{(props.value)}</a> : '____empty____'
            )
        },
    },
    {
        Header: 'Attendance marked',
        accessor: 'marked'
    },
    {
        Header: 'Active',
        accessor: 'active'
    },
    {
        Header: 'Status',
        accessor: 'status'
    },
]

export const LECTURE_DATA = (data) => {
    if (!data) return
    return data.map(item => ({
        timing: new Date(item.date_and_time).toLocaleString('en-US', {dateStyle: "short" , timeStyle: "short"}),
        link: item.crm_meeting_link,
        marked: String(item.is_attendance_marked),
        active: String(item.is_active),
        status : item.status
    }))
}