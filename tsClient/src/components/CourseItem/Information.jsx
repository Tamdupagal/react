import React from 'react';
import Box from '../Box/Box';
import './Information.scss'

function Information() {
    return (
        <Box cls="course__item__container">
            <h1 className="course__item__heading">
                Basic Information 
            </h1>
            <Box cls="course__item__box">
                <h2>Course Title</h2>
                <div className="title__box">Demo Course</div>
                <h4 className="course__item__des__title">Description</h4>
                <p className="course__item__description">
                    <span> Introduction to Coding</span>
                     <br />
                    Coding is a skill where you take instructions (the steps in a task) and translate it into a language the computer understands since computers do not communicate like humans.
                    <br />
                   <span>Introduction to AI</span> 
                    <br />
                    The process of machine learning when applied to get results or outputs that depict human or life like representations is called Artificial Intelligence
                    Shortly describe this course.
                    <br />
                    <small>Shortly describe this course</small>
                </p>
            </Box>
        </Box>
    )
}

export default Information
