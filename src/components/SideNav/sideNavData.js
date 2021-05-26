import backpack from '../../images/backpack.svg'
import schedule from '../../images/schedule.svg'
import student from '../../images/student.svg'
import document from '../../images/document.svg'
import notes from '../../images/notes.svg'
import bookshelf from '../../images/bookshelf.svg'


export const sideNavData = [
    {
        ListItem: 'Utkarsh Agrawal',
        ListImage: student,
        route : '/dashboard'
    },
    {
        ListItem: 'Dashboard',
        ListImage: backpack,
        route : '/dashboard'
    },
    {
        ListItem: 'Attendance',
        ListImage: document,
        route : '/attendance'
    },
    {
        ListItem: 'Asignments',
        ListImage: document,
        route : '/assignment'
    },
    {
        ListItem: 'Course activites',
        ListImage: document,
        route : '/activities'
    },
    {
        ListItem: 'Notes',
        ListImage: notes,
        route : '/note'
    },
    {
        ListItem: 'Scheduler',
        ListImage: schedule,
        route : '/scheduler'
    },
    {
        ListItem: 'Library',
        ListImage: bookshelf,
        route : '/dashboard'
    },
]