import React from 'react';
import SectionHeader from '../section-header/SectionHeader';
import SingleQualification from './SingleQualification';
import TitleTab from './TitleTab';

const Qualification = () => {
    return (
        <div className="tab2 section-padding2 fix" id="about">
            <div className="container">

                <SectionHeader title="Experience & Education" subtitle="Check my Education & work Experience" description="Appropriately engage transparent results for stand-alone interfaces. Progressively reinvent innovative products and sustainable supply." />

                <div className="space-50"></div>

                <TitleTab />

                <div className="row">
                    <div className="col-12">
                        <div className="tab__content4">
                            <div className="tab-content" id="myTabContent">

                                <SingleQualification title="Experience" id="home" areaLabel="home-tab" active />
                                <SingleQualification title="Education" id="profile" areaLabel="profile-tab" />


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Qualification;