import React from 'react';

const SectionHeader = ({subtitle, title, description}) => {
    return (
        <div className="row">
            <div className="col-lg-4 align-self-center">
                <div className="heading">
                    <h6>{ subtitle }</h6>
                    <h2>{ title }</h2>
                </div>
            </div>
            <div className="col-lg-6 align-self-center">
                <div className="heading heading__second">
                    <p>{description }</p>
                </div>
            </div>
        </div>
    );
};

export default SectionHeader;