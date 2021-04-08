import React from 'react';
import CtaBtn from '../../assets/img/icon/cta__icon.png';

const CallToAction = () => {
    return (
        <div className="cta section-padding3 yellow__bg fix" id="contact">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 align-self-center">
                        <div className="cta__text">
                            <img src={CtaBtn} alt="" />
                            <h4>If you need any inquiry please call me</h4>
                            <p>Conveniently conceptualize open-source niches</p>
                        </div>
                    </div>
                    <div className="col-lg-6 align-self-center">
                        <div className="cta__btn text-right">
                            <a href="#" className="cbtn2">Contact Now</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CallToAction;