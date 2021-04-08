import React from 'react';

const SingleTeam = ({ image, name, job }) => {
    return (
        <div className="single__team">
            <img src={image} alt="" />
            <div className="team__content">
                <a href="#">{name}</a>
                <p>{job}</p>
                <div className="team__social">
                    <ul>
                        <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                        <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                        <li><a href="#"><i className="fab fa-skype"></i></a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default SingleTeam;