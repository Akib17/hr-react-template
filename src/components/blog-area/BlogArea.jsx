import React from 'react';
import SectionHeader from '../section-header/SectionHeader';
import SingleBlog from './SingleBlog';

const BlogArea = () => {
    return (
        <div className="service__area section-padding portfolio__bg fix" id="blog">
            <div className="container">

                <SectionHeader title="Services Features" subtitle="Check my Education & work Experience" description="Appropriately engage transparent results for stand-alone interfaces. Progressively reinvent innovative products and sustainable supply." />

                <div className="space-50"></div>
                <div className="row">
                    <div className="col-12">
                        <div className="news__feeds owl-carousel nav__style">

                            <SingleBlog title="Modern Web Technology" job="Web Developer" author="David Smith" description="Appropriately engage transparent results for stand-alone interfaces." />

                            <SingleBlog title="Changing the world" job="Tech Enthusiast" author="David Smith" description="Appropriately engage transparent results for stand-alone interfaces." />

                            <SingleBlog title="Modern Technology" job="Web Developer" author="David Smith" description="Appropriately engage transparent results for stand-alone interfaces." />

                            <SingleBlog title="Changing the world" job="Entrepreneur" author="Mark David" description="Appropriately engage transparent results for stand-alone interfaces." />


                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogArea;