import React from 'react';
import SingleJob from './SingleJob';

const SingleQualification = ({ title, id, areaLabel, active }) => {
    return (
        <div className={active ? "tab-pane fade show active" : "tab-pane fade show"} id={id} role="tabpanel" aria-labelledby={areaLabel} >
            <div className="space-50"></div>
            <div className="row">
                <div className="col-lg-6 align-self-center">
                    <div className="tab__content__heading">
                        <h2> {title} </h2>
                    </div>

                    <SingleJob year="2016 - Current" subtitle="State of Design" jobTitle="Lead UI/UX Designer" description="Objectively develop interoperable ideas whereas e-business alignments. Synergistically leverage existing dynamic." />

                    <SingleJob year="2018 - Current" subtitle="State of Design" jobTitle="Senior UI/UX Designer" description="Objectively develop interoperable ideas whereas e-business alignments. Synergistically leverage existing dynamic." />

                </div>
                <div className="col-lg-6 align-self-center">
                    <div className="video__box">
                        <div className="play__bg play__bg1">
                            <a className="play__btn" href="#"><img src="assets/img/icon/play.png" alt="" /></a>
                        </div>
                        <h3><span>10</span> years exprerience</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleQualification;