import React from 'react';
import Author1 from '../../assets/img/testimonial/author1.png';
import Author2 from '../../assets/img/testimonial/testi2.png';
import Author3 from '../../assets/img/testimonial/testi3.png';
import Author4 from '../../assets/img/testimonial/testi4.png';
import SectionHeader from '../section-header/SectionHeader';
import SingleAuthor from './SingleAuthor';
import SingleTestmonial from './SingleTestmonial';

const Testimonial = () => {
    return (
        <div className="testimonial1 section-padding2 theme__bg1__with__img fix">
            <div className="container">

                <SectionHeader title="What client say" subtitle="Check my Education & work Experience" description="Appropriately engage transparent results for stand-alone interfaces. Progressively reinvent innovative products and sustainable supply." />

                <div className="space-50"></div>
                <div className="row">
                    <div className="col-lg-8 m-auto text-center">
                        <div className="testimonial1__carousel">
                            <div className="row">
                                <div className="col-lg-7 m-auto text-center">
                                    <div className="carousel__navs slider-nav">

                                        <SingleAuthor image={Author1} />
                                        <SingleAuthor image={Author2} />
                                        <SingleAuthor image={Author3} />
                                        <SingleAuthor image={Author4} />

                                    </div>
                                </div>
                            </div>
                            <div className="space-50"></div>

                            <div className="single_carousels slider-for">

                                <SingleTestmonial name="David Smith" job="Front End Developer" description="Efficiently formulate viral data for error-free users. Distinctively provide access to fully tested total linkage rather than process-centric infrastructures. Globally redefine accurate technologies with competitive supply chains." />

                                <SingleTestmonial name="John Deo" job="Back End Developer" description="Efficiently formulate viral data for error-free users. Distinctively provide access to fully tested total linkage rather than process-centric infrastructures. Globally redefine accurate technologies with competitive supply chains." />

                                <SingleTestmonial name="Jack Smith" job="Entrepreneur" description="Efficiently formulate viral data for error-free users. Distinctively provide access to fully tested total linkage rather than process-centric infrastructures. Globally redefine accurate technologies with competitive supply chains." />

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;