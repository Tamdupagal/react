import React from 'react'
import Box from '../Box/Box'
import './Details.scss'

function Details() {
    return (
        <Box cls="course__item__detail__box">
            <h2>Section : Tech Courses</h2>
            <img src={ } alt="course_Bg" />
            <span>Price</span>
            <div className="price__box">
                <span className="price__symbol">₹</span>
                <span>2.4 crore</span>
            </div>
        </Box>
    )
}

export default Details
