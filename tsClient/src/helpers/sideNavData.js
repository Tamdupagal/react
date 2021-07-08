import backpack from '../assets/backpack.svg'
import schedule from '../assets/schedule.svg'
import document from '../assets/document.svg'
import notes from '../assets/notes.svg'
import bookshelf from '../assets/bookshelf.svg'
import live from '../assets/live.svg'
import course from '../assets/course.svg'
import certificate from '../assets/certification.png'
import lecture from '../assets/lecture.png'

export const TEACHER_SIDENAV = (path) => {
    if (path) {
        return [
            {},
            {
                ListItem: 'Dashboard',
                ListImage: backpack,
                route: `${path}/dashboard`
            },
            {
                ListItem: 'Attendance',
                ListImage: document,
                route: `${path}/attendance`
            },
            {
                ListItem: 'Lectures',
                ListImage: lecture,
                route: `${path}/lecture`
            },
            {
                ListItem: 'Asignments',
                ListImage: document,
                route: `${path}/assignment`
            },
            {
                ListItem: 'Course activites',
                ListImage: document,
                route: `${path}/activities`
            },
            {
                ListItem: 'Notes',
                ListImage: notes,
                route: `${path}/note`
            },
            {
                ListItem: 'Scheduler',
                ListImage: schedule,
                route: `${path}/scheduler`
            },
        ]
    }
    return []
}

export const STUDENT_SIDENAV = (path) => {
    if (path) {
        return [
            {},
            {
                ListItem: 'Your Bag',
                ListImage: backpack,
                route: `${path}/bag`
            },
            {
                ListItem: 'Courses',
                ListImage: course,
                route: `${path}/courses`
            },
            {
                ListItem: 'Live Class',
                ListImage: live,
                route: `${path}/live-class`
            },
            {
                ListItem: 'Library',
                ListImage: bookshelf,
                route: `${path}/library`
            },
            {
                ListItem: 'Certificate',
                ListImage: certificate,
                route: `${path}/certificate`
            },
        ]
    }
    return []
}

