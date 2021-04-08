import React from 'react';
import SingleSlider from './SingleSlider';

const HeroArea = () => {
    return (

        <div className="hero__wrap">
            <div className="welcome__carousel owl-carousel" id="home">
                <SingleSlider subHeading="You are Entire" heading="Creative World" description="I’m Creative agency in the Digital Technology. It’s the time to getting Technical Knowledge." />

                <SingleSlider subHeading="You are Entire" heading="Innovative World" description="I’m Creative agency in the Digital Technology. It’s the time to getting Technical Knowledge." />

                <SingleSlider subHeading="You are Entire" heading="Discover a new World" description="I’m Creative agency in the Digital Technology. It’s the time to getting Technical Knowledge." />
            </div>
        </div>
    );
};

export default HeroArea;