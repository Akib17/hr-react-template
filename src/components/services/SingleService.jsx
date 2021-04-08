import React from 'react';

const SingleService = ({ title, description }) => {
    return (
        <div className="single__service">
            <div className="service__icon">
                <i className="fas fa-pen"></i>
            </div>
            <h4><a href="service.html"> {title} </a></h4>
            <p> {description} </p>
        </div>
    );
};

export default SingleService;