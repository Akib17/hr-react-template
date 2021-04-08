import React from 'react';
import SingleService from './SingleService';

const ServiceSlider = () => {
    return (
        <div className="services owl-carousel nav__style">
            <SingleService title="App Development" description="Collaboratively develop exceptional infomediaries for alternative catalysts for change." />

            <SingleService title="Web Development" description="Collaboratively develop exceptional infomediaries for alternative catalysts for change." />

            <SingleService title="Graphics Design" description="Collaboratively develop exceptional infomediaries for alternative catalysts for change." />

            <SingleService title="Digital Marketing" description="Collaboratively develop exceptional infomediaries for alternative catalysts for change." />

            <SingleService title="Customer Relationship Management" description="Collaboratively develop exceptional infomediaries for alternative catalysts for change." />

        </div>
    );
};

export default ServiceSlider;