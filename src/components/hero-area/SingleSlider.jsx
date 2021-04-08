import React from 'react';
import Person1 from '../../assets/img/bg/person1.png';

const SingleSlider = ({ subHeading, heading, description }) => {
    return (
        <div className="welcome welcome1 bg1 slide_overly1">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="title">
                            <span className="wow fadeInDown"> {subHeading} </span>
                            <h1 className="wow fadeInDown"> {heading} </h1>
                            <p className="wow fadeInDown"> {description} </p>

                            <div className="btn__group wow fadeInDown">
                                <a href="#" className="cbtn">contact</a>
                                <a href="#" className="cbtn">download resume</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <img src={Person1} alt="" className="carousel_1 carousel wow fadeInRight" />
        </div>
    );
};

export default SingleSlider;