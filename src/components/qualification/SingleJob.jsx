import React from 'react';

const SingleJob = ({ year, subtitle, jobTitle, description }) => {
    return (
        <div>
            <div className="single__tab__content1">
                <ul className="tab__date">
                    <li className="active">{year}</li>
                    <li>{subtitle}</li>
                </ul>
                <div className="single__tab__content1__inner">
                    <h3> {jobTitle} </h3>
                    <p> {description} </p>
                </div>
                <div className="space-30"></div>
            </div>
            <div className="tab__separator"></div>
        </div>
    );
};

export default SingleJob;