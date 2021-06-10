import backpack from '../assets/backpack.svg'
import schedule from '../assets/schedule.svg'
import document from '../assets/document.svg'
import notes from '../assets/notes.svg'
import bookshelf from '../assets/bookshelf.svg'


export const sideNavData = [
    {},
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
        route : '/bag'
    },
]