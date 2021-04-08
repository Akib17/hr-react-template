import React from 'react';
import Team1 from '../../assets/img/team/team1.jpg';
import Team2 from '../../assets/img/team/team2.jpg';
import Team3 from '../../assets/img/team/team3.jpg';
import SectionHeader from '../section-header/SectionHeader';
import SingleTeam from './SingleTeam';

const Team = () => {
    return (
        <div className="team__area team1 section-padding theme__bg1 fix">
            <div className="container">

                <SectionHeader title="Experts Members" subtitle="Check my Education & work Experience" description="Appropriately engage transparent results for stand-alone interfaces. Progressively reinvent innovative products and sustainable supply." />

                <div className="space-50"></div>
                <div className="row">
                    <div className="col-12">
                        <div className="team__mambers owl-carousel nav__style">

                            <SingleTeam image={Team1} name="David Smith" job="Web Developer" />
                            <SingleTeam image={Team2} name="David Smith" job="Graphics Designer" />
                            <SingleTeam image={Team3} name="David Smith" job="SEO Expert" />
                            <SingleTeam image={Team2} name="David Smith" job="UI/UX Designer" />
                            <SingleTeam image={Team3} name="David Smith" job="Backend Developer" />


                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Team;