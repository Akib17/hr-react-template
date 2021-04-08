import React from 'react';

const SinglePortfolio = ({title, job, img}) => {
    return (
        <div className="single__portfolio">
            <div className="portfolio_bg">
                <img src={img} alt="" />
                <div className="portfolio__hover__icons">
                    <ul>
                        <li><a href="#"><i className="fab fa-dribbble"></i></a></li>
                        <li><a href="#"><i className="fab fa-pinterest"></i></a></li>
                    </ul>
                </div>
            </div>
            <div className="single__portfolio__content">
                <a href="portfolio.html"> {title} </a>
                <p>{ job}</p>
            </div>
        </div>
    );
};

export default SinglePortfolio;