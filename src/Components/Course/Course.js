import React from 'react';
import './Course.css';
const Course = (props) => {
    const totalCourse = props.course;
    const { name, img, level, price, seller } = totalCourse;
    return (
        <div >
            <div className="course-container mb-3 d-flex justify-content-start ">
                <div className="border">
                    <img style={{ width: "25em", height: "15em" }} className="course-image p-4" src={img} alt="" />
                </div>
                <div className="ml-3  text-left">
                    <h3>{name}</h3>
                    <p className="text-warning">by :{seller}</p>
                    <p className="text-danger"><small>Price : ${price}</small></p>
                    <p>Level : {level}</p>
                    <button onClick={() => props.handleAddCourse(totalCourse)} className="btn btn-primary">Enroll Now</button>
                </div>
            </div>


        </div>
    );
};

export default Course;