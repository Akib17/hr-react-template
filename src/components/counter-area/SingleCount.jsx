import React from 'react';

const SingleCount = ({title, description}) => {
    return (
        <div className="col-sm-6 col-lg-3">
            <div className="single__counter">

                <div className="single__circle">
                    <div className="one circle">
                        <strong></strong>
                    </div>
                </div>
                <div className="counter__text">
                    <h4> {title} </h4>
                    <p> {description} </p>
                </div>
            </div>
        </div>
    );
};

export default SingleCount;