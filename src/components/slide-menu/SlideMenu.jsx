import React from 'react';
import Author from '../../assets/img/testimonial/author1.png';
import Gallery from '../gallery/Gallery';

const SlideMenu = () => {
    return (
        <div className="side__menu">
            <div className="side__menu__wrap">
                <div className="side__area">
                    <div className="clse__btn">
                        <i className="fal fa-times"></i>
                    </div>

                    <div className="side__author">
                        <img src={Author} alt="Author Image" />
                        <h2><a href="#">Roton Hartmann</a></h2>
                        <h6>Creative Agency</h6>
                        <div className="space-20"></div>
                        <p>Synergistically evolve parallel <br /> resources and real-time expertise. Enthusiastically transform. </p>
                    </div>
                    <div className="space-30"></div>
                    <div className="side__social">
                        <ul>
                            <li><a href="#"><i className="fab fa-dribbble"></i></a></li>
                            <li><a href="#"><i className="fab fa-pinterest"></i></a></li>
                            <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                            <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                        </ul>
                    </div>
                    <div className="space-30"></div>
                    <Gallery className="instas" />
                </div>
            </div>
        </div>
    );
};

export default SlideMenu;