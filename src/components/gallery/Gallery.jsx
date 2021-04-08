import React from 'react';
import Insta1 from '../../assets/img/insta/insta1.jpg';
import Insta2 from '../../assets/img/insta/insta2.jpg';
import Insta3 from '../../assets/img/insta/insta3.jpg';
import Insta4 from '../../assets/img/insta/insta4.jpg';
import Insta5 from '../../assets/img/insta/insta5.jpg';
import Insta6 from '../../assets/img/insta/insta6.jpg';

const Gallery = ({ className }) => {
    return (
        <div className={className} >
            <div className="row justify-content-center">
                <div className="col-lg-4">
                    <div className="single_insta">
                        <a href="#"><img src={Insta1} alt="" /></a>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="single_insta">
                        <a href="#"><img src={Insta2} alt="" /></a>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="single_insta">
                        <a href="#"><img src={Insta3} alt="" /></a>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="single_insta">
                        <a href="#"><img src={Insta4} alt="" /></a>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="single_insta">
                        <a href="#"><img src={Insta5} alt="" /></a>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="single_insta">
                        <a href="#"><img src={Insta6} alt="" /></a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Gallery;