import React from 'react';
import SectionHeader from '../section-header/SectionHeader';
import ServiceSlider from './ServiceSlider';

const Services = () => {
    return (
        <div className="service__area section-padding service__bg fix" id="service">
            <div className="space-60"></div>
            <div className="container">

                <SectionHeader title="Services Features" subtitle="Check my Education & work Experience" description="Appropriately engage transparent results for stand-alone interfaces. Progressively reinvent innovative products and sustainable supply." />


                <div className="space-50"></div>
                <div className="row">
                    <div className="col-12">
                        <ServiceSlider />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;