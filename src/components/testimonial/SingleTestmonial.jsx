import React from 'react';
import QuoteIcon from '../../assets/img/icon/quote.png';

const SingleTestmonial = ({ name, job, description }) => {
    return (
        <div className="single__testimonial1__carousel">
            <h3> {name} </h3>
            <h6>{job}</h6>
            <p> {description} </p>
            <div className="quote">
                <img src={QuoteIcon} alt="" />
            </div>
        </div>
    );
};

export default SingleTestmonial;