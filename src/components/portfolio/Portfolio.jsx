import React from 'react';
import Project1 from '../../assets/img/project/project1.jpg';
import Project2 from '../../assets/img/project/project2.jpg';
import Project3 from '../../assets/img/project/project3.jpg';
import Project4 from '../../assets/img/project/project4.jpg';
import SectionHeader from '../section-header/SectionHeader';
import SinglePortfolio from './SinglePortfolio';

const Portfolio = () => {
    return (
        <div className="portfolio1__area section-padding portfolio__bg fix" id="work">
            <div className="container">
                <SectionHeader title="My Portfolio" subtitle="Check my Education & work Experience" description="Appropriately engage transparent results for stand-alone interfaces. Progressively reinvent innovative products and sustainable supply." />

                <div className="space-50"></div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="portfolio1 owl-carousel nav__style">

                            <SinglePortfolio job="Web Design" title="Creative Website Build" img={Project1} />
                            <SinglePortfolio job="Marketing" title="Hosting Landing Page" img={Project2} />
                            <SinglePortfolio job="Develop" title="App Development" img={Project3} />
                            <SinglePortfolio job="Designer" title="Creative Design" img={Project1} />
                            <SinglePortfolio job="Develop" title="App Development" img={Project3} />

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;